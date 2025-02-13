import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { technologies } from "../constants";
import { useState } from "react";

const Tech = () => {
  const [colors, setColors] = useState({});

  const getRandomColor = () => {
    const colorList = "123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorList[Math.floor(Math.random() * colorList.length)];
    }
    return color;
  };

  const changeColor = (techName) => {
    setColors((prevColors) => ({
      ...prevColors,
      [techName]: getRandomColor(),
    }));
  };

  const handleReset = () => {
    setColors((col) => ({
      col: "#151030",
    }));
  };

  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <button
        className="bg-[#915eff] text-white py-3 px-6 rounded-full shadow-lg hover:shadow-purple-500/50 hover:bg-purple-800 transition-all"
        onClick={handleReset}
      >
        Reset
      </button>

      <div className="flex flex-row flex-wrap justify-center gap-14 mt-20">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <motion.div
              animate={{ scale: 1.2 }}
              className="h-28 w-28 text-white-100 flex items-center justify-center rounded-full text-center cursor-pointer shadow-lg"
              style={{ backgroundColor: colors[tech.name] || "#151030" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => changeColor(tech.name)}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                height={80}
                width={80}
                className="rounded-full"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
