import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Buttons/Buttons.jsx';
import styles from './Specials.module.css';

const specials = [
  {
    name: 'Chocolate Lava Cake',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=300&q=80',
    price: '$8.99',
  },
  {
    name: 'Strawberry Cheesecake',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&q=80',
    price: '$9.99',
  },
  {
    name: 'Blueberry Muffin',
    image: 'https://images.unsplash.com/photo-1559244663-eae64e5b4b99?w=300&q=80',
    price: '$5.99',
  },
  {
    name: 'Croissant',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038028a?w=300&q=80',
    price: '$4.99',
  },
];

function Specials() {
  return (
    <section className={`section-padding ${styles.specials}`} id="specials">
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Today's Specials
        </motion.h2>
        <div className={styles.grid}>
          {specials.map((item, i) => (
            <motion.div
              key={item.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.image}>
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{item.name}</h3>
                <span className={styles.price}>{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
