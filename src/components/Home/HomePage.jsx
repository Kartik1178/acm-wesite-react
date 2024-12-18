import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

import CategoriesSection from './CategoriesSection';

import Footer from './Footer';
import FunfactAndFaqSection from './FunFactAndFaqSection';
import TestimonialSection from './TestimonialSection';
import UpcomingEvents from './UpcomingEvents';
import { ContactSection, TeamSection } from './ContactandTeamSection';
import Preloader from './Preloader';
import MagicCursor from './MagicCursor';
import BackToTop from './BacktoTop';
import MobileMenu from './MobileMenu';


const HomePage = () => (
  <div className="ep-magic-cursor">
      <Preloader/>
     <MagicCursor/>
     <BackToTop/>
      <MobileMenu/>
    
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
      
        <HeroSection />
      
        <FunfactAndFaqSection/>
  {/*<TestimonialSection/>*/} 
  <UpcomingEvents/> 
      
      </main>
    </div>
  </div>
  </div>
);

export default HomePage;