import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Buttons/Buttons.jsx';
import styles from './Story.module.css';

function Story() {
  return (
    <section className={`section-padding ${styles.story}`} id="story">
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.heading}>
              Our Story,
              <br />
              <span className={styles.highlight}>Baked With Love</span>
            </h2>
            <p className={styles.text}>
              Since 1995, our family bakery has been creating delightful treats that bring joy to every occasion. 
              We believe in the power of simple, quality ingredients and time-honored recipes passed down through generations.
            </p>
            <p className={styles.text}>
              Every morning, our bakers arrive early to knead, shape, and bake fresh goods that fill our shop with the 
              irresistible aroma of home-baked happiness.
            </p>
            <Button variant="primary">Learn More</Button>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.bakerImage}>
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&q=80"
                  alt="Baker making bread"
                  loading="lazy"
                />
              </div>
              <motion.div
                className={styles.badge}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className={styles.badgeIcon}>✦</span>
                Freshly Baked Everyday
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Story;
