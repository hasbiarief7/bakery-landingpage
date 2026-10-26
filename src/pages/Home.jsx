import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import useHashScroll from '../hooks/useHashScroll.js';
import Hero from '../components/Hero/Hero.jsx';
import Features from '../components/Features/Features.jsx';
import Promo from '../components/Promo/Promo.jsx';
import Specials from '../components/Specials/Specials.jsx';
import Categories from '../components/Categories/Categories.jsx';
import Story from '../components/Story/Story.jsx';
import Services from '../components/Services/Services.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Footer from '../components/Footer/Footer.jsx';
import RightPanel from '../components/RightPanel/RightPanel.jsx';
import styles from './Home.module.css';

function Home() {
  useHashScroll();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.layout}>
        <div className={styles.sections}>
          <Hero />
          <Features />
          <Promo />
          <Specials />
          <Categories />
          <Story />
          <Services />
          <Testimonials />
          <Footer />
        </div>
        <RightPanel />
      </main>
    </>
  );
}

export default Home;
