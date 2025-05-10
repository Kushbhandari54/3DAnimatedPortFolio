import { motion } from "@motionone/react";

const Test = () => {
  return (
    <motion.div
      style={{
        width: "100px",
        height: "100px",
        background: "red",
        zIndex: 100,
        margin: "50px auto",
      }}
      animate={{
        scale: 2, // Animation property
      }}
      transition={{
        duration: 2, // Animation duration
      }}
    />
  );
};

export default Test;
