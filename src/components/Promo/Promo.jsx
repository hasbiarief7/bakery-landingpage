import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Buttons/Buttons.jsx';
import styles from './Promo.module.css';

function Promo() {
  return (
    <section className={`section-padding ${styles.promo}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Discount Card */}
          <motion.div
            className={styles.discountCard}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.discountContent}>
              <div className={styles.donut}>
                <img
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&q=80"
                  alt="Donut"
                  loading="lazy"
                />
              </div>
              <div className={styles.discountInfo}>
                <span className={styles.badge}>20% OFF</span>
                <p className={styles.discountDesc}>On your first order!</p>
                <Button variant="primary">Claim Discount</Button>
              </div>
            </div>
          </motion.div>

          {/* Today's Special */}
          <motion.div
            className={styles.specialCard}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.specialTitle}>Today's Special</h3>
            <ul className={styles.specialList}>
              <li>
                <span className={styles.bullet} />
                Chocolate Brownie
              </li>
              <li>
                <span className={styles.bullet} />
                Cream Doughnut
              </li>
              <li>
                <span className={styles.bullet} />
                Berry Cupcake
              </li>
            </ul>
            <Button variant="secondary" className={styles.viewMenu}>View Menu</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
