import { motion, AnimatePresence } from "motion/react";

const useRenderFormErrors = () => {
  function renderFormErrors(errorMessage: string) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15, type: "tween" }}
          className="absolute text-red-500 text-sm -bottom-5"
        >
          {errorMessage}
        </motion.div>
      </AnimatePresence>
    );
  }

  return { renderFormErrors };
};

export default useRenderFormErrors;
