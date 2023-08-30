import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/banner">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="confirm"
        >
          Confirm Booking
        </motion.button>
      </Link>

      <AnimatePresence initial={false} mode="wait"></AnimatePresence>
    </div>
  );
};

export default Home;
