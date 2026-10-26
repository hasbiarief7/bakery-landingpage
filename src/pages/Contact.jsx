import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: <HiLocationMarker />, label: 'Address', value: '123 Bakery Street, Pastryville, NY 10001' },
  { icon: <HiPhone />, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: <HiMail />, label: 'Email', value: 'hello@impecify.com' },
  { icon: <HiClock />, label: 'Hours', value: 'Mon-Sat: 7AM - 8PM • Sun: 8AM - 5PM' },
];

function Contact() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.page}>
        {/* Hero */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.container}>
            <h1 className={styles.title}>
              Get In <span className={styles.highlight}>Touch</span>
            </h1>
            <p className={styles.subtitle}>
              We'd love to hear from you! Drop us a message or visit our bakery.
            </p>
          </div>
        </motion.section>

        {/* Contact Grid */}
        <section className={`section-padding ${styles.contact}`}>
          <div className="container">
            <div className={styles.grid}>
              {/* Contact Form */}
              <motion.div
                className={styles.formCard}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.formRow}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={styles.input}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={styles.input}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className={styles.input}
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    className={styles.textarea}
                    rows={5}
                    required
                  />
                  <motion.button
                    type="submit"
                    className={styles.submitBtn}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className={styles.infoCard}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className={styles.formTitle}>Contact Information</h2>
                <div className={styles.infoList}>
                  {contactInfo.map((item) => (
                    <div key={item.label} className={styles.infoItem}>
                      <div className={styles.infoIcon}>{item.icon}</div>
                      <div>
                        <p className={styles.infoLabel}>{item.label}</p>
                        <p className={styles.infoValue}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className={styles.mapPlaceholder}>
                  <div className={styles.mapContent}>
                    <HiLocationMarker size={32} />
                    <p>123 Bakery Street, Pastryville, NY</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`section-padding ${styles.cta}`}>
          <div className="container">
            <motion.div
              className={styles.ctaContent}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={styles.ctaTitle}>Visit Our Bakery Today!</h2>
              <p className={styles.ctaText}>
                Stop by for a fresh cup of coffee and a pastry — we can't wait to meet you!
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
