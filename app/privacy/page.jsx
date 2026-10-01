import Link from 'next/link';

export const metadata = {
  title: { absolute: "MaddAgency | Privacy Policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="legal-page">
        <div className="container legal-page__inner">
          <div className="legal-page__header">
            <div className="sec-eyebrow">Legal</div>
            <h1>Privacy Policy</h1>
            <p className="legal-page__date">Last updated: June 2026</p>
          </div>
          <div className="legal-page__body">
            <div className="legal-section">
              <h2>1. Information We Collect</h2>
              <p>When you contact us through our website or email, we collect information you voluntarily provide, including your name, email address, phone number, and project details. We do not collect any information automatically beyond standard server logs.</p>
            </div>
            <div className="legal-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information you provide solely to:</p>
              <ul>
                <li>Respond to your inquiries and provide quotes</li>
                <li>Deliver and manage your project</li>
                <li>Send project updates and invoices</li>
                <li>Improve our services based on feedback</li>
              </ul>
              <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
            </div>
            <div className="legal-section">
              <h2>3. Data Storage</h2>
              <p>Your data is stored securely and accessed only by authorized team members involved in your project. We retain your information for as long as necessary to fulfill our services and meet legal obligations.</p>
            </div>
            <div className="legal-section">
              <h2>4. Cookies</h2>
              <p>Our website may use minimal cookies to improve your browsing experience. These are functional cookies only and do not track personal data for advertising purposes. You can disable cookies in your browser settings at any time.</p>
            </div>
            <div className="legal-section">
              <h2>5. Third-Party Services</h2>
              <p>We use trusted third-party services such as Stripe and PayPal for payment processing. These services have their own privacy policies and handle your payment information securely. We do not store your full payment details.</p>
            </div>
            <div className="legal-section">
              <h2>6. Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, contact us at{" "}
                <a href="mailto:contact@maddagency.com">contact@maddagency.com</a>
                .
              </p>
            </div>
            <div className="legal-section">
              <h2>7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Your continued use of our services constitutes acceptance of any changes.</p>
            </div>
            <div className="legal-section">
              <h2>8. Contact</h2>
              <p>
                For any privacy-related questions, please contact us at{" "}
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
