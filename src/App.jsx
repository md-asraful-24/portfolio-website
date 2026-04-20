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
  Phone,
  Languages,
  Menu,
  X
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import profileImg from './assets/profile.jpg';
import './App.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [active, setActive] = useState('home');
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleLinkClick = (id) => {
    setActive(id);
    if (window.innerWidth <= 1024) {
      toggleSidebar();
    }
  };
  
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <Terminal size={28} />
        <span>ASRAFUL.</span>
        {window.innerWidth <= 1024 && (
          <button className="mobile-close" onClick={toggleSidebar}>
            <X size={24} />
          </button>
        )}
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home" className={active === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>
            <Home size={20} className="icon" /> {t('nav.home')}
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>
            <User size={20} className="icon" /> {t('nav.about')}
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className={active === 'services' ? 'active' : ''} onClick={() => handleLinkClick('services')}>
            <Cpu size={20} className="icon" /> {t('nav.services')}
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className={active === 'portfolio' ? 'active' : ''} onClick={() => handleLinkClick('portfolio')}>
            <Layers size={20} className="icon" /> {t('nav.portfolio')}
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>
            <Mail size={20} className="icon" /> {t('nav.contact')}
          </a>
        </li>
      </ul>
      <div className="lang-switcher">
        <button className="lang-btn" onClick={toggleLanguage}>
          <Languages size={18} />
          {i18n.language === 'en' ? 'বাংলা' : 'English'}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
  <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="hero-subtitle">{t('hero.subtitle')}</span>
          <h1 className="hero-title">
            <span style={{ color: 'var(--primary)' }}>{t('hero.title')}</span>
          </h1>
          <p className="hero-description" style={{ fontSize: '1.4rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '10px' }}>
            {t('hero.tagline')}
          </p>
          <p className="hero-description" style={{ marginBottom: '2.5rem' }}>
            {t('hero.description')}
          </p>
          <div className="cta-group">
            <a href="#portfolio" className="btn btn-primary">{t('hero.viewWork')}</a>
            <a href="#contact" className="btn btn-outline">{t('hero.letsTalk')}</a>
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
};

const Services = () => {
  const { t } = useTranslation();
  return (
  <section id="services">
    <h2 className="section-title">{t('services.title')}</h2>
    <div className="grid">
      <motion.div className="glass-card card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="card-icon"><Globe /></div>
        <h3 className="card-title">{t('services.webDev.title')}</h3>
        <p className="card-text">{t('services.webDev.desc')}</p>
      </motion.div>
      <motion.div className="glass-card card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
        <div className="card-icon"><Layers /></div>
        <h3 className="card-title">{t('services.uiux.title')}</h3>
        <p className="card-text">{t('services.uiux.desc')}</p>
      </motion.div>
      <motion.div className="glass-card card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <div className="card-icon"><Database /></div>
        <h3 className="card-title">{t('services.backend.title')}</h3>
        <p className="card-text">{t('services.backend.desc')}</p>
      </motion.div>
    </div>
  </section>
);
};

const Footer = () => {
  const { t } = useTranslation();
  return (
  <footer className="footer-main">
    <div className="footer-grid">
      <div className="footer-brand">
        <div className="footer-logo">ASRAFUL.</div>
        <p className="footer-bio">
          {t('footer.bio')}
        </p>
        <div className="social-links" style={{ justifyContent: 'flex-start' }}>
          <a href="mailto:asrafulislamai8932454@gmail.com" className="social-link"><Mail size={18} /></a>
          <a href="tel:01341765381" className="social-link"><Phone size={18} /></a>
          <a href="#" className="social-link"><MessageCircle size={18} /></a>
          <a href="#" className="social-link"><Code size={18} /></a>
        </div>
      </div>
      
      <div className="footer-nav">
        <h4>{t('footer.quickLinks')}</h4>
        <ul>
          <li><a href="#home">{t('nav.home')}</a></li>
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#services">{t('nav.services')}</a></li>
          <li><a href="#portfolio">{t('nav.portfolio')}</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>{t('footer.contact')}</h4>
        <p>Gmail: asrafulislamai8932454@gmail.com</p>
        <p>Mobile: 01341765381</p>
        <p>{t('footer.location')}</p>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p className="copyright">
        &copy; {new Date().getFullYear()} MD Asraful Islam. {t('footer.rights')}
      </p>
    </div>
  </footer>
);
};

function App() {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <button className="mobile-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <X /> : <Menu />}
      </button>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main onClick={() => isSidebarOpen && setIsSidebarOpen(false)}>
        <Hero />
        <Services />
        <section id="about">
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="glass-card card" style={{ maxWidth: '800px' }}>
            <p className="card-text">
              {t('about.text')}
            </p>
          </div>
        </section>
        <section id="contact">
          <h2 className="section-title">{t('contact.title')}</h2>
          <div className="grid">
            <div className="glass-card card">
              <h3 className="card-title">{t('contact.infoTitle')}</h3>
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
                <a href="mailto:asrafulislamai8932454@gmail.com" className="btn btn-primary">{t('contact.sendEmail')}</a>
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
