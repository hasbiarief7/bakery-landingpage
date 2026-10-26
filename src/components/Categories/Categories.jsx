import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Button from '../Buttons/Buttons.jsx';
import styles from './Categories.module.css';

const categories = [
  { name: 'Cupcakes', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=200&q=80' },
  { name: 'Brownies', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&q=80' },
  { name: 'Doughnuts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&q=80' },
  { name: 'Pastries', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=200&q=80' },
  { name: 'Cookies', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200&q=80' },
  { name: 'Muffins', image: 'https://images.unsplash.com/photo-1559244663-eae64e5b4b99?w=200&q=80' },
];

function Categories() {
  return (
    <section className={`section-padding ${styles.categories}`} id="categories">
      <div className="container">
        <div className={styles.header}>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore Our Delicious Creations
          </motion.h2>
          <Button variant="secondary">
            View All <HiArrowRight />
          </Button>
        </div>
        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className={styles.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.08 }}
            >
              <div className={styles.circle}>
                <img src={cat.image} alt={cat.name} loading="lazy" />
              </div>
              <span className={styles.name}>{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
