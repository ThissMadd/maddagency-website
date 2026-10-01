export const metadata = {
  title: { absolute: "MaddAgency | Our Work" },
  description: "Browse all projects built and launched by MaddAgency — web design, WordPress, e-commerce, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pf-page__hero">
        <div className="container">
          <div className="sec-eyebrow">Our Work</div>
          <h1 className="sec-title">
            Projects We&apos;ve{" "}
            <span className="g-text">Built &amp; Launched</span>
          </h1>
          <p className="pf-page__sub">Every project delivered with attention to detail, speed, and conversion in mind.</p>
        </div>
      </section>
      {/* ALL PROJECTS */}
      <section className="pf-page__section">
        <div className="container">
          <div className="portfolio__grid reveal">
            <div className="portfolio-card" data-modal-open="modal-pf-nexora" style={{ cursor: "pointer" }}>
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
            <div className="portfolio-card" data-modal-open="modal-pf-stronger" style={{ cursor: "pointer" }}>
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
            <div className="portfolio-card" data-modal-open="modal-pf-belforno" style={{ cursor: "pointer" }}>
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
            <div className="portfolio-card" data-modal-open="modal-pf-summit" style={{ cursor: "pointer" }}>
              <div className="portfolio-card__img">
                <img src="/images/pf-10.png" alt="Summit 2025 Conference" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__tag">Event · Premium</span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <h3>Summit 2025</h3>
                <p>Full conference website with speaker lineup, full agenda, sponsor showcase, and tiered ticket sales.</p>
                <div className="portfolio-card__tags">
                  <span>WordPress</span>
                  <span>Events</span>
                  <span>Booking</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-modal-open="modal-pf-elevate" style={{ cursor: "pointer" }}>
              <div className="portfolio-card__img">
                <img src="/images/pf-4.png" alt="Elevate Business Group" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__tag">Corporate · Growth</span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <h3>Elevate Business</h3>
                <p>Professional consulting website with case studies, service pages, team profiles, and client testimonials.</p>
                <div className="portfolio-card__tags">
                  <span>WordPress</span>
                  <span>Corporate</span>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-modal-open="modal-pf-inspiro" style={{ cursor: "pointer" }}>
              <div className="portfolio-card__img">
                <img src="/images/pf-7.png" alt="Inspiro Blog Magazine" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__tag">Blog · Growth</span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <h3>Inspiro Blog</h3>
                <p>Clean lifestyle blog with category pages, featured articles, newsletter signup, and popular posts sidebar.</p>
                <div className="portfolio-card__tags">
                  <span>WordPress</span>
                  <span>Blog</span>
                  <span>SEO</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-modal-open="modal-pf-adamk" style={{ cursor: "pointer" }}>
              <div className="portfolio-card__img">
                <img src="/images/pf-5.png" alt="Adam K. Portfolio" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__tag">Portfolio · Starter</span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <h3>Adam K. Portfolio</h3>
                <p>Clean monochrome personal portfolio with selected works, case studies, skills showcase, and testimonials.</p>
                <div className="portfolio-card__tags">
                  <span>WordPress</span>
                  <span>Portfolio</span>
                  <span>SEO</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-modal-open="modal-pf-flowtrack" style={{ cursor: "pointer" }}>
              <div className="portfolio-card__img">
                <img src="/images/pf-6.png" alt="FlowTrack Analytics" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__tag">SaaS · Premium</span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <h3>FlowTrack Analytics</h3>
                <p>High-converting SaaS landing page with live dashboard preview, 3-tier pricing, and email integration.</p>
                <div className="portfolio-card__tags">
                  <span>WordPress</span>
                  <span>SaaS</span>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-modal-open="modal-pf-homelia" style={{ cursor: "pointer" }}>
              <div className="portfolio-card__img">
                <img src="/images/pf-8.png" alt="Homelia Real Estate" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__tag">Real Estate · Premium</span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <h3>Homelia Realty</h3>
                <p>Full real estate platform with property listings, search filters, agent profiles, and inquiry forms.</p>
                <div className="portfolio-card__tags">
                  <span>WordPress</span>
                  <span>Real Estate</span>
                  <span>Booking</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-modal-open="modal-pf-luxora" style={{ cursor: "pointer" }}>
              <div className="portfolio-card__img">
                <img src="/images/pf-3.png" alt="Luxora Home Store" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__tag">E-Commerce · Premium</span>
                </div>
              </div>
              <div className="portfolio-card__info">
                <h3>Luxora Home Store</h3>
                <p>Minimalist furniture &amp; decor e-commerce with product catalog, category filtering, and cart checkout.</p>
                <div className="portfolio-card__tags">
                  <span>WooCommerce</span>
                  <span>E-Commerce</span>
                  <span>SEO</span>
                </div>
              </div>
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
          <p>Let&apos;s create something great together.</p>
          <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--lg">
            Start Your Project{" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </section>
      {/* Real Project Modals */}
      <div className="proj-modal-overlay" id="modal-pf-nexora">
        <div className="proj-modal__close">
          <button data-modal-close="modal-pf-nexora" aria-label="Close">✕</button>
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
              <button data-modal-close="modal-pf-nexora" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="proj-modal-overlay" id="modal-pf-stronger">
        <div className="proj-modal__close">
          <button data-modal-close="modal-pf-stronger" aria-label="Close">✕</button>
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
              <button data-modal-close="modal-pf-stronger" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="proj-modal-overlay" id="modal-pf-belforno">
        <div className="proj-modal__close">
          <button data-modal-close="modal-pf-belforno" aria-label="Close">✕</button>
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
              <button data-modal-close="modal-pf-belforno" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* Summit 2025 */}
      <div className="proj-modal-overlay" id="modal-pf-summit">
        <div className="proj-modal__close">
          <button data-modal-close="modal-pf-summit" aria-label="Close">✕</button>
        </div>
        <div className="proj-modal">
          <div className="proj-modal__browser">
            <div className="proj-modal__browser-bar">
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-url">summit2025.com</span>
            </div>
            <div className="proj-modal__browser-scroll">
              <img src="/images/pf-10.png" alt="Summit 2025 full preview" />
            </div>
            <div className="proj-modal__scroll-hint">↕ Scroll to explore the full design</div>
          </div>
          <div className="proj-modal__body">
            <div className="proj-modal__eyebrow">
              <span className="proj-modal__badge">Event · Premium</span>
              <span className="proj-modal__badge" style={{ color: "var(--muted)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}>Austin, TX</span>
            </div>
            <h2 className="proj-modal__title">Summit 2025 Conference</h2>
            <p className="proj-modal__sub">Immersive conference website for a 3-day technology summit — speaker lineup, full agenda, sponsor showcase, tiered ticket sales, newsletter, and countdown timer.</p>
            <div className="proj-modal__stats">
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Type</div>
                <div className="proj-modal__stat-value">Conference</div>
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
              <p>Summit 2025 needed a complete event website that handles everything from ticket sales to speaker showcases. The site needed to build excitement, communicate the agenda clearly, and convert visitors into ticket buyers with three pricing tiers.</p>
            </div>
            <div className="proj-modal__section">
              <h3>What We Built</h3>
              <ul className="proj-modal__list">
                <li>Custom dark WordPress theme with purple accent</li>
                <li>Speaker profiles &amp; bios (50+ speakers)</li>
                <li>Full event agenda (5 sessions)</li>
                <li>Sponsor showcase (Google, Microsoft, Airbnb…)</li>
                <li>3-tier ticket pricing ($199 / $399 / $149)</li>
                <li>Newsletter signup + email automation</li>
                <li>Countdown timer + CTA banner</li>
                <li>On-page SEO &amp; Google Analytics 4</li>
              </ul>
            </div>
            <div className="proj-modal__section">
              <h3>Tech Stack</h3>
              <div className="proj-modal__tech">
                <span className="proj-modal__tech-tag">WordPress</span>
                <span className="proj-modal__tech-tag">Events Calendar</span>
                <span className="proj-modal__tech-tag">Stripe</span>
                <span className="proj-modal__tech-tag">Mailchimp</span>
                <span className="proj-modal__tech-tag">Elementor</span>
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
              <button data-modal-close="modal-pf-summit" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* Elevate Business */}
      <div className="proj-modal-overlay" id="modal-pf-elevate">
        <div className="proj-modal__close">
          <button data-modal-close="modal-pf-elevate" aria-label="Close">✕</button>
        </div>
        <div className="proj-modal">
          <div className="proj-modal__browser">
            <div className="proj-modal__browser-bar">
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-url">elevate.group</span>
            </div>
            <div className="proj-modal__browser-scroll">
              <img src="/images/pf-4.png" alt="Elevate Business full preview" />
            </div>
            <div className="proj-modal__scroll-hint">↕ Scroll to explore the full design</div>
          </div>
          <div className="proj-modal__body">
            <div className="proj-modal__eyebrow">
              <span className="proj-modal__badge">Corporate · Growth</span>
              <span className="proj-modal__badge" style={{ color: "var(--muted)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}>New York, NY</span>
            </div>
            <h2 className="proj-modal__title">Elevate Business Group</h2>
            <p className="proj-modal__sub">Professional consulting website for Elevate — strategy &amp; consulting services, real case studies with measurable results, team profiles, blog insights, and CRM integration.</p>
            <div className="proj-modal__stats">
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Type</div>
                <div className="proj-modal__stat-value">Corporate</div>
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
                <div className="proj-modal__stat-value">Growth</div>
              </div>
            </div>
            <div className="proj-modal__section">
              <h3>Overview</h3>
              <p>Elevate needed a website that positions them as the trusted partner for enterprise transformation. They required a clean, authoritative design with case studies that show real ROI, service pages covering 4 key offerings, and seamless lead capture.</p>
            </div>
            <div className="proj-modal__section">
              <h3>What We Built</h3>
              <ul className="proj-modal__list">
                <li>Clean blue &amp; white corporate theme</li>
                <li>4 service pages with icons</li>
                <li>3 detailed case studies with results</li>
                <li>Team profiles section</li>
                <li>Client logo bar (Deloitte, PwC, KPMG…)</li>
                <li>Latest insights blog</li>
                <li>HubSpot CRM integration</li>
                <li>On-page SEO &amp; Google Analytics 4</li>
              </ul>
            </div>
            <div className="proj-modal__section">
              <h3>Tech Stack</h3>
              <div className="proj-modal__tech">
                <span className="proj-modal__tech-tag">WordPress</span>
                <span className="proj-modal__tech-tag">Elementor Pro</span>
                <span className="proj-modal__tech-tag">HubSpot CRM</span>
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
              <button data-modal-close="modal-pf-elevate" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* Inspiro Blog */}
      <div className="proj-modal-overlay" id="modal-pf-inspiro">
        <div className="proj-modal__close">
          <button data-modal-close="modal-pf-inspiro" aria-label="Close">✕</button>
        </div>
        <div className="proj-modal">
          <div className="proj-modal__browser">
            <div className="proj-modal__browser-bar">
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-url">inspiro.blog</span>
            </div>
            <div className="proj-modal__browser-scroll">
              <img src="/images/pf-7.png" alt="Inspiro Blog full preview" />
            </div>
            <div className="proj-modal__scroll-hint">↕ Scroll to explore the full design</div>
          </div>
          <div className="proj-modal__body">
            <div className="proj-modal__eyebrow">
              <span className="proj-modal__badge">Blog · Growth</span>
              <span className="proj-modal__badge" style={{ color: "var(--muted)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}>Remote</span>
            </div>
            <h2 className="proj-modal__title">Inspiro Blog &amp; Magazine</h2>
            <p className="proj-modal__sub">Clean lifestyle blog for Inspiro — 6 article categories, featured hero post, newsletter signup, popular posts sidebar, and weekly featured section to keep readers coming back.</p>
            <div className="proj-modal__stats">
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Type</div>
                <div className="proj-modal__stat-value">Blog / Magazine</div>
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
                <div className="proj-modal__stat-value">Growth</div>
              </div>
            </div>
            <div className="proj-modal__section">
              <h3>Overview</h3>
              <p>Inspiro needed a minimal, content-first blog that keeps readers engaged and grows a loyal newsletter audience. The design focuses on clean typography, fast loading, and smart content discovery through categories and a popular posts widget.</p>
            </div>
            <div className="proj-modal__section">
              <h3>What We Built</h3>
              <ul className="proj-modal__list">
                <li>Clean light theme with minimal layout</li>
                <li>6 content categories (Lifestyle, Mindset, Productivity…)</li>
                <li>Featured hero article section</li>
                <li>Latest articles with sidebar layout</li>
                <li>Popular posts widget</li>
                <li>Newsletter + email capture (Mailchimp)</li>
                <li>Featured this week section</li>
                <li>Yoast SEO full setup</li>
              </ul>
            </div>
            <div className="proj-modal__section">
              <h3>Tech Stack</h3>
              <div className="proj-modal__tech">
                <span className="proj-modal__tech-tag">WordPress</span>
                <span className="proj-modal__tech-tag">Elementor</span>
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
              <button data-modal-close="modal-pf-inspiro" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* Adam K. Portfolio */}
      <div className="proj-modal-overlay" id="modal-pf-adamk">
        <div className="proj-modal__close">
          <button data-modal-close="modal-pf-adamk" aria-label="Close">✕</button>
        </div>
        <div className="proj-modal">
          <div className="proj-modal__browser">
            <div className="proj-modal__browser-bar">
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-url">adamk.design</span>
            </div>
            <div className="proj-modal__browser-scroll">
              <img src="/images/pf-5.png" alt="Adam K. Portfolio full preview" />
            </div>
            <div className="proj-modal__scroll-hint">↕ Scroll to explore the full design</div>
          </div>
          <div className="proj-modal__body">
            <div className="proj-modal__eyebrow">
              <span className="proj-modal__badge">Portfolio · Starter</span>
              <span className="proj-modal__badge" style={{ color: "var(--muted)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}>San Francisco, CA</span>
            </div>
            <h2 className="proj-modal__title">Adam K. Creative Portfolio</h2>
            <p className="proj-modal__sub">Clean monochrome portfolio for designer Adam K. — selected works, case study pages, skills showcase, client testimonials, and a bold contact CTA.</p>
            <div className="proj-modal__stats">
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Type</div>
                <div className="proj-modal__stat-value">Portfolio</div>
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
                <div className="proj-modal__stat-value">Starter</div>
              </div>
            </div>
            <div className="proj-modal__section">
              <h3>Overview</h3>
              <p>Adam K. needed a portfolio that communicates his premium positioning as a product designer and Webflow developer. The black &amp; white aesthetic was intentional — letting the work speak while the design signals taste and restraint.</p>
            </div>
            <div className="proj-modal__section">
              <h3>What We Built</h3>
              <ul className="proj-modal__list">
                <li>Custom black &amp; white minimal theme</li>
                <li>Selected work grid (3 projects)</li>
                <li>Case study pages (Modern Café, Studio Bagz, SaaS)</li>
                <li>About + skills section (Figma, Webflow, GSAP…)</li>
                <li>Client testimonials (3 quotes)</li>
                <li>Contact form + CTA banner</li>
                <li>SEO + page speed optimization</li>
              </ul>
            </div>
            <div className="proj-modal__section">
              <h3>Tech Stack</h3>
              <div className="proj-modal__tech">
                <span className="proj-modal__tech-tag">WordPress</span>
                <span className="proj-modal__tech-tag">Elementor Pro</span>
                <span className="proj-modal__tech-tag">GSAP</span>
                <span className="proj-modal__tech-tag">WP Forms</span>
                <span className="proj-modal__tech-tag">Yoast SEO</span>
              </div>
            </div>
            <div className="proj-modal__cta">
              <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--sm">
                Start Your Project{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "13px", height: "13px" }}>
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <button data-modal-close="modal-pf-adamk" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* FlowTrack Analytics */}
      <div className="proj-modal-overlay" id="modal-pf-flowtrack">
        <div className="proj-modal__close">
          <button data-modal-close="modal-pf-flowtrack" aria-label="Close">✕</button>
        </div>
        <div className="proj-modal">
          <div className="proj-modal__browser">
            <div className="proj-modal__browser-bar">
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-url">flowtrack.io</span>
            </div>
            <div className="proj-modal__browser-scroll">
              <img src="/images/pf-6.png" alt="FlowTrack Analytics full preview" />
            </div>
            <div className="proj-modal__scroll-hint">↕ Scroll to explore the full design</div>
          </div>
          <div className="proj-modal__body">
            <div className="proj-modal__eyebrow">
              <span className="proj-modal__badge">SaaS · Premium</span>
              <span className="proj-modal__badge" style={{ color: "var(--muted)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}>San Francisco, CA</span>
            </div>
            <h2 className="proj-modal__title">FlowTrack Analytics</h2>
            <p className="proj-modal__sub">High-converting SaaS landing page for FlowTrack — live dashboard preview, 6 feature blocks, 3-tier pricing, client logo bar (Google, Airbnb, Spotify…), and full email integration.</p>
            <div className="proj-modal__stats">
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Type</div>
                <div className="proj-modal__stat-value">SaaS Platform</div>
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
              <p>FlowTrack needed a SaaS landing page that converts visitors into free trial signups. The site showcases the product dashboard, communicates 6 key features, and presents three pricing tiers clearly — all designed to reduce friction toward the CTA.</p>
            </div>
            <div className="proj-modal__section">
              <h3>What We Built</h3>
              <ul className="proj-modal__list">
                <li>Dark SaaS theme with purple accent</li>
                <li>Hero + live dashboard mockup</li>
                <li>6-feature showcase grid</li>
                <li>Stats section (10K+ users, 98% satisfaction)</li>
                <li>3-tier pricing ($19 / $49 / Custom)</li>
                <li>Client logo bar (Google, Microsoft, Airbnb…)</li>
                <li>Testimonials slider</li>
                <li>Stripe + Mailchimp integration</li>
              </ul>
            </div>
            <div className="proj-modal__section">
              <h3>Tech Stack</h3>
              <div className="proj-modal__tech">
                <span className="proj-modal__tech-tag">WordPress</span>
                <span className="proj-modal__tech-tag">Elementor Pro</span>
                <span className="proj-modal__tech-tag">Stripe</span>
                <span className="proj-modal__tech-tag">Mailchimp</span>
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
              <button data-modal-close="modal-pf-flowtrack" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* Homelia Real Estate */}
      <div className="proj-modal-overlay" id="modal-pf-homelia">
        <div className="proj-modal__close">
          <button data-modal-close="modal-pf-homelia" aria-label="Close">✕</button>
        </div>
        <div className="proj-modal">
          <div className="proj-modal__browser">
            <div className="proj-modal__browser-bar">
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-url">homelia.com</span>
            </div>
            <div className="proj-modal__browser-scroll">
              <img src="/images/pf-8.png" alt="Homelia Real Estate full preview" />
            </div>
            <div className="proj-modal__scroll-hint">↕ Scroll to explore the full design</div>
          </div>
          <div className="proj-modal__body">
            <div className="proj-modal__eyebrow">
              <span className="proj-modal__badge">Real Estate · Premium</span>
              <span className="proj-modal__badge" style={{ color: "var(--muted)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}>Miami, FL</span>
            </div>
            <h2 className="proj-modal__title">Homelia Real Estate</h2>
            <p className="proj-modal__sub">Full real estate platform for Homelia — property listings with For Sale/Rent filters, advanced search, 4 agent profiles, testimonials, and a dream home finder CTA.</p>
            <div className="proj-modal__stats">
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Type</div>
                <div className="proj-modal__stat-value">Real Estate</div>
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
              <p>Homelia needed a full real estate platform that helps buyers find properties and builds trust through agent profiles and verified listings. The site needed a powerful property search, clear listing cards, and a strong CTA to drive inquiries.</p>
            </div>
            <div className="proj-modal__section">
              <h3>What We Built</h3>
              <ul className="proj-modal__list">
                <li>Clean white real estate theme</li>
                <li>Property listings grid (For Sale / For Rent)</li>
                <li>Advanced search (Location, Type, Price, Beds)</li>
                <li>4 agent profiles with contact info</li>
                <li>Client testimonials slider</li>
                <li>Why Choose Homelia section</li>
                <li>CTA banner + inquiry forms</li>
                <li>Local SEO + Google Maps</li>
              </ul>
            </div>
            <div className="proj-modal__section">
              <h3>Tech Stack</h3>
              <div className="proj-modal__tech">
                <span className="proj-modal__tech-tag">WordPress</span>
                <span className="proj-modal__tech-tag">WP Real Estate</span>
                <span className="proj-modal__tech-tag">Elementor</span>
                <span className="proj-modal__tech-tag">Google Maps</span>
                <span className="proj-modal__tech-tag">Yoast SEO</span>
              </div>
            </div>
            <div className="proj-modal__cta">
              <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--sm">
                Start Your Project{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "13px", height: "13px" }}>
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <button data-modal-close="modal-pf-homelia" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* Luxora Home Store */}
      <div className="proj-modal-overlay" id="modal-pf-luxora">
        <div className="proj-modal__close">
          <button data-modal-close="modal-pf-luxora" aria-label="Close">✕</button>
        </div>
        <div className="proj-modal">
          <div className="proj-modal__browser">
            <div className="proj-modal__browser-bar">
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-dot"></span>
              <span className="proj-modal__browser-url">luxora.store</span>
            </div>
            <div className="proj-modal__browser-scroll">
              <img src="/images/pf-3.png" alt="Luxora Home Store full preview" />
            </div>
            <div className="proj-modal__scroll-hint">↕ Scroll to explore the full design</div>
          </div>
          <div className="proj-modal__body">
            <div className="proj-modal__eyebrow">
              <span className="proj-modal__badge">E-Commerce · Premium</span>
              <span className="proj-modal__badge" style={{ color: "var(--muted)", borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}>Los Angeles, CA</span>
            </div>
            <h2 className="proj-modal__title">Luxora Home Store</h2>
            <p className="proj-modal__sub">Minimalist e-commerce store for Luxora — handcrafted furniture &amp; decor with product catalog, category filtering, new collection banner, newsletter signup, and Stripe checkout.</p>
            <div className="proj-modal__stats">
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Type</div>
                <div className="proj-modal__stat-value">E-Commerce</div>
              </div>
              <div className="proj-modal__stat">
                <div className="proj-modal__stat-label">Platform</div>
                <div className="proj-modal__stat-value">WooCommerce</div>
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
              <p>Luxora needed a premium online store that reflects their brand — timeless, minimal, and refined. The site needed to showcase 150+ products across 5 categories, feature a new collection banner, and drive repeat purchases through a newsletter strategy.</p>
            </div>
            <div className="proj-modal__section">
              <h3>What We Built</h3>
              <ul className="proj-modal__list">
                <li>Custom beige minimal WooCommerce theme</li>
                <li>5-category product catalog (Furniture, Lighting, Decor…)</li>
                <li>Featured products section (4 items)</li>
                <li>New collection promotional banner</li>
                <li>Trust icons (Quality, Sustainable, Free Shipping…)</li>
                <li>Newsletter signup (Mailchimp)</li>
                <li>Stripe + PayPal + Apple Pay checkout</li>
                <li>Yoast SEO + Google Analytics 4</li>
              </ul>
            </div>
            <div className="proj-modal__section">
              <h3>Tech Stack</h3>
              <div className="proj-modal__tech">
                <span className="proj-modal__tech-tag">WooCommerce</span>
                <span className="proj-modal__tech-tag">Elementor</span>
                <span className="proj-modal__tech-tag">Stripe</span>
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
              <button data-modal-close="modal-pf-luxora" className="btn btn--dark btn--sm">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
