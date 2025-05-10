import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Hi, My name is Kush Bhandari",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "I am a front end engineer.",
            1000,
            "I am having 3 year of exprience.",
            1000,
            "I am looking for new opportunity.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          omitDeletionAnimation
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="Man" />
    </motion.div>
  );
};

export default Speech;
