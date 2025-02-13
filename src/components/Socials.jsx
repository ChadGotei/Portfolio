import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { socials } from "../constants";
import toast from "react-hot-toast";
import copy from "copy-to-clipboard";
import { phone } from "../assets";

const Socials = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl min-h-[300px] ${styles.padding}`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Social Media</h2>
        </motion.div>

        <div className="md:mx-10 sm:mx-8 mx-6 md:mt-20 sm:mt-8 mt-10 flex flex-row md:gap-20 sm:gap-12 gap-10 justify-center items-center flex-wrap">
          {socials.map((social, index) => (
            <SocialShape key={index} {...social} />
          ))}

          {/* for the Phone number */}
          <div className="hidden sm:block">
            <SocialShape
              name="Phone no."
              image={phone}
              link={""}
              cn="h-[2.78rem] w-[2.78rem] md:h-[5.7rem] md:w-[5.7rem] sm:h-[3rem] sm:w-[3rem]"
              toCopy="+91 9315130205"
            />
          </div>

          <div className="block sm:hidden">
            <SocialShape
              name="Phone no."
              image={phone}
              cn="h-[2.78rem] w-[2.78rem] md:h-[5.7rem] md:w-[5.7rem] sm:h-[3rem] sm:w-[3rem]"
              toCopy="+91 9315130205"
              link="tel:+91 9315130205"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialShape = ({ name, image, link, cn, toCopy }) => {
  const handeCLick = () => {
    if (toCopy) {
      toast.success(`Copied ${name} to clipboard`, {
        icon: "📋",
        style: {
          borderRadius: "10px",
          background: "#aaa6c3",
          color: "#100d25",
          padding: "1rem",
          fontWeight: "400",
        },
        duration: 1750,
        position: "bottom-center",
      });

      copy(toCopy);
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "", 0.75, 0.7)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div
        className={`lg:h-40 lg:w-40 md:h-[7rem] md:w-[7rem] h-20 w-20 
        bg-gradient-to-br from-secondary to-tertiary rounded-full 
        shadow-md shadow-secondary hover:shadow-2xl 
        transition-all duration-300 ease-in-out flex justify-center items-center hover:cursor-pointer`}
        onClick={handeCLick}
      >
        <a
          href={link || "#socials"}
          target={link ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <img src={image} alt={name} className={`object-contain ${cn}`} />
        </a>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Socials, "socials");
