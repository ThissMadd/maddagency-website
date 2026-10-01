'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WHATSAPP_URL } from './constants';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/portfolio', label: 'Work' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About Us' },
];

const BURGER_OPEN = [
  { transform: 'rotate(45deg) translate(4.5px, 4.5px)' },
  { opacity: 0, transform: 'scaleX(0)' },
  { transform: 'rotate(-45deg) translate(4.5px, -4.5px)' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const close = () => setOpen(false);

  // On the home page "Get Started" jumps to pricing; elsewhere it opens WhatsApp.
  const cta = isHome
    ? { href: '#pricing' }
    : { href: WHATSAPP_URL, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav__inner">
        <Link href="/" className="nav__logo">Madd<span>Agency</span></Link>
        <ul className="nav__links">
          {LINKS.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={l.href === pathname && l.href !== '/' ? 'active' : undefined}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav__cta">
          <a {...cta} className="btn btn--purple btn--sm">Get Started</a>
        </div>
        <button className="nav__burger" id="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
          {BURGER_OPEN.map((style, i) => <span key={i} style={open ? style : undefined}></span>)}
        </button>
      </div>
      <div className={`nav__mobile${open ? ' open' : ''}`} id="mobileMenu">
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>
        ))}
        <a {...cta} className="btn btn--purple btn--sm" onClick={close}>Get Started</a>
      </div>
    </nav>
  );
}
