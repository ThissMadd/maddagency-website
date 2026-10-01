import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import SiteEffects from '../components/SiteEffects';

export const metadata = {
  title: 'MaddAgency | Web Design Agency',
  description: 'MaddAgency builds high-converting, professional websites for businesses across the USA.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <canvas id="siteCanvas"></canvas>
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
        <SiteEffects />
      </body>
    </html>
  );
}
