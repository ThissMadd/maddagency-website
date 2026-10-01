import Link from 'next/link';

export const metadata = {
  title: { absolute: "MaddAgency | Our Services" },
  description: "Web design, WordPress development, e-commerce & SEO — premium digital services built to grow your business online.",
};

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="srv-hero">
        <div className="srv-hero__aurora">
          <div className="aurora__blob aurora__blob--1"></div>
          <div className="aurora__blob aurora__blob--3"></div>
        </div>
        <div className="container">
          <div className="srv-hero__badge">
            <span className="srv-hero__badge-dot"></span>
            {" "}Premium Digital Services
          </div>
          <h1 className="sec-title">
            Everything Your Business
            <br />
            Needs{" "}
            <span className="g-text">To Grow Online</span>
          </h1>
          <p className="srv-hero__sub">From custom web design to SEO — we build high-performance digital experiences that attract customers, build trust, and turn visitors into buyers.</p>
        </div>
      </section>
      {/* SERVICES LIST */}
      <section className="srv-section">
        <div className="container">
          <div className="srv-list reveal">
            {/* 01 Web Design */}
            <div className="srv-scard">
              <div className="srv-scard__left">
                <div className="srv-scard__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M8 21h8M12 17v4"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="srv-scard__title">Web Design</h3>
                <p className="srv-scard__desc">Custom websites crafted to reflect your brand, build trust, and convert visitors into paying customers — no templates, no shortcuts, 100% custom for every client.</p>
                <div className="srv-scard__pills">
                  <span className="srv-scard__pill">Custom UI/UX</span>
                  <span className="srv-scard__pill">Modern Layouts</span>
                  <span className="srv-scard__pill">Mobile Responsive</span>
                  <span className="srv-scard__pill">Brand Identity</span>
                </div>
              </div>
            </div>
            {/* 02 WordPress */}
            <div className="srv-scard">
              <div className="srv-scard__left">
                <div className="srv-scard__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="srv-scard__title">WordPress Development</h3>
                <p className="srv-scard__desc">Scalable WordPress websites built for speed, performance, and easy day-to-day management — so you stay in full control of your content without needing a developer.</p>
                <div className="srv-scard__pills">
                  <span className="srv-scard__pill">Easy to Edit</span>
                  <span className="srv-scard__pill">Fast Performance</span>
                  <span className="srv-scard__pill">SEO Optimized</span>
                  <span className="srv-scard__pill">Plugin Setup</span>
                </div>
              </div>
            </div>
            {/* 03 E-Commerce */}
            <div className="srv-scard">
              <div className="srv-scard__left">
                <div className="srv-scard__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="srv-scard__title">E-Commerce</h3>
                <p className="srv-scard__desc">Professional online stores built with WooCommerce to sell products, process payments securely, and grow your revenue 24/7 — with a checkout flow built to convert.</p>
                <div className="srv-scard__pills">
                  <span className="srv-scard__pill">WooCommerce</span>
                  <span className="srv-scard__pill">Stripe &amp; PayPal</span>
                  <span className="srv-scard__pill">Product Pages</span>
                  <span className="srv-scard__pill">Conversion Focused</span>
                </div>
              </div>
            </div>
            {/* 04 SEO */}
            <div className="srv-scard">
              <div className="srv-scard__left">
                <div className="srv-scard__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="srv-scard__title">SEO Optimization</h3>
                <p className="srv-scard__desc">Get found on Google. We optimize your site&apos;s structure, speed, and content so your business ranks higher and attracts the right customers — without paying for ads.</p>
                <div className="srv-scard__pills">
                  <span className="srv-scard__pill">On-Page SEO</span>
                  <span className="srv-scard__pill">Speed Optimization</span>
                  <span className="srv-scard__pill">Schema Markup</span>
                  <span className="srv-scard__pill">Core Web Vitals</span>
                </div>
              </div>
            </div>
            {/* 05 Speed Optimization */}
            <div className="srv-scard">
              <div className="srv-scard__left">
                <div className="srv-scard__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="srv-scard__title">Speed Optimization</h3>
                <p className="srv-scard__desc">A slow website loses customers before they even see your offer. We engineer lightning-fast load times that improve user experience, boost SEO rankings, and increase conversions.</p>
                <div className="srv-scard__pills">
                  <span className="srv-scard__pill">Core Web Vitals</span>
                  <span className="srv-scard__pill">Image Compression</span>
                  <span className="srv-scard__pill">Caching Setup</span>
                  <span className="srv-scard__pill">CDN Integration</span>
                </div>
              </div>
            </div>
            {/* 06 Security & Maintenance */}
            <div className="srv-scard">
              <div className="srv-scard__left">
                <div className="srv-scard__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="srv-scard__title">Security &amp; Maintenance</h3>
                <p className="srv-scard__desc">Your website is a business asset — we keep it protected, updated, and running smoothly 24/7. From security monitoring to plugin updates and backups, we handle it all.</p>
                <div className="srv-scard__pills">
                  <span className="srv-scard__pill">Security Monitoring</span>
                  <span className="srv-scard__pill">Regular Backups</span>
                  <span className="srv-scard__pill">Plugin Updates</span>
                  <span className="srv-scard__pill">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HOW WE WORK */}
      <section className="srv-how">
        <div className="container">
          <div className="srv-how__head">
            <div className="sec-eyebrow" style={{ marginBottom: "16px" }}>Our Process</div>
            <h2 className="sec-title">
              Simple. Fast.{" "}
              <span className="g-text">Effective.</span>
            </h2>
          </div>
          <div className="srv-how__steps reveal">
            <div className="srv-how__step">
              <div className="srv-how__step-num">01</div>
              <h3>Discovery Call</h3>
              <p>Tell us about your business, goals, and vision. We&apos;ll ask the right questions and craft a plan built around your specific needs — no generic pitches.</p>
            </div>
            <div className="srv-how__step">
              <div className="srv-how__step-num">02</div>
              <h3>Design &amp; Build</h3>
              <p>We design and develop your site in 5–10 days. You&apos;ll see progress, share feedback, and get a site that&apos;s built to impress — before it even goes live.</p>
            </div>
            <div className="srv-how__step">
              <div className="srv-how__step-num">03</div>
              <h3>Launch &amp; Grow</h3>
              <p>Your site goes live fully optimized. We handle domain setup, SEO, and post-launch support — so you start getting results from day one.</p>
            </div>
          </div>
        </div>
      </section>
      {/* STATS */}
      <section className="srv-stats">
        <div className="container">
          <div className="srv-stats__grid">
            <div className="srv-stats__item">
              <div className="srv-stats__num">
                50
                <span>+</span>
              </div>
              <div className="srv-stats__label">Projects Delivered</div>
            </div>
            <div className="srv-stats__item">
              <div className="srv-stats__num">
                5
                <span>–10</span>
              </div>
              <div className="srv-stats__label">Days Average Delivery</div>
            </div>
            <div className="srv-stats__item">
              <div className="srv-stats__num">
                100
                <span>%</span>
              </div>
              <div className="srv-stats__label">Client Satisfaction</div>
            </div>
            <div className="srv-stats__item">
              <div className="srv-stats__num">
                24
                <span>h</span>
              </div>
              <div className="srv-stats__label">Support Response Time</div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="srv-why">
        <div className="container">
          <div className="srv-why__head">
            <div className="sec-eyebrow" style={{ marginBottom: "16px" }}>Why Work With Us</div>
            <h2 className="sec-title">
              Built Different.
              <br />
              <span className="g-text">Delivered Better.</span>
            </h2>
          </div>
          <div className="srv-why__grid reveal">
            <div className="srv-why__card">
              <div className="srv-why__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3>Fast Delivery</h3>
              <p>Most projects delivered in 5 to 10 days — without cutting corners on quality, detail, or performance.</p>
            </div>
            <div className="srv-why__card">
              <div className="srv-why__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3>Conversion Focused</h3>
              <p>Every section, layout, and button is designed with one goal: turn your visitors into real clients and customers.</p>
            </div>
            <div className="srv-why__card">
              <div className="srv-why__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>Premium Design</h3>
              <p>No page builders, no generic templates. Every site is built custom from scratch to match your brand and goals.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="pf-page__cta">
        <div className="container">
          <h2 className="sec-title">
            Ready To Build{" "}
            <span className="g-text">Your Website?</span>
          </h2>
          <p>Tell us about your project and we&apos;ll reply within 24 hours with a free custom plan.</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--lg">
              Start Your Project{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <Link href="/portfolio" className="btn btn--dark btn--lg">View Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
