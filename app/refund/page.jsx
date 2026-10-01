import Link from 'next/link';

export const metadata = {
  title: { absolute: "MaddAgency | Refund Policy" },
};

export default function RefundPage() {
  return (
    <>
      <section className="legal-page">
        <div className="container legal-page__inner">
          <div className="legal-page__header">
            <div className="sec-eyebrow">Legal</div>
            <h1>Refund Policy</h1>
            <p className="legal-page__date">Last updated: June 2026</p>
          </div>
          <div className="legal-page__body">
            <div className="legal-section">
              <h2>1. Our Commitment</h2>
              <p>At MaddAgency, we are committed to delivering high-quality work that meets the agreed project scope. We work closely with clients throughout the process to ensure satisfaction at every stage.</p>
            </div>
            <div className="legal-section">
              <h2>2. Deposit Policy</h2>
              <p>
                The initial deposit (50% of the total project cost) paid before work begins is{" "}
                <strong>non-refundable</strong>
                . This deposit covers the time invested in project planning, research, initial design, and resource allocation.
              </p>
            </div>
            <div className="legal-section">
              <h2>3. Cancellation Before Completion</h2>
              <p>If a client wishes to cancel a project after work has begun but before completion, the following applies:</p>
              <ul>
                <li>The deposit is non-refundable in all cases.</li>
                <li>Any additional payments made beyond the deposit for completed work milestones are also non-refundable.</li>
                <li>If the client cancels before the second payment has been made, no further charges will apply.</li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>4. Refund Eligibility</h2>
              <p>A partial or full refund of the final payment (excluding the deposit) may be considered only if:</p>
              <ul>
                <li>MaddAgency fails to deliver the project within the agreed timeline without prior notice or justification.</li>
                <li>The delivered work significantly deviates from the agreed project scope and cannot be resolved through revisions.</li>
              </ul>
              <p>Refund requests must be submitted within 7 days of project delivery.</p>
            </div>
            <div className="legal-section">
              <h2>5. Revision-First Approach</h2>
              <p>Before any refund is considered, MaddAgency will first offer to resolve any issues through the revision process included in your package. We encourage clients to communicate concerns early so we can address them promptly.</p>
            </div>
            <div className="legal-section">
              <h2>6. Non-Refundable Items</h2>
              <p>The following are non-refundable under any circumstances:</p>
              <ul>
                <li>Initial deposit payments</li>
                <li>Costs for third-party services, plugins, or licenses purchased on behalf of the client</li>
                <li>Fees for completed and approved milestones</li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>7. How to Request a Refund</h2>
              <p>
                To submit a refund request, email us at{" "}
                <a href="mailto:contact@maddagency.com">contact@maddagency.com</a>
                {" "}with your project details and reason for the request. We will review and respond within 5 business days.
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
