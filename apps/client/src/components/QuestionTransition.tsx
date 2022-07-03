import React, { Children, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PersonalQuestions } from "zod-types";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    };
  },
};

const QuestionTransition: React.FC<{
  isVisible?: boolean;
  questionKey: keyof PersonalQuestions;
  direction: number;
  children: React.ReactNode;
}> = ({ children, isVisible, questionKey, direction }) => {
  return (
    <>
      {true && (
        <motion.div
          variants={variants}
          key={`motion.nav${questionKey}`}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 2 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default QuestionTransition;
