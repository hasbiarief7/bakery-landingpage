import React from 'react';
import { motion } from 'framer-motion';
import { HiTruck, HiShieldCheck, HiSparkles, HiSupport } from 'react-icons/hi';
import styles from './Services.module.css';

const services = [
  { icon: <HiTruck />, title: 'Fast Delivery' },
  { icon: <HiShieldCheck />, title: 'Secure Payment' },
  { icon: <HiSparkles />, title: '100% Fresh' },
  { icon: <HiSupport />, title: '24/7 Support' },
];

function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.grid}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.icon}>{s.icon}</div>
              <span className={styles.title}>{s.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
