import { motion } from "framer-motion";
import { flex, styles, text } from "../styles";
import { ComputersCanvas } from "../components/canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Start Intro */}
      <div
        className={`absolute inset-0 top-40 max-w-7xl mx-auto ${styles.paddingX} ${flex.startStart} flex-row gap-5`}
      >
        {/* Start Shape */}
        <div className={`${flex.centerCenter} flex-col`}>
          <div className="w-5 h-5 rounded-full bg-fav" />
          <div className="w-0.5 h-24 sm:h-40 bg-gradient-to-b from-[#915eff] to-transparent" />
        </div>
        {/* End Shape */}

        {/* Start Text */}
        <div>
          <h1 className={text.heroHead}>
            Hi, I'm <span className="text-fav">Saeed</span>
          </h1>
          <p className={text.heroSub}>
            I develop 3D visuals, user <br className="hidden sm:block" />
            interfaces and web applications
          </p>
        </div>
        {/* End Text */}
      </div>
      {/* End Intro */}

      {/* Start 3D Desktop */}
      <ComputersCanvas />
      {/* End 3D Desktop */}

      {/* Start Btn Scroll Down */}
      <div className={`absolute ${flex.centerCenter} w-full bottom-10`}>
        <a href="#about">
          <div
            className={`${flex.startCenter} h-20 p-2 border-4 w-9 rounded-3xl border-secondary`}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
      {/* End Btn Scroll Down */}
    </section>
  );
};

export default Hero;
