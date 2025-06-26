import type { Config } from './types';

export default {
  id: '/',
  name: 'Kabar NTB',
  shortName: 'KabarNTB',
  description: 'kabarntb.net menyajikan berita terkini, terpercaya, dan terlengkap seputar NTB, nasional, dan dunia. Aktual, faktual, dan berimbang setiap hari.',
  direction: 'auto',
  language: 'id-ID',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Pemerintahan',
      shortName: 'Pemerintahan',
      description: 'Berita seputar Pemerintahan',
      url: '/search/label/Pemerintahan?utm_source=homescreen',
    },
    {
      name: 'Hukum & Kriminal',
      shortName: 'Hukum & Kriminal',
      description: 'Berita seputar Hukum & Kriminal',
      url: '/search/label/Hukum & Kriminal?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.kabarntb.net/',
} satisfies Config;
