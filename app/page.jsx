import Link from 'next/link';

export const metadata = {
  title: { absolute: "MaddAgency | Web Design Agency" },
  description: "MaddAgency builds high-converting, professional websites for businesses across the USA.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero__aurora">
          <div className="aurora__blob aurora__blob--1"></div>
          <div className="aurora__blob aurora__blob--2"></div>
          <div className="aurora__blob aurora__blob--3"></div>
          <div className="aurora__blob aurora__blob--4"></div>
        </div>
        <div className="hero__grid"></div>
        <div className="container">
          <div className="hero__inner">
            {/* Left */}
            <div className="hero__left">
              <div className="hero__badge">
                <span className="hero__badge-dot"></span>
                {" "}Available for new projects
              </div>
              <h1 className="hero__title">
                <span className="line">
                  <span className="line-inner">We Design</span>
                </span>
                {" "}
                <span className="line">
                  <span className="line-inner">
                    <span className="g-text-anim">Websites</span>
                    {" "}That
                  </span>
                </span>
                {" "}
                <span className="line">
                  <span className="line-inner">Grow Businesses.</span>
                </span>
              </h1>
              <div className="hero__pills" style={{ flexWrap: "wrap", gap: "10px", marginBottom: "52px" }}>
                <span className="hero__pill">⚡ Fast Delivery</span>
                <span className="hero__pill">✦ Modern Design</span>
                <span className="hero__pill">📈 Revenue-Focused</span>
              </div>
              <div className="hero__actions">
                <a href="#pricing" className="btn btn--purple btn--lg">
                  Start Your Project{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a href="#portfolio" className="btn btn--dark btn--lg">See Our Work</a>
              </div>
            </div>
            {/* Right floating card */}
            <div className="hero__right">
              <div className="hero__float-card">
                <div className="hfc__label">Recent Projects</div>
                <div className="hfc__projects">
                  <div className="hfc__project">
                    <div className="hfc__dot hfc__dot--1"></div>
                    <span className="hfc__project-name">LuxeCleaning Co.</span>
                    <span className="hfc__project-tag">Basic</span>
                  </div>
                  <div className="hfc__project">
                    <div className="hfc__dot hfc__dot--2"></div>
                    <span className="hfc__project-name">Apex Fitness Studio</span>
                    <span className="hfc__project-tag">Pro</span>
                  </div>
                  <div className="hfc__project">
                    <div className="hfc__dot hfc__dot--3"></div>
                    <span className="hfc__project-name">TechNest Solutions</span>
                    <span className="hfc__project-tag">Ultimate</span>
                  </div>
                </div>
                <div className="hfc__divider"></div>
                <div className="hfc__stats">
                  <div className="hfc__stat">
                    <span className="hfc__stat-val g-text">50+</span>
                    <span className="hfc__stat-label">Projects</span>
                  </div>
                  <div className="hfc__stat">
                    <span className="hfc__stat-val g-text">100%</span>
                    <span className="hfc__stat-label">Satisfied</span>
                  </div>
                  <div className="hfc__stat">
                    <span className="hfc__stat-val g-text">5d</span>
                    <span className="hfc__stat-label">Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="hero__bottom">
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-val" data-count="50" data-suffix="+">50+</span>
                <span className="hero__stat-label">Projects Delivered</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-val" data-count="100" data-suffix="%">100%</span>
                <span className="hero__stat-label">Client Satisfaction</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-val">5 Days</span>
                <span className="hero__stat-label">Average Delivery</span>
              </div>
            </div>
            <div className="hero__scroll">
              <div className="hero__scroll-line"></div>
              Scroll to explore
            </div>
          </div>
        </div>
      </section>
      {/* MARQUEE */}
      <div className="marquee-band">
        <div className="marquee-track">
          <span>Web Design</span>
          <span className="pur">✦</span>
          <span>WordPress</span>
          <span className="pur">✦</span>
          <span>SEO</span>
          <span className="pur">✦</span>
          <span>Branding</span>
          <span className="pur">✦</span>
          <span>Mobile</span>
          <span className="pur">✦</span>
          <span>E-Commerce</span>
          <span className="pur">✦</span>
          <span>Analytics</span>
          <span className="pur">✦</span>
          <span>Security</span>
          <span className="pur">✦</span>
          <span>Speed</span>
          <span className="pur">✦</span>
          <span>Web Design</span>
          <span className="pur">✦</span>
          <span>WordPress</span>
          <span className="pur">✦</span>
          <span>SEO</span>
          <span className="pur">✦</span>
          <span>Branding</span>
          <span className="pur">✦</span>
          <span>Mobile</span>
          <span className="pur">✦</span>
          <span>E-Commerce</span>
          <span className="pur">✦</span>
          <span>Analytics</span>
          <span className="pur">✦</span>
          <span>Security</span>
          <span className="pur">✦</span>
          <span>Speed</span>
          <span className="pur">✦</span>
        </div>
      </div>
      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="services__head">
            <div>
              <div className="sec-eyebrow">What We Do</div>
              <h2 className="sec-title">
                Everything Your Business
                <br />
                Needs{" "}
                <span className="g-text">Online</span>
              </h2>
            </div>
            <p className="sec-sub">
              From{" "}
              <em>high-converting websites</em>
              {" "}to ongoing growth solutions, we help businesses build a powerful online presence and{" "}
              <em>turn visitors into customers.</em>
            </p>
          </div>
          <div className="services__grid reveal">
            <div className="service-card">
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <path d="M8 21h8M12 17v4"></path>
                </svg>
              </div>
              <h3>Web Design</h3>
              <p>Custom websites designed to reflect your brand, build trust, and convert visitors into paying customers.</p>
            </div>
            <div className="service-card">
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>WordPress Development</h3>
              <p>Scalable WordPress websites built for speed, performance, and easy management.</p>
            </div>
            <div className="service-card">
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <h3>SEO Optimization</h3>
              <p>Optimize your website for search engines and increase your visibility on Google.</p>
            </div>
            <div className="service-card">
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3>Speed Optimization</h3>
              <p>Lightning-fast websites engineered for better user experience and higher conversion rates.</p>
            </div>
            <div className="service-card">
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <h3>E-Commerce (WooCommerce)</h3>
              <p>Professional online stores built to sell products, process payments, and grow revenue.</p>
            </div>
            <div className="service-card">
              <div className="service-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Security &amp; Maintenance</h3>
              <p>Continuous updates, security monitoring, backups, and technical support whenever you need it.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/services" className="btn btn--dark btn--lg">
              View Services{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "14px", height: "14px", verticalAlign: "middle", marginLeft: "4px" }}>
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="pricing__glow"></div>
        <div className="container">
          <div className="pricing__head">
            <div>
              <div className="sec-eyebrow">Our Packages</div>
              <h2 className="sec-title">
                Choose The{" "}
                <span className="g-text">Perfect Package</span>
                {" "}For Your Business
              </h2>
            </div>
            <p className="sec-sub">
              High-performance websites designed to{" "}
              <em>attract customers,</em>
              {" "}build trust, and{" "}
              <em>drive business growth.</em>
            </p>
          </div>
          <div className="pricing__grid reveal">
            {/* STARTER */}
            <div className="pricing-card">
              <div className="pricing-card__name">Starter</div>
              <div className="pricing-card__price">
                <span className="pricing-card__currency">$</span>
                249
              </div>
              <p className="pricing-card__desc">Launch your business with a professional website built to create trust and credibility.</p>
              <ul className="pricing-card__features">
                <li>
                  <span className="check">✓</span>
                  {" "}Up to 5 Pages
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Custom Website Design
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Mobile Responsive Layout
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Contact Form Integration
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Basic On-Page SEO
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Fast Loading Speed
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Social Media Integration
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}3-Day Delivery
                </li>
              </ul>
              <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--full">Get Started</a>
            </div>
            {/* GROWTH */}
            <div className="pricing-card pricing-card--featured">
              <div className="pricing-card__top-line"></div>
              <div className="pricing-card__badge">Most Popular</div>
              <div className="pricing-card__name">Growth</div>
              <div className="pricing-card__price">
                <span className="pricing-card__currency">$</span>
                499
              </div>
              <p className="pricing-card__desc">Grow faster with a conversion-focused website designed to attract and convert more customers.</p>
              <ul className="pricing-card__features">
                <li>
                  <span className="check">✓</span>
                  {" "}Up to 10 Pages
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Premium Custom Design
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Conversion-Focused Layout
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Advanced On-Page SEO
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Speed Optimization
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Google Business Integration
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Blog Setup
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Security &amp; Backup Setup
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}1 Week Free Maintenance
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}5-Day Delivery
                </li>
              </ul>
              <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--full">Get Started</a>
            </div>
            {/* PREMIUM */}
            <div className="pricing-card pricing-card--ultimate">
              <div className="pricing-card__top-line"></div>
              <div className="pricing-card__name">Premium</div>
              <div className="pricing-card__price">
                <span className="pricing-card__currency">$</span>
                999
              </div>
              <p className="pricing-card__desc">The ultimate solution for businesses seeking a premium online presence and long-term growth.</p>
              <ul className="pricing-card__features">
                <li>
                  <span className="check">✓</span>
                  {" "}Unlimited Pages
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Fully Custom Website Design
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Advanced SEO Optimization
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}E-Commerce Ready
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Custom Branding Elements
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Analytics &amp; Tracking Setup
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Priority Support
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}1 Month Free Maintenance
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}Strategy Consultation
                </li>
                <li>
                  <span className="check">✓</span>
                  {" "}7-Day Delivery
                </li>
              </ul>
              <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--gold btn--full">Get Started</a>
            </div>
          </div>
          <p className="pricing__note">
            Need a custom solution? Let&apos;s discuss your goals and create a tailored website strategy for your business.{" "}
            <Link href="/contact">Schedule A Free Consultation →</Link>
          </p>
        </div>
      </section>
      {/* PORTFOLIO */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="portfolio__head">
            <div>
              <div className="sec-eyebrow">Our Work</div>
              <h2 className="sec-title">
                Projects We&apos;ve
                <br />
                <span className="g-text">Built &amp; Launched</span>
              </h2>
            </div>
            <p className="sec-sub">
              A selection of websites designed to{" "}
              <em>attract customers,</em>
              {" "}build trust, and{" "}
              <em>drive business growth.</em>
            </p>
          </div>
          <div className="portfolio__grid reveal">
            <div className="portfolio-card" data-modal-open="modal-stronger" style={{ cursor: "pointer" }}>
              <div className="portfolio-card__img">
                <img src="/images/pf-2.png" alt="Stronger Fitness Studio" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__tag">Fitness · Premium</span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <h3>Stronger Fitness</h3>
                <p>High-energy gym platform with program pages, trainer profiles, before/after results gallery, and membership plans.</p>
                <div className="portfolio-card__tags">
                  <span>WordPress</span>
                  <span>Fitness</span>
                  <span>Booking</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-modal-open="modal-belforno" style={{ cursor: "pointer" }}>
              <div className="portfolio-card__img">
                <img src="/images/pf-9.png" alt="Belforno Restaurant" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__tag">Restaurant · Premium</span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <h3>Belforno Restaurant</h3>
                <p>Elegant Italian restaurant website with signature dish menu, table reservations, ambiance gallery, and guest testimonials.</p>
                <div className="portfolio-card__tags">
                  <span>WordPress</span>
                  <span>Restaurant</span>
                  <span>Booking</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-modal-open="modal-nexora" style={{ cursor: "pointer" }}>
              <div className="portfolio-card__img">
                <img src="/images/pf-1.png" alt="Nexora Digital Agency" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__tag">Agency · Premium</span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <h3>Nexora Digital</h3>
                <p>Full-stack digital agency website with services, live dashboard preview, portfolio showcase, and client testimonials.</p>
                <div className="portfolio-card__tags">
                  <span>WordPress</span>
                  <span>Portfolio</span>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio__cta">
            <Link href="/portfolio" className="btn btn--dark btn--lg">
              View All Projects{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__head">
            <div className="sec-eyebrow">FAQ</div>
            <h2 className="sec-title">
              Frequently Asked{" "}
              <span className="g-text">Questions</span>
            </h2>
          </div>
          <div className="faq__grid">
            <div className="faq__col">
              <div className="faq__item">
                <button className="faq__question">
                  How long does it take to build a website?
                  <span className="faq__icon">+</span>
                </button>
                <div className="faq__answer">
                  <p>Most websites are completed within 5–10 days depending on the project&apos;s size and requirements.</p>
                </div>
              </div>
              <div className="faq__item">
                <button className="faq__question">
                  How much does a website cost?
                  <span className="faq__icon">+</span>
                </button>
                <div className="faq__answer">
                  <p>Pricing depends on the scope, features, and goals of your project. We offer flexible packages for businesses of all sizes.</p>
                </div>
              </div>
              <div className="faq__item">
                <button className="faq__question">
                  Will my website be mobile-friendly?
                  <span className="faq__icon">+</span>
                </button>
                <div className="faq__answer">
                  <p>Absolutely. Every website is fully optimized for mobile, tablet, and desktop devices.</p>
                </div>
              </div>
              <div className="faq__item">
                <button className="faq__question">
                  Will my website be optimized for SEO?
                  <span className="faq__icon">+</span>
                </button>
                <div className="faq__answer">
                  <p>Yes. Every website includes SEO best practices to help improve visibility and create a strong foundation for growth.</p>
                </div>
              </div>
            </div>
            <div className="faq__col">
              <div className="faq__item">
                <button className="faq__question">
                  Can you redesign my existing website?
                  <span className="faq__icon">+</span>
                </button>
                <div className="faq__answer">
                  <p>Yes. We can transform outdated websites into modern, high-converting digital experiences.</p>
                </div>
              </div>
              <div className="faq__item">
                <button className="faq__question">
                  What happens after the website is launched?
                  <span className="faq__icon">+</span>
                </button>
                <div className="faq__answer">
                  <p>We provide post-launch support and can assist with updates, maintenance, and future improvements.</p>
                </div>
              </div>
              <div className="faq__item">
                <button className="faq__question">
                  Do I need hosting and a domain name?
                  <span className="faq__icon">+</span>
                </button>
                <div className="faq__answer">
                  <p>If you already have hosting and a domain, we&apos;ll work with your existing setup. If not, we can help you choose and configure everything needed to get your website online.</p>
                </div>
              </div>
              <div className="faq__item">
                <button className="faq__question">
                  Why choose MaddAgency over other agencies?
                  <span className="faq__icon">+</span>
                </button>
                <div className="faq__answer">
                  <p>We focus on creating high-performance websites that combine premium design, speed, SEO, and conversion-focused strategies to help businesses grow online.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA BAND */}
      <div className="cta-band">
        <div className="container cta-band__inner">
          <div className="sec-eyebrow cta-band__tag">Ready to start?</div>
          <h2 className="cta-band__title">
            Ready To Turn Your Website
            <br />
            <span className="g-text-anim">Into A Growth Engine?</span>
          </h2>
          <p className="cta-band__sub">Let&apos;s build a high-performing website that attracts customers, builds trust, and helps your business grow.</p>
          <div className="cta-band__actions">
            <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--lg">
              Start Your Project{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a href="#pricing" className="btn btn--dark btn--lg">View Pricing</a>
          </div>
        </div>
      </div>
      {/* IPTV PROJECT MODALS */}
      {/* Modal: WCN Turbo Stream */}
      <div className="proj-modal-overlay" id="modal-stronger">
        <div className="proj-modal__close">
          <button data-modal-close="modal-stronger" aria-label="Close">✕</button>
        </div>
        <div className="proj-modal">
          <div className="proj-modal__browser">
            <div className="proj-modal__browser-bar">
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-url">strongerfit.com</span>
            </div>
            <div className="proj-modal__browser-scroll">
              <img src="/images/pf-2.png" alt="Stronger Fitness full preview" />
            </div>
            <div className="proj-modal__scroll-hint">↕ Scroll to explore the full design</div>
          </div>
          <div className="proj-modal__body">
            <div className="proj-modal__eyebrow">
              <span className="proj-modal__badge">Fitness · Premium</span>
              <span className="proj-modal__badge" style={{ color: "var(--muted)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}>New York, NY</span>
            </div>
            <h2 className="proj-modal__title">Stronger Fitness Studio</h2>
            <p className="proj-modal__sub">A high-energy fitness platform built to convert visitors into members — showcasing programs, trainers, real before/after results, and membership pricing with a free trial CTA.</p>
            <div className="proj-modal__stats">
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Type</div>
                <div className="proj-modal__stat-value">Fitness Platform</div>
              </div>
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Platform</div>
                <div className="proj-modal__stat-value">WordPress</div>
              </div>
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Delivery</div>
                <div className="proj-modal__stat-value">10 Days</div>
              </div>
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Plan</div>
                <div className="proj-modal__stat-value">Premium</div>
              </div>
            </div>
            <div className="proj-modal__section">
              <h3>Overview</h3>
              <p>Stronger needed a bold, mobile-first website that reflects their training philosophy and drives sign-ups. The site needed to showcase 3 core programs, feature their trainers, display real client results, and push visitors toward the free trial offer.</p>
            </div>
            <div className="proj-modal__section">
              <h3>What We Built</h3>
              <ul className="proj-modal__list">
                <li>Custom WordPress dark theme with lime accent</li>
                <li>3 program pages (Strength, HIIT, Nutrition)</li>
                <li>Trainer profile section</li>
                <li>Before &amp; after results gallery</li>
                <li>Membership pricing table</li>
                <li>Free trial CTA + WhatsApp button</li>
                <li>Member testimonials slider</li>
                <li>On-page SEO &amp; Google Analytics 4</li>
              </ul>
            </div>
            <div className="proj-modal__section">
              <h3>Tech Stack</h3>
              <div className="proj-modal__tech">
                <span className="proj-modal__tech-tag">WordPress</span>
                <span className="proj-modal__tech-tag">Elementor</span>
                <span className="proj-modal__tech-tag">WooCommerce</span>
                <span className="proj-modal__tech-tag">WP Forms</span>
                <span className="proj-modal__tech-tag">Yoast SEO</span>
                <span className="proj-modal__tech-tag">Google Analytics 4</span>
              </div>
            </div>
            <div className="proj-modal__cta">
              <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--sm">
                Start Your Project{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "13px", height: "13px" }}>
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <button data-modal-close="modal-stronger" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal: IPTV4K Premium */}
      <div className="proj-modal-overlay" id="modal-belforno">
        <div className="proj-modal__close">
          <button data-modal-close="modal-belforno" aria-label="Close">✕</button>
        </div>
        <div className="proj-modal">
          <div className="proj-modal__browser">
            <div className="proj-modal__browser-bar">
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-url">belforno.com</span>
            </div>
            <div className="proj-modal__browser-scroll">
              <img src="/images/pf-9.png" alt="Belforno Restaurant full preview" />
            </div>
            <div className="proj-modal__scroll-hint">↕ Scroll to explore the full design</div>
          </div>
          <div className="proj-modal__body">
            <div className="proj-modal__eyebrow">
              <span className="proj-modal__badge">Restaurant · Premium</span>
              <span className="proj-modal__badge" style={{ color: "var(--muted)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}>New York, NY</span>
            </div>
            <h2 className="proj-modal__title">Belforno Italian Restaurant</h2>
            <p className="proj-modal__sub">A luxury Italian restaurant website built to fill tables and tell a story — signature dishes, online reservations, an immersive ambiance gallery, and a chef&apos;s story section that builds trust before the first visit.</p>
            <div className="proj-modal__stats">
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Type</div>
                <div className="proj-modal__stat-value">Restaurant</div>
              </div>
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Platform</div>
                <div className="proj-modal__stat-value">WordPress</div>
              </div>
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Delivery</div>
                <div className="proj-modal__stat-value">7 Days</div>
              </div>
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Plan</div>
                <div className="proj-modal__stat-value">Premium</div>
              </div>
            </div>
            <div className="proj-modal__section">
              <h3>Overview</h3>
              <p>Belforno needed a website that matches their fine dining experience — warm, elegant, and conversion-focused. The goal was to showcase their authentic Italian menu, enable online table reservations, and build an emotional connection through storytelling and stunning food photography.</p>
            </div>
            <div className="proj-modal__section">
              <h3>What We Built</h3>
              <ul className="proj-modal__list">
                <li>Custom WordPress dark &amp; gold theme</li>
                <li>Signature dish menu (4 dishes + pricing)</li>
                <li>Online table reservation system</li>
                <li>Our Story section with chef signature</li>
                <li>Ambiance photo gallery</li>
                <li>Guest testimonials slider</li>
                <li>Hours, contact &amp; Google Maps</li>
                <li>On-page SEO &amp; Google Analytics 4</li>
              </ul>
            </div>
            <div className="proj-modal__section">
              <h3>Tech Stack</h3>
              <div className="proj-modal__tech">
                <span className="proj-modal__tech-tag">WordPress</span>
                <span className="proj-modal__tech-tag">Elementor</span>
                <span className="proj-modal__tech-tag">OpenTable</span>
                <span className="proj-modal__tech-tag">Google Reviews</span>
                <span className="proj-modal__tech-tag">Yoast SEO</span>
                <span className="proj-modal__tech-tag">Google Analytics 4</span>
              </div>
            </div>
            <div className="proj-modal__cta">
              <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--sm">
                Start Your Project{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "13px", height: "13px" }}>
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <button data-modal-close="modal-belforno" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal: NXT TV 4K */}
      <div className="proj-modal-overlay" id="modal-nexora">
        <div className="proj-modal__close">
          <button data-modal-close="modal-nexora" aria-label="Close">✕</button>
        </div>
        <div className="proj-modal">
          <div className="proj-modal__browser">
            <div className="proj-modal__browser-bar">
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-url">nexora.agency</span>
            </div>
            <div className="proj-modal__browser-scroll">
              <img src="/images/pf-1.png" alt="Nexora Digital Agency full preview" />
            </div>
            <div className="proj-modal__scroll-hint">↕ Scroll to explore the full design</div>
          </div>
          <div className="proj-modal__body">
            <div className="proj-modal__eyebrow">
              <span className="proj-modal__badge">Agency · Premium</span>
              <span className="proj-modal__badge" style={{ color: "var(--muted)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}>San Francisco, CA</span>
            </div>
            <h2 className="proj-modal__title">Nexora Digital Agency</h2>
            <p className="proj-modal__sub">A powerful digital agency website built to attract enterprise clients — services, live analytics dashboard preview, work portfolio, client logos, and a full conversion funnel from hero to CTA.</p>
            <div className="proj-modal__stats">
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Type</div>
                <div className="proj-modal__stat-value">Digital Agency</div>
              </div>
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Platform</div>
                <div className="proj-modal__stat-value">WordPress</div>
              </div>
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Delivery</div>
                <div className="proj-modal__stat-value">14 Days</div>
              </div>
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Plan</div>
                <div className="proj-modal__stat-value">Premium</div>
              </div>
            </div>
            <div className="proj-modal__section">
              <h3>Overview</h3>
              <p>Nexora needed a website that positions them as a premium digital agency trusted by top-tier companies. The site needed to communicate their 4 core services, showcase real client work, and feature an interactive dashboard preview that demonstrates their SaaS development capabilities.</p>
            </div>
            <div className="proj-modal__section">
              <h3>What We Built</h3>
              <ul className="proj-modal__list">
                <li>Custom dark WordPress theme with purple accent</li>
                <li>4 service pages (Strategy, Dev, UI/UX, SaaS)</li>
                <li>Live analytics dashboard feature section</li>
                <li>Work portfolio (4 case studies)</li>
                <li>Client logo showcase (Airbnb, HubSpot, Notion…)</li>
                <li>Testimonials slider</li>
                <li>Blog + newsletter signup</li>
                <li>On-page SEO &amp; Google Analytics 4</li>
              </ul>
            </div>
            <div className="proj-modal__section">
              <h3>Tech Stack</h3>
              <div className="proj-modal__tech">
                <span className="proj-modal__tech-tag">WordPress</span>
                <span className="proj-modal__tech-tag">Elementor Pro</span>
                <span className="proj-modal__tech-tag">GSAP</span>
                <span className="proj-modal__tech-tag">Mailchimp</span>
                <span className="proj-modal__tech-tag">Yoast SEO</span>
                <span className="proj-modal__tech-tag">Google Analytics 4</span>
              </div>
            </div>
            <div className="proj-modal__cta">
              <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--sm">
                Start Your Project{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "13px", height: "13px" }}>
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <button data-modal-close="modal-nexora" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
