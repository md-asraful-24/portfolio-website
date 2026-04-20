import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Cpu, 
  Layers, 
  Mail, 
  Terminal, 
  Globe, 
  Database,
  MessageCircle,
  Send,
  Camera,
  Code,
  Phone
} from 'lucide-react';
import profileImg from './assets/profile.jpg';
import './App.css';

const Sidebar = () => {
  const [active, setActive] = useState('home');
  
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <Terminal size={28} />
        <span>ASRAFUL.</span>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home" className={active === 'home' ? 'active' : ''} onClick={() => setActive('home')}>
            <Home size={20} className="icon" /> Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => setActive('about')}>
            <User size={20} className="icon" /> About
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className={active === 'services' ? 'active' : ''} onClick={() => setActive('services')}>
            <Cpu size={20} className="icon" /> Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className={active === 'portfolio' ? 'active' : ''} onClick={() => setActive('portfolio')}>
            <Layers size={20} className="icon" /> Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={() => setActive('contact')}>
            <Mail size={20} className="icon" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="hero-subtitle">Software Developer & Designer</span>
          <h1 className="hero-title">
            <span style={{ color: 'var(--primary)' }}>MD ASRAFUL ISLAM</span>
          </h1>
          <p className="hero-description" style={{ fontSize: '1.4rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '10px' }}>
            Building the Future with Code and Design.
          </p>
          <p className="hero-description" style={{ marginBottom: '2.5rem' }}>
            Studying at <strong>Satkhira Government Polytechnic Institute</strong>. 
            Dedicated to creating immersive digital experiences that combine functionality with stunning aesthetics.
          </p>
          <div className="cta-group">
            <a href="#portfolio" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-image-container"
        >
          <img src={profileImg} alt="MD Asraful Islam" className="hero-image" />
        </motion.div>
      </div>
  </section>
);

const Services = () => (
  <section id="services">
    <h2 className="section-title">My Services</h2>
    <div className="grid">
      <motion.div className="glass-card card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="card-icon"><Globe /></div>
        <h3 className="card-title">Web Development</h3>
        <p className="card-text">Crafting responsive, high-performance websites using the latest technologies like React and Vite.</p>
      </motion.div>
      <motion.div className="glass-card card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
        <div className="card-icon"><Layers /></div>
        <h3 className="card-title">UI/UX Design</h3>
        <p className="card-text">Designing intuitive and visually striking user interfaces with a focus on modern aesthetics.</p>
      </motion.div>
      <motion.div className="glass-card card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <div className="card-icon"><Database /></div>
        <h3 className="card-title">Backend Systems</h3>
        <p className="card-text">Building robust and scalable server-side architectures to power complex applications.</p>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer-main">
    <div className="footer-grid">
      <div className="footer-brand">
        <div className="footer-logo">ASRAFUL.</div>
        <p className="footer-bio">
          Innovating through code, designing with passion.
          Building modern digital solutions for the next generation.
        </p>
        <div className="social-links" style={{ justifyContent: 'flex-start' }}>
          <a href="mailto:asrafulislamai8932454@gmail.com" className="social-link"><Mail size={18} /></a>
          <a href="tel:01341765381" className="social-link"><Phone size={18} /></a>
          <a href="#" className="social-link"><MessageCircle size={18} /></a>
          <a href="#" className="social-link"><Code size={18} /></a>
        </div>
      </div>
      
      <div className="footer-nav">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Get In Touch</h4>
        <p>Gmail: asrafulislamai8932454@gmail.com</p>
        <p>Mobile: 01341765381</p>
        <p>Satkhira, Bangladesh</p>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p className="copyright">
        &copy; {new Date().getFullYear()} MD Asraful Islam. All rights reserved.
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <Hero />
        <Services />
        <section id="about">
          <h2 className="section-title">About Me</h2>
          <div className="glass-card card" style={{ maxWidth: '800px' }}>
            <p className="card-text">
              I am a dedicated software developer with a keen eye for detail and a passion for 
              innovation. My journey in technology is driven by a desire to solve complex 
              problems and create meaningful impact through digital solutions. Whether it's 
              a simple landing page or a complex web application, I bring 100% commitment 
              to every project.
            </p>
          </div>
        </section>
        <section id="contact">
          <h2 className="section-title">Get In Touch</h2>
          <div className="grid">
            <div className="glass-card card">
              <h3 className="card-title">Contact Information</h3>
              <div className="card-text" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={20} color="var(--primary)" />
                  <span>asrafulislamai8932454@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={20} color="var(--primary)" />
                  <span>01341765381</span>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:asrafulislamai8932454@gmail.com" className="btn btn-primary">Send an Email</a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
