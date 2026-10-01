import Link from 'next/link';
import { CONTACT_EMAIL } from './constants';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { href: '/', label: 'Home' },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/portfolio', label: 'Work' },
      { href: '/faq', label: 'FAQ' },
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/#services', label: 'Web Design' },
      { href: '/#services', label: 'WordPress Development' },
      { href: '/#services', label: 'SEO Optimization' },
      { href: '/#services', label: 'Website Maintenance' },
      { href: '/#services', label: 'E-Commerce Solutions' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/refund', label: 'Refund Policy' },
      { href: '/disclaimer', label: 'Disclaimer' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow"></div>
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link href="/" className="nav__logo">Madd<span>Agency</span></Link>
          <p>We build premium websites that help businesses attract customers, build trust, and grow online.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer__email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            {CONTACT_EMAIL}
          </a>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
          </div>
        </div>
        <div className="footer__links">
          {COLUMNS.map(col => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map(l => <Link key={l.label} href={l.href}>{l.label}</Link>)}
            </div>
          ))}
          <div className="footer__pay-inline">
            <span className="footer__pay-label">We Accept</span>
            <div className="footer__payments">
              <span className="pay-badge pay-badge--visa">VISA</span>
              <span className="pay-badge pay-badge--mc"><span className="mc-left"></span><span className="mc-right"></span></span>
              <span className="pay-badge pay-badge--paypal">Pay<span>Pal</span></span>
              <span className="pay-badge pay-badge--stripe">stripe</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__divider"></div>
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; 2026 <span className="footer__bottom-brand">MaddAgency</span>. All rights reserved.</p>
          <p>Designed &amp; Developed by <span className="footer__bottom-brand">MaddAgency</span></p>
        </div>
      </div>
    </footer>
  );
}
