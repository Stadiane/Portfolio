import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { Profil } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl 
      mx-auto flex flex-row items-start gap-5`}
      >
        <motion.img
          src={Profil}
          alt="profil"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg border-4 border-blue-400 mr-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Bonjour, Je suis Stadiane
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-40`}>
            {" "}
            {/*<br className ="sm:block hidden"/>*/}
            Actuellement en 2ᵉ année à l'ESGI (Ecole Supérieure de Génie
            Informatique), je recherche une alternance pour mettre à profit mes
            compétences et m'investir dans des projets stimulants.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[30px] right-4 sm:right-10 w-1/2 sm:w-1/2 h-1/2 sm:h-1/2 z-10">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
