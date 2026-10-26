import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Button from '../Buttons/Buttons.jsx';
import styles from './Hero.module.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80',
    alt: 'Delicious chocolate chip cookie',
  },
  {
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',
    alt: 'Glazed donut with sprinkles',
  },
  {
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&q=80',
    alt: 'Colorful cupcakes',
  },
  {
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80',
    alt: 'Fresh croissant pastry',
  },
];

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className={styles.title}>
            SWEET
            <br />
            <span className={styles.highlight}>DELIGHT!</span>
          </h1>
          <p className={styles.subtitle}>
            Indulge in our freshly baked goods made with love and the finest ingredients. Every bite tells a story of passion and tradition.
          </p>
          <div className={styles.rating}>
            <div className={styles.stars}>
              <HiStar />
              <HiStar />
              <HiStar />
              <HiStar />
              <HiStar />
            </div>
            <span className={styles.ratingText}>4.9</span>
            <span className={styles.since}>Since 1995</span>
          </div>
          <Button variant="primary" className={styles.cta}>Order Now</Button>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            {/* Decorative floating dots */}
            <div className={styles.dots}>
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className={styles.dot}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeInOut',
                  }}
                  style={{
                    left: `${20 + (i % 3) * 30}%`,
                    top: `${Math.floor(i / 3) * 40 + 10}%`,
                  }}
                />
              ))}
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              speed={800}
              className={styles.swiper}
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i} className={styles.swiperSlide}>
                  <div className={styles.cookie}>
                    <img src={slide.image} alt={slide.alt} loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Small floating cookie icon */}
            <motion.div
              className={styles.smallCookie}
              animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=100&q=80"
                alt="Mini cookie"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
