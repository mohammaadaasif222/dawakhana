import './globals.css';

export const metadata = {
  title: 'Hiqmat Dawakhana — Rahat-e-Khaas | Bawaseer ka Herbal Ilaj',
  description:
    'Rahat-e-Khaas by Hiqmat Dawakhana — a traditional Unani herbal formula for natural relief from piles (bawaseer). No steroids, no surgery.',
  icons: {
    icon: '/main-logo.png',
    shortcut: '/main-logo.png',
    apple: '/main-logo.png',
  },
};

export const viewport = {
  themeColor: '#0E3B2E',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/main-logo.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@500;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
