import React from 'react';
import { motion } from 'framer-motion';
import styles from './Cards.module.css';

function Card({ children, color = 'cream', className = '', ...props }) {
  return (
    <motion.div
      className={`${styles.card} ${styles[color]} ${className}`}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Card;
