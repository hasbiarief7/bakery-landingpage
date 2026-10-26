import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSearch, HiOutlineShoppingCart, HiMenu, HiX } from 'react-icons/hi';
import Button from '../Buttons/Buttons.jsx';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', path: '/', isRoute: true },
  { label: 'About', path: '/about', isRoute: true },
  { label: 'Products', path: '/#categories', isRoute: false },
  { label: 'Recipes', path: '/#specials', isRoute: false },
  { label: 'Contact', path: '/contact', isRoute: true },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <>
      <motion.header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to="/">impecify.com</Link>
          </div>

          <nav className={styles.menu}>
            {navLinks.map((link) =>
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

          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Search">
              <HiOutlineSearch size={22} />
            </button>
            <button className={styles.iconBtn} aria-label="Cart">
              <HiOutlineShoppingCart size={22} />
            </button>
            <Button variant="primary">Book a Table</Button>
            <button
              className={styles.hamburger}
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <HiMenu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              className={styles.sidebar}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className={styles.sidebarHeader}>
                <span className={styles.sidebarTitle}>Menu</span>
                <button
                  className={styles.closeBtn}
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX size={24} />
                </button>
              </div>
              <nav className={styles.sidebarMenu}>
                {navLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      to={link.path}
                      className={styles.sidebarLink}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.path}
                      className={styles.sidebarLink}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                )}
              </nav>
              <div className={styles.sidebarSearch}>
                <HiOutlineSearch size={20} />
                <input type="text" placeholder="Search..." className={styles.searchInput} />
              </div>
              <div className={styles.sidebarBtn}>
                <Button variant="primary">Book a Table</Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
