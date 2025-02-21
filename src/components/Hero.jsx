import { styles } from "../styles";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile2 } from "../assets";

const Hero = () => {
  const [text, setText] = useState("");
  const phrases = [
    "Web Developer",
    "MERN Stack Enthusiast",
    "Front End",
    "Back End",
    "Full Stack Developer",
  ];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(phrases[index]);
      index = (index + 1) % phrases.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"></div>

      <div>
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className="text-[#915eff]">Gaurav</span>
            </h1>

            <motion.p
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-[#ffd700] text-xl font-semibold mt-2"
            >
              {text}
            </motion.p>
            <p className={`${styles.heroSubText} text-white-100 mt-4`}>
              A passionate <span className="text-[#ffd700]">web developer</span>{" "}
              and computer science student <br className="sm:hidden block" />
              {/* with a focus on creating interactive experiences. */}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <a 
                target="_blank"
                href="https://drive.google.com/file/d/1bhGH4FBtXmjB5sPwDIr9BrDLp2N2GEDA/view"
              >
                <button className="border-2 border-white hover:text-white py-3 px-6 rounded-full bg-white text-[#915eff] transition-all hover:bg-transparent">
                  Resume
                </button>
              </a>
              <a href="#socials">
                <button className="border-2 border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-[#915eff] transition-all">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
          <img
            src={profile2}
            height={400}
            width={400}
            className="hidden md:block"
          />
        </div>
      </div>

      {/* scroll down thingy */}
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
