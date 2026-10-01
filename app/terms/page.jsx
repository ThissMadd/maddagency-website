import Link from 'next/link';

export const metadata = {
  title: { absolute: "MaddAgency | Terms & Conditions" },
};

export default function TermsPage() {
  return (
    <>
      <section className="legal-page">
        <div className="container legal-page__inner">
          <div className="legal-page__header">
            <div className="sec-eyebrow">Legal</div>
            <h1>Terms &amp; Conditions</h1>
            <p className="legal-page__date">Last updated: June 2026</p>
          </div>
          <div className="legal-page__body">
            <div className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>By engaging MaddAgency for web design or related services, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not proceed with our services.</p>
            </div>
            <div className="legal-section">
              <h2>2. Services Provided</h2>
              <p>MaddAgency provides web design, WordPress development, SEO optimization, website maintenance, and e-commerce solutions. The scope of each project is defined in the project agreement or invoice agreed upon by both parties prior to work beginning.</p>
            </div>
            <div className="legal-section">
              <h2>3. Payment Terms</h2>
              <p>A deposit of 50% of the total project cost is required before work begins. The remaining balance is due upon project completion and before the final website is delivered or launched. We accept payment via Visa, Mastercard, PayPal, and Stripe.</p>
            </div>
            <div className="legal-section">
              <h2>4. Client Responsibilities</h2>
              <p>Clients are responsible for providing all necessary content, images, branding materials, and feedback in a timely manner. Delays caused by the client may result in adjusted delivery timelines. MaddAgency is not responsible for project delays due to incomplete or late content submission.</p>
            </div>
            <div className="legal-section">
              <h2>5. Revisions</h2>
              <p>Each package includes a defined number of revision rounds as specified in the project agreement. Additional revisions beyond the included amount will be billed at our standard hourly rate.</p>
            </div>
            <div className="legal-section">
              <h2>6. Intellectual Property</h2>
              <p>Upon receipt of full payment, the client owns all custom design elements created specifically for their project. MaddAgency retains the right to display the completed project in our portfolio unless otherwise agreed in writing.</p>
            </div>
            <div className="legal-section">
              <h2>7. Third-Party Tools</h2>
              <p>Some projects may use third-party plugins, themes, or services. MaddAgency is not responsible for issues arising from third-party tools, including updates, license changes, or discontinuation of those services.</p>
            </div>
            <div className="legal-section">
              <h2>8. Limitation of Liability</h2>
              <p>MaddAgency shall not be liable for any indirect, incidental, or consequential damages arising from the use of the delivered website, including lost revenue, data loss, or business interruption.</p>
            </div>
            <div className="legal-section">
              <h2>9. Governing Law</h2>
              <p>These terms are governed by applicable international commercial law. Any disputes shall be resolved through good-faith negotiation before pursuing formal legal action.</p>
            </div>
            <div className="legal-section">
              <h2>10. Contact</h2>
              <p>
                For questions regarding these Terms &amp; Conditions, please contact us at{" "}
                <a href="mailto:contact@maddagency.com">contact@maddagency.com</a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pf-page__cta">
        <div className="container">
          <h2 className="sec-title">
            Ready To Build{" "}
            <span className="g-text">Your Website?</span>
          </h2>
          <p>Tell us about your project and we&apos;ll reply within 24 hours with a free custom plan.</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
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
