import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import styles from './Footer.module.css';

import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', path: '/', isRoute: true },
  { label: 'About', path: '/about', isRoute: true },
  { label: 'Products', path: '/#categories', isRoute: false },
  { label: 'Recipes', path: '/#specials', isRoute: false },
  { label: 'Contact', path: '/contact', isRoute: true },
];
const support = ['FAQ', 'Shipping', 'Returns', 'Privacy Policy', 'Terms'];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
  transition: { duration: 0.5 },
};

function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.grid}>
          {/* Left - Logo & Description */}
          <motion.div className={styles.brand} {...fadeInUp}>
            <div className={styles.pastryImage}>
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=150&q=80"
                alt="Pastry"
                loading="lazy"
              />
            </div>
            <h3 className={styles.logo}>impecify.com</h3>
            <p className={styles.desc}>
              Crafting delightful baked goods with love and tradition since 1995. Every bite tells a story.
            </p>
          </motion.div>

          {/* Middle - Quick Links */}
          <motion.div
            className={styles.column}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
          >
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.links}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.path}>{link.label}</Link>
                  ) : (
                    <a href={link.path}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Middle - Support */}
          <motion.div
            className={styles.column}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <h4 className={styles.columnTitle}>Support</h4>
            <ul className={styles.links}>
              {support.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Social Media */}
          <motion.div
            className={styles.column}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            <h4 className={styles.columnTitle}>Follow Us</h4>
            <div className={styles.social}>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Instagram">
                <FaInstagram />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Facebook">
                <FaFacebook />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Twitter">
                <FaTwitter />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Pinterest">
                <FaPinterest />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} impecify.com. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
