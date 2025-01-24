import { styles } from "../styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Main Intro */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Gaurav</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-4`}>
            A passionate <span className="text-[#ffd700]">web developer</span>{" "}
            and computer science student <br className="sm:hidden block" />
            with a focus on creating interactive experiences.
          </p>

          {/* Call-to-Action */}
          <div className="mt-6">
            <a href="#projects">
              <button className="bg-[#915eff] text-white py-3 px-6 rounded-full shadow-lg hover:bg-purple-800 transition-all">
                See My Work
              </button>
            </a>
            <a href="#contact" className="ml-4">
              <button className="border-2 border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-[#915eff] transition-all">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </div>

      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="h-[64px] w-[35px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 animate-bounce">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
