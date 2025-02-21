/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

import { github } from "../assets";
import { vercel } from "../assets";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>My work </p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] text-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problms, work with different set of
          technologies, and manage projets efficiently.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 100,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* card in details */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            {/* OLD VERSION, might add this back so keeping it here */}
            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 cursor-pointer rounded-full flex justify-center items-center"
            >
              <img src={github} className="w-1/2 h-1/2 object-contain" />
            </div> */}
            {/* {website_link && (
              <div
                onClick={() => window.open(website_link, "_blank")}
                className="black-gradient w-10 h-10 cursor-pointer rounded-full flex justify-center items-center"
              >
                <img src={vercel} className="w-1/2 h-1/2 object-contain" />
              </div>
            )} */}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-bold pb-2 text-white text-[24px]">{name}</h3>
          <p className="text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>

      {/* Links Section */}
      <div
        className="mt-4 flex flex-col bg-tertiary rounded-lg px-2 hover:scale-105
      transition-all hover:cursor-pointer"
      >
        <div className="flex items-center gap-3 p-2 rounded-lg">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-gray-800 hover:bg-gray-700 transition-colors w-10 h-10 cursor-pointer rounded-full flex justify-center items-center"
          >
            <img src={github} className="w-1/2 h-1/2 object-contain hover:animate-pulse" />
          </div>
          <p
            onClick={() => window.open(source_code_link, "_blank")}
            className="text-white text-sm cursor-pointer hover:underline"
          >
            Source Code Link
          </p>
        </div>

        <hr
          className={`${
            website_link ? "block" : "hidden"
          } border-t-2 border-primary`}
        />
        {website_link && (
          <div className="flex items-center gap-3 p-2 rounded-lg">
            <div
              onClick={() => window.open(website_link, "_blank")}
              className="bg-gray-800 hover:bg-gray-700 transition-colors w-10 h-10 cursor-pointer rounded-full flex justify-center items-center"
            >
              <img src={vercel} className="w-1/2 h-1/2 object-contain hover:animate-pulse" />
            </div>
            <p
              onClick={() => window.open(website_link, "_blank")}
              className="text-white text-sm cursor-pointer hover:underline"
            >
              Website Link
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Projects, "projects");
