import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiStar, HiHeart, HiBadgeCheck, HiShieldCheck } from 'react-icons/hi';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import styles from './About.module.css';

const values = [
  {
    icon: <HiHeart />,
    title: 'Made With Love',
    desc: 'Every recipe is crafted with passion, care, and generations of baking tradition.',
  },
  {
    icon: <HiBadgeCheck />,
    title: 'Quality First',
    desc: 'We source only the finest ingredients — no shortcuts, no compromises.',
  },
  {
    icon: <HiShieldCheck />,
    title: 'Trusted Since 1995',
    desc: 'For over 25 years, our community has trusted us for their daily bread and treats.',
  },
];

const team = [
  {
    name: 'Maria Rossi',
    role: 'Head Baker',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&q=80',
  },
  {
    name: 'James Chen',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
  },
  {
    name: 'Emily Davis',
    role: 'Cake Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
  },
];

function About() {
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
              Our Story,
              <br />
              <span className={styles.highlight}>Baked With Love</span>
            </h1>
            <p className={styles.subtitle}>
              Discover the passion, tradition, and dedication behind every pastry we create.
            </p>
          </div>
        </motion.section>

        {/* Story */}
        <section className={`section-padding ${styles.story}`}>
          <div className="container">
            <div className={styles.storyGrid}>
              <motion.div
                className={styles.storyContent}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className={styles.sectionTitle}>A Legacy of Flavor</h2>
                <p className={styles.text}>
                  It all started in a small kitchen in 1995, when Maria Rossi decided to share her 
                  family's secret recipes with the world. What began as a humble neighborhood bakery 
                  has grown into a beloved destination for pastry lovers everywhere.
                </p>
                <p className={styles.text}>
                  Today, we continue to honor those original recipes while embracing new techniques 
                  and flavors. Every morning, our bakers arrive before dawn to knead, proof, and 
                  bake — ensuring every loaf, pastry, and cake is as fresh as it is delicious.
                </p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>25+</span>
                    <span className={styles.statLabel}>Years of Baking</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>50K+</span>
                    <span className={styles.statLabel}>Happy Customers</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>100+</span>
                    <span className={styles.statLabel}>Unique Recipes</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className={styles.storyImage}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
                  alt="Bakery interior"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={`section-padding ${styles.values}`}>
          <div className="container">
            <motion.h2
              className={styles.sectionTitle}
              style={{ textAlign: 'center', marginBottom: 48 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What We Stand For
            </motion.h2>
            <div className={styles.valuesGrid}>
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  className={styles.valueCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className={`section-padding ${styles.team}`}>
          <div className="container">
            <motion.h2
              className={styles.sectionTitle}
              style={{ textAlign: 'center', marginBottom: 48 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meet Our Team
            </motion.h2>
            <div className={styles.teamGrid}>
              {team.map((t, i) => (
                <motion.div
                  key={t.name}
                  className={styles.teamCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <div className={styles.teamImage}>
                    <img src={t.image} alt={t.name} loading="lazy" />
                  </div>
                  <h3 className={styles.teamName}>{t.name}</h3>
                  <p className={styles.teamRole}>{t.role}</p>
                </motion.div>
              ))}
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
              <h2 className={styles.ctaTitle}>Ready to Taste the Difference?</h2>
              <p className={styles.ctaText}>
                Visit our bakery today and experience the love in every bite.
              </p>
              <Link to="/" className={styles.ctaBtn}>Explore Our Menu</Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
