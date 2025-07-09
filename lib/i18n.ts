'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      readyFor: "I'm Ready For",
      srList: "Web Design, Development, Programming",
      list: "WEb Design, Development, Programming",
      name: "I'm Dhika Ramdhana",
      srName: "I'm Dhika Ramdhana",
      role: "Junior Full Stack Developer",
      srRole: "Junior Full Stack Developer",
      about: "Hi! I'm a web developer from Indonesia who loves turning cool ideas into simple, useful apps. I'm a big fan of solving problems and always curious to learn the latest tech."
    }
  },
  id: {
    translation: {
      readyFor: "Saya Siap Untuk",
      srList: "Desain Web, Pengembangan, Pemrograman",
      list: "Desain Web, Pengembangan, Pemrograman",
      name: "Saya Dhika Ramdhana",
      srName: "Saya Dhika Ramdhana",
      role: "Junior Full Stack Developer",
      srRole: "Junior Full Stack Developer",
      about: "Hai! Saya seorang pengembang web dari Indonesia yang senang mengubah ide keren menjadi aplikasi sederhana dan berguna. Saya suka memecahkan masalah dan selalu penasaran mempelajari teknologi terbaru."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'id'],
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
