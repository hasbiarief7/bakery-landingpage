import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className={styles.cookieWrapper}>
          <motion.div
            className={styles.cookie}
            animate={{
              rotate: [0, 12, -12, 8, -8, 0],
              y: [0, -12, 0],
            }}
            transition={{
              rotate: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&q=80"
              alt="Loading cookie"
              loading="eager"
            />
          </motion.div>
          {/* Floating crumbs */}
          <motion.div
            className={`${styles.crumb} ${styles.crumb1}`}
            animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className={`${styles.crumb} ${styles.crumb2}`}
            animate={{ y: [0, -16, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
          />
          <motion.div
            className={`${styles.crumb} ${styles.crumb3}`}
            animate={{ y: [0, -18, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.3 }}
          />
        </div>

        <div className={styles.textWrapper}>
          <span className={styles.text}>Loading</span>
          <motion.span
            className={styles.dots}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ...
          </motion.span>
        </div>
        <p className={styles.subtext}>Preparing something delicious...</p>
      </motion.div>
    </div>
  );
}

export default Loading;
