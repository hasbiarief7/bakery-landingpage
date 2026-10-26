import React from 'react';
import { motion } from 'framer-motion';
import styles from './Buttons.module.css';

function Button({ children, variant = 'primary', onClick, className = '', ...props }) {
  return (
    <motion.button
      className={`${styles.btn} ${styles[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
