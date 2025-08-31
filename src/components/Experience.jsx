import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { internship } from "../constants"; 

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I’ve worked</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.15, 1)}
        className="mt-10 bg-black-100 rounded-[20px] p-6 sm:p-8 border border-white/10"
      >
        <div className="flex items-start gap-5">
          {/* icon / logo */}
          {internship.icon && (
            <div
              className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: internship.iconBg || "#151030" }}
            >
              <img
                src={internship.icon}
                alt={internship.company}
                className="w-3/4 h-3/4 object-contain"
                loading="lazy"
              />
            </div>
          )}

          {/* header */}
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="text-white text-[22px] sm:text-[24px] font-bold leading-tight">
                {internship.title}
              </h3>
              <span className="text-secondary text-[14px]">•</span>
              <p className="text-secondary text-[14px] font-medium">
                {internship.company}
              </p>
            </div>

            <div className="mt-1 text-secondary text-[12px] sm:text-[13px]">
              <span>{internship.date}</span>
              {internship.location ? <span> • {internship.location}</span> : null}
              {internship.type ? <span> • {internship.type}</span> : null}
            </div>

            {/* tech stack tags */}
            {Array.isArray(internship.stack) && internship.stack.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {internship.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] px-2 py-1 rounded-md bg-black-200/60 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* bullets */}
            {Array.isArray(internship.points) && internship.points.length > 0 && (
              <ul className="mt-4 list-disc ml-5 space-y-2">
                {internship.points.map((p, i) => (
                  <li
                    key={`intern-point-${i}`}
                    className="text-white-100 text-[14px] tracking-wider"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            )}

            {/* links */}
            {(internship.links?.length ?? 0) > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {internship.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] px-3 py-1.5 rounded-md border border-primary/50 bg-tertiary/60 hover:bg-tertiary transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
