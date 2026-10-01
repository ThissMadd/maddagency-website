import Link from 'next/link';

export const metadata = {
  title: { absolute: "MaddAgency | Disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="legal-page">
        <div className="container legal-page__inner">
          <div className="legal-page__header">
            <div className="sec-eyebrow">Legal</div>
            <h1>Disclaimer</h1>
            <p className="legal-page__date">Last updated: June 2026</p>
          </div>
          <div className="legal-page__body">
            <div className="legal-section">
              <h2>1. General Information</h2>
              <p>The information provided on the MaddAgency website is for general informational purposes only. While we strive to keep all information accurate and up to date, we make no warranties of any kind, express or implied, regarding the completeness, accuracy, or reliability of any information on this site.</p>
            </div>
            <div className="legal-section">
              <h2>2. Results Disclaimer</h2>
              <p>Any examples of results, revenue increases, or business outcomes mentioned on our website are illustrative and based on specific client experiences. Individual results will vary depending on factors including but not limited to industry, competition, existing brand presence, and marketing efforts. MaddAgency does not guarantee specific results from our services.</p>
            </div>
            <div className="legal-section">
              <h2>3. External Links</h2>
              <p>Our website may contain links to third-party websites. These links are provided for your convenience only. MaddAgency has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
            </div>
            <div className="legal-section">
              <h2>4. Professional Advice</h2>
              <p>The content on this website does not constitute professional legal, financial, or business advice. For advice specific to your situation, please consult a qualified professional.</p>
            </div>
            <div className="legal-section">
              <h2>5. Service Availability</h2>
              <p>MaddAgency reserves the right to modify, suspend, or discontinue any service at any time without prior notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of services.</p>
            </div>
            <div className="legal-section">
              <h2>6. Accuracy of Pricing</h2>
              <p>Pricing displayed on our website is subject to change without notice. Final pricing for any project is confirmed in the formal project agreement or invoice issued to the client prior to work beginning.</p>
            </div>
            <div className="legal-section">
              <h2>7. Contact</h2>
              <p>
                If you have any questions about this disclaimer, please contact us at{" "}
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
