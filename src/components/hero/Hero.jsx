import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";

const Hero = () => {
  const awardVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  const followVarient = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className="hero">
      <div className="hSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="hTitle"
        >
          Hey There, <br />
          <span>I am Kush!</span>
        </motion.h1>
        <motion.div
          animate={{
            opacity: 1,
            transition: { duration: 2, delayChildren: 0.5 },
          }}
          initial={{ opacity: 0 }}
          className="awards"
        >
          <motion.h2
            animate={awardVariants.animate}
            initial={awardVariants.initial}
            transition={{ duration: 1 }}
          >
            Top Rated Designer
          </motion.h2>

          <motion.p
            animate={awardVariants.animate}
            initial={awardVariants.initial}
            transition={{ duration: 1 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          </motion.p>

          <motion.div className="awardList">
            {["/award1.png", "/award2.png", "/award3.png"].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Award${index + 1}`}
                animate={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.8, opacity: 0 }}
                transition={{
                  duration: 6,
                  delay: index * 0.2,
                  staggerChildren: 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            easing: "ease-in-out",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                easing: "ease-in-out",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        <motion.div
          animate={followVarient.animate}
          initial={followVarient.initial}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="follow"
        >
          <motion.a
            animate={followVarient.animate}
            initial={followVarient.initial}
            transition={{ duration: 1, staggerChildren: 0.2 }}
            href="/"
          >
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a
            animate={followVarient.animate}
            initial={followVarient.initial}
            transition={{ duration: 1, staggerChildren: 0.2 }}
            href="/"
          >
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a
            animate={followVarient.animate}
            initial={followVarient.initial}
            transition={{ duration: 1, staggerChildren: 0.2 }}
            href="/"
          >
            <img src="/youtube.png" alt="" />
          </motion.a>
          <div className="followTextContainer">
            <div className="followText">Follow Me</div>
          </div>
        </motion.div>
        <Speech />
        <motion.a
          href="/#contact"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60, 60 0 1, 1 120,0 a 60, 60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now *</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="50%">
                  Contact Me *
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        <div className="hImg">
          <img src="/kush.png" alt="kush Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
