import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles, HiSun, HiHeart, HiBadgeCheck } from 'react-icons/hi';
import Card from '../Cards/Cards.jsx';
import styles from './Features.module.css';

const features = [
  {
    icon: <HiSparkles />,
    title: 'Premium Ingredients',
    desc: 'Only the finest, hand-selected ingredients for every recipe.',
    color: 'cream',
  },
  {
    icon: <HiSun />,
    title: 'Baked Fresh Daily',
    desc: 'We bake every morning so you get the freshest treats.',
    color: 'pink',
  },
  {
    icon: <HiHeart />,
    title: 'Made With Love',
    desc: 'Every pastry is crafted with passion and care.',
    color: 'blue',
  },
  {
    icon: <HiBadgeCheck />,
    title: '100% Natural & Healthy',
    desc: 'No preservatives, no artificial flavors — just pure goodness.',
    color: 'yellow',
  },
];

function Features() {
  return (
    <section className={`section-padding ${styles.features}`}>
      <div className="container">
        <div className={styles.grid}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card color={f.color}>
                <div className={styles.icon}>{f.icon}</div>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.desc}>{f.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
