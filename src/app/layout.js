import './globals.css';

export const metadata = {
  title: '\u05DE\u05DE\u05E9\u05E7\u05D9\u05DD \u2014 \u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05E7\u05D5\u05DC\u05D9\u05D9\u05DD \u05DC\u05DE\u05E8\u05E4\u05D0\u05D5\u05EA',
  description: '\u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05D7\u05DB\u05DE\u05D9\u05DD \u05E9\u05DE\u05E0\u05D4\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05D5\u05E8\u05D9\u05DD, \u05E2\u05D5\u05E0\u05D9\u05DD \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D5\u05DE\u05E1\u05E0\u05DB\u05E8\u05E0\u05D9\u05DD \u05D4\u05DB\u05DC \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05D9\u05D5\u05DE\u05DF.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: '\u05DE\u05DE\u05E9\u05E7\u05D9\u05DD \u2014 \u05D4\u05DE\u05D4\u05E4\u05DB\u05D4 \u05D4\u05E7\u05D5\u05DC\u05D9\u05EA \u05E9\u05DC \u05D4\u05DE\u05E8\u05E4\u05D0\u05D4 \u05E9\u05DC\u05DA',
    description: '\u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05D7\u05DB\u05DE\u05D9\u05DD \u05E9\u05DE\u05E0\u05D4\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05D5\u05E8\u05D9\u05DD.',
    url: 'https://mimshakim.com',
    siteName: '\u05DE\u05DE\u05E9\u05E7\u05D9\u05DD',
    locale: 'he_IL',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Heebo', sans-serif" }}>
        {children}
      </body>
    </html>
  );
    }
