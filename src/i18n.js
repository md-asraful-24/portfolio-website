import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact'
      },
      hero: {
        subtitle: 'Software Developer & Designer',
        title: 'MD ASRAFUL ISLAM',
        tagline: 'Building the Future with Code and Design.',
        description: 'Studying at Satkhira Government Polytechnic Institute. Dedicated to creating immersive digital experiences that combine functionality with stunning aesthetics.',
        viewWork: 'View My Work',
        letsTalk: 'Let\'s Talk'
      },
      services: {
        title: 'My Services',
        webDev: {
          title: 'Web Development',
          desc: 'Crafting responsive, high-performance websites using the latest technologies like React and Vite.'
        },
        uiux: {
          title: 'UI/UX Design',
          desc: 'Designing intuitive and visually striking user interfaces with a focus on modern aesthetics.'
        },
        backend: {
          title: 'Backend Systems',
          desc: 'Building robust and scalable server-side architectures to power complex applications.'
        }
      },
      about: {
        title: 'About Me',
        text: 'I am a dedicated software developer with a keen eye for detail and a passion for innovation. My journey in technology is driven by a desire to solve complex problems and create meaningful impact through digital solutions. Whether it\'s a simple landing page or a complex web application, I bring 100% commitment to every project.'
      },
      contact: {
        title: 'Get In Touch',
        infoTitle: 'Contact Information',
        sendEmail: 'Send an Email'
      },
      footer: {
        bio: 'Innovating through code, designing with passion. Building modern digital solutions for the next generation.',
        quickLinks: 'Quick Links',
        contact: 'Get In Touch',
        location: 'Satkhira, Bangladesh',
        rights: 'All rights reserved.'
      }
    }
  },
  bn: {
    translation: {
      nav: {
        home: 'হোম',
        about: 'সম্পর্কে',
        services: 'সার্ভিস',
        portfolio: 'পোর্টফোলিও',
        contact: 'যোগাযোগ'
      },
      hero: {
        subtitle: 'সফটওয়্যার ডেভেলপার ও ডিজাইনার',
        title: 'মোঃ আশরাফুল ইসলাম',
        tagline: 'কোড এবং ডিজাইনের মাধ্যমে ভবিষ্যৎ নির্মাণ।',
        description: 'সাতক্ষীরা সরকারি পলিটেকনিক ইনস্টিটিউটে অধ্যয়নরত। কার্যকারিতার সাথে চমৎকার নান্দনিকতার সমন্বয়ে ডিজিটাল অভিজ্ঞতা তৈরিতে নিবেদিত।',
        viewWork: 'আমার কাজ দেখুন',
        letsTalk: 'কথা বলুন'
      },
      services: {
        title: 'আমার সার্ভিসসমূহ',
        webDev: {
          title: 'ওয়েব ডেভেলপমেন্ট',
          desc: 'রিয়্যাক্ট (React) এবং ভাইট (Vite) এর মতো আধুনিক প্রযুক্তি ব্যবহার করে রেসপনসিভ ও হাই-পারফরম্যান্স ওয়েবসাইট তৈরি করি।'
        },
        uiux: {
          title: 'ইউআই/ইউএক্স ডিজাইন',
          desc: 'আধুনিক নান্দনিকতার ওপর ফোকাস করে সহজবোধ্য এবং দৃষ্টিনন্দন ইউজার ইন্টারফেস ডিজাইন করি।'
        },
        backend: {
          title: 'ব্যাকএন্ড সিস্টেম',
          desc: 'জটিল অ্যাপ্লিকেশন পরিচালনার জন্য শক্তিশালী এবং স্কেলেবল সার্ভার-সাইড আর্কিটেকচার তৈরি করি।'
        }
      },
      about: {
        title: 'আমার সম্পর্কে',
        text: 'আমি একজন নিবেদিতপ্রাণ সফটওয়্যার ডেভেলপার। নতুন কিছু উদ্ভাবনের প্রতি আমার প্রবল আগ্রহ রয়েছে। প্রযুক্তির মাধ্যমে জটিল সমস্যার সমাধান করা এবং ডিজিটাল সলিউশনের মাধ্যমে ইতিবাচক প্রভাব ফেলাই আমার লক্ষ্য। সেটি একটি সাধারণ ল্যান্ডিং পেজ হোক বা জটিল ওয়েব অ্যাপ্লিকেশন, আমি প্রতিটি প্রজেক্টে ১০০% প্রতিশ্রুতি দিয়ে কাজ করি।'
      },
      contact: {
        title: 'যোগাযোগ করুন',
        infoTitle: 'যোগাযোগের তথ্য',
        sendEmail: 'ইমেইল পাঠান'
      },
      footer: {
        bio: 'কোডের মাধ্যমে উদ্ভাবন, প্যাশনের সাথে ডিজাইন। পরবর্তী প্রজন্মের জন্য আধুনিক ডিজিটাল সলিউশন তৈরি করছি।',
        quickLinks: 'লিঙ্কসমূহ',
        contact: 'যোগাযোগ',
        location: 'সাতক্ষীরা, বাংলাদেশ',
        rights: 'সর্বস্বত্ব সংরক্ষিত।'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
