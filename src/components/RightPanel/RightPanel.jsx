import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiStar, HiArrowRight } from 'react-icons/hi';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import Button from '../Buttons/Buttons.jsx';
import styles from './RightPanel.module.css';

const categories = [
  { name: 'Cupcakes', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=100&q=80' },
  { name: 'Cookies', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=100&q=80' },
  { name: 'Pastries', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=100&q=80' },
];

const menuLinks = [
  { label: 'Home', path: '/', isRoute: true },
  { label: 'About', path: '/about', isRoute: true },
  { label: 'Products', path: '/#categories', isRoute: false },
  { label: 'Recipes', path: '/#specials', isRoute: false },
  { label: 'Contact', path: '/contact', isRoute: true },
];

function RightPanel() {
  return (
    <motion.aside
      className={styles.panel}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className={styles.inner}>
        {/* Hero Mini */}
        <div className={styles.section}>
          <div className={styles.heroMini}>
            <div className={styles.heroImage}>
              <img
                src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200&q=80"
                alt="Cookie"
                loading="lazy"
              />
            </div>
            <div className={styles.heroInfo}>
              <h4 className={styles.heroTitle}>Sweet Delight!</h4>
              <div className={styles.heroRating}>
                <HiStar className={styles.starIcon} />
                <span>4.9</span>
                <span className={styles.heroSince}>Since 1995</span>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Mini */}
        <div className={styles.section}>
          <div className={styles.promoMini}>
            <span className={styles.promoBadge}>20% OFF</span>
            <p className={styles.promoText}>First order discount</p>
            <Button variant="primary" className={styles.promoBtn}>Claim Now</Button>
          </div>
        </div>

        {/* Story Mini */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Our Story</h4>
          <p className={styles.sectionText}>
            Since 1995, baking with love and tradition. Every bite tells a story of passion.
          </p>
          <a href="#story" className={styles.learnMore}>
            Learn More <HiArrowRight />
          </a>
        </div>

        {/* Categories Mini */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Categories</h4>
          <div className={styles.categoriesGrid}>
            {categories.map((cat) => (
              <div key={cat.name} className={styles.categoryItem}>
                <div className={styles.categoryCircle}>
                  <img src={cat.image} alt={cat.name} loading="lazy" />
                </div>
                <span className={styles.categoryName}>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Mini */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Quick Menu</h4>
          <nav className={styles.menuList}>
            {menuLinks.map((link) =>
              link.isRoute ? (
                <Link key={link.label} to={link.path} className={styles.menuLink}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.path} className={styles.menuLink}>
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Testimonials Mini */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Testimonial</h4>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialStars}>
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} className={styles.starIcon} />
              ))}
            </div>
            <p className={styles.testimonialText}>
              "The best bakery in town! Their croissants are absolutely heavenly."
            </p>
            <p className={styles.testimonialAuthor}>— Sarah J.</p>
          </div>
        </div>

        {/* Footer Mini */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Pinterest"><FaPinterest /></a>
          </div>
          <p className={styles.contactText}>
            Contact: hello@impecify.com<br />
            +1 (555) 123-4567
          </p>
        </div>
      </div>
    </motion.aside>
  );
}

export default RightPanel;
