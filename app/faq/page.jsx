import Link from 'next/link';

export const metadata = {
  title: { absolute: "MaddAgency | FAQ" },
  description: "Frequently asked questions about MaddAgency web design services, pricing, process, and delivery.",
};

export default function FaqPage() {
  return (
    <>
      {/* HERO */}
      <section className="faq-page-hero">
        <div className="faq-page-hero__aurora">
          <div className="aurora__blob aurora__blob--1"></div>
          <div className="aurora__blob aurora__blob--2"></div>
        </div>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: "1" }}>
          <div className="sec-eyebrow" style={{ margin: "0 auto 18px" }}>FAQ</div>
          <h1 className="faq-page-hero__title">
            Got Questions?
            <br />
            <span className="g-text-anim">We Have Answers</span>
          </h1>
          <p className="faq-page-hero__sub">Everything you need to know about working with MaddAgency — from process to pricing to delivery.</p>
        </div>
      </section>
      {/* FAQ SECTIONS */}
      <div className="faq-page-body">
        <div className="container">
          {/* Category: General */}
          <div className="faq-cat-block">
            <div className="faq-cat-label">General</div>
            <div className="faq__grid">
              <div className="faq__col">
                <div className="faq__item">
                  <button className="faq__question">
                    What exactly does MaddAgency do?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>MaddAgency is a web design studio specializing in premium websites for small and medium businesses across the USA. We handle everything — design, development, SEO setup, and launch — so you can focus on running your business.</p>
                  </div>
                </div>
                <div className="faq__item">
                  <button className="faq__question">
                    Who are your typical clients?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>We work with small businesses, local service providers, restaurants, coaches, consultants, and e-commerce brands across the United States. If you need a professional online presence that actually converts visitors into customers, we&apos;re the right fit.</p>
                  </div>
                </div>
                <div className="faq__item">
                  <button className="faq__question">
                    Do I need to have content ready before we start?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>It helps to have your content ready, but it&apos;s not required. We can work with placeholder content initially and fill in the details as we go. We can also help you structure your messaging if needed.</p>
                  </div>
                </div>
              </div>
              <div className="faq__col">
                <div className="faq__item">
                  <button className="faq__question">
                    Are you based in the USA?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>We are a fully remote agency serving clients across the USA. While our team operates internationally, all communication, pricing, and deliverables are tailored specifically for the American market.</p>
                  </div>
                </div>
                <div className="faq__item">
                  <button className="faq__question">
                    What makes MaddAgency different from other web design agencies?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>We combine premium design with a revenue-focused mindset. We don&apos;t just build attractive websites — we build sites that convert visitors into paying customers. We also offer fast delivery, transparent pricing, and genuine one-on-one communication throughout the project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Category: Process */}
          <div className="faq-cat-block">
            <div className="faq-cat-label">Process &amp; Delivery</div>
            <div className="faq__grid">
              <div className="faq__col">
                <div className="faq__item">
                  <button className="faq__question">
                    How does the process work?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>Our process is simple: (1) You contact us and we discuss your project. (2) We send a proposal and you pay the deposit. (3) We design and build your website. (4) You review and we make revisions. (5) We launch. Most projects go from kickoff to launch in 7–14 days.</p>
                  </div>
                </div>
                <div className="faq__item">
                  <button className="faq__question">
                    How many revisions are included?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>The Starter plan includes 2 rounds of revisions, Growth includes 3, and Premium includes unlimited revisions until you&apos;re fully satisfied. Additional revision rounds beyond your plan&apos;s limit are billed at our standard rate.</p>
                  </div>
                </div>
                <div className="faq__item">
                  <button className="faq__question">
                    Will I be able to update the website myself?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>Yes. All our websites are built on WordPress with a user-friendly interface, so you can update text, images, and content without any coding knowledge. We also provide a walkthrough video showing you how to manage your site.</p>
                  </div>
                </div>
              </div>
              <div className="faq__col">
                <div className="faq__item">
                  <button className="faq__question">
                    How long does it take to build my website?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>Delivery time depends on the package. Starter websites are typically delivered in 5–7 days. Growth projects take 7–10 days. Premium and custom projects vary between 2–4 weeks depending on complexity and content availability.</p>
                  </div>
                </div>
                <div className="faq__item">
                  <button className="faq__question">
                    What do you need from me to get started?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>We&apos;ll need your business name, logo (if you have one), brand colors, content (text and images), and any reference websites you like. We&apos;ll guide you through everything with a simple onboarding checklist after your deposit is confirmed.</p>
                  </div>
                </div>
                <div className="faq__item">
                  <button className="faq__question">
                    Do you offer website hosting?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>We can recommend and set up reliable hosting for you, but hosting fees are paid directly to the hosting provider. We&apos;ll help you choose the best option based on your budget and expected traffic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Category: Pricing */}
          <div className="faq-cat-block">
            <div className="faq-cat-label">Pricing &amp; Payment</div>
            <div className="faq__grid">
              <div className="faq__col">
                <div className="faq__item">
                  <button className="faq__question">
                    How much does a website cost?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>Our packages start at $249 for the Starter plan (3 pages), $499 for the Growth plan (up to 7 pages), and $999+ for the Premium plan (custom, unlimited pages). Custom projects are quoted individually based on scope.</p>
                  </div>
                </div>
                <div className="faq__item">
                  <button className="faq__question">
                    What payment methods do you accept?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>We accept Visa, Mastercard, PayPal, and Stripe. All payments are processed securely. A 50% deposit is required before work begins, with the remaining balance due upon project completion.</p>
                  </div>
                </div>
              </div>
              <div className="faq__col">
                <div className="faq__item">
                  <button className="faq__question">
                    Is there a payment plan available?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>Our standard structure is 50% upfront and 50% on delivery. For larger Premium projects, we can discuss a milestone-based payment structure. Contact us to talk through the options.</p>
                  </div>
                </div>
                <div className="faq__item">
                  <button className="faq__question">
                    Are there any hidden fees?{" "}
                    <span className="faq__icon">+</span>
                  </button>
                  <div className="faq__answer">
                    <p>No hidden fees. The price agreed upon in your project proposal is what you pay. The only additional costs that may apply are third-party services (hosting, premium plugins, domain registration) which are always disclosed in advance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="cta-band">
        <div className="container cta-band__inner">
          <div className="sec-eyebrow cta-band__tag">Still have questions?</div>
          <h2 className="cta-band__title">
            Let&apos;s Talk About
            <br />
            <span className="g-text-anim">Your Project</span>
          </h2>
          <p className="cta-band__sub">Can&apos;t find the answer you&apos;re looking for? Reach out and we&apos;ll get back to you within 24 hours.</p>
          <div className="cta-band__actions">
            <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--lg">
              Start Your Project{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <Link href="/portfolio" className="btn btn--dark btn--lg">View Our Work</Link>
          </div>
        </div>
      </div>
    </>
  );
}
