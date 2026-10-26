import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    text: 'The best bakery in town! Their croissants are absolutely heavenly. I drive across the city just to get them!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Food Blogger',
    text: 'Every item I have tried is crafted with such care. The chocolate brownie is a game changer. Highly recommend!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Emily Davis',
    role: 'Loyal Customer',
    text: 'Been coming here for years and the quality never drops. The Berry Cupcake is my personal favorite.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
];

function Testimonials() {
  return (
    <section className={`section-padding ${styles.testimonials}`}>
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className={styles.stars}>
                {[...Array(t.rating)].map((_, j) => (
                  <HiStar key={j} />
                ))}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <img src={t.avatar} alt={t.name} loading="lazy" />
                </div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
