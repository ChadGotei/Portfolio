import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { academics as experiences } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Academic = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Academic Highlights</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <AcademicCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const AcademicCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #232631 100%)",
        color: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
      }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.board}
            className="w-[60%] h-[60%] object-contain cursor-pointer transition-transform hover:scale-110"
          />
        </div>
      }
    >
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.board}
        </p>
      </motion.div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default SectionWrapper(Academic, "academic");
