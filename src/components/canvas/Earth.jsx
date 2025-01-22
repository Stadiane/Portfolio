import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf", true);

  console.log("Loaded GLTF:", earth);

  // Vérification et correction des NaN dans les positions de la géométrie
  earth.scene.traverse((child) => {
    if (child.isMesh) {
      const positions = child.geometry.attributes.position.array;

      let hasNaN = false;
      for (let i = 0; i < positions.length; i++) {
        if (isNaN(positions[i])) {
          hasNaN = true;
          positions[i] = 0; // Remplace NaN par 0
        }
      }

      if (hasNaN) {
        console.warn("NaN values corrected in geometry positions:", positions);

        // Si des modifications ont été faites, marquez l'attribut pour mise à jour
        child.geometry.attributes.position.needsUpdate = true;

        // Recalculez les bounding box et bounding sphere
        child.geometry.computeBoundingBox();
        child.geometry.computeBoundingSphere();
      }
    }
  });

  return (
    <group>
      {/* Affiche le modèle principal */}
      <primitive
        object={earth.scene}
        scale={[2.5, 2.5, 2.5]} // Ajustez l'échelle
        position={[0, 0, 0]} // Centrez le modèle
        rotation={[0, 0, 0]} // Ajustez la rotation si nécessaire
      />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [-4, 3, 6],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} castShadow />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
