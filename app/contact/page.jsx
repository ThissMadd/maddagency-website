import Link from 'next/link';

export const metadata = {
  title: { absolute: "MaddAgency | Contact" },
  description: "Get in touch with MaddAgency. Start your web design project today.",
};

export default function ContactPage() {
  return (
    <>
      {/* CONTACT HERO */}
      <section className="ct-page">
        <div className="ct-page__aurora">
          <div className="aurora__blob aurora__blob--1"></div>
          <div className="aurora__blob aurora__blob--3"></div>
        </div>
        <div className="container ct-page__inner">
          {/* LEFT: Info */}
          <div className="ct-info">
            <div className="sec-eyebrow" style={{ marginBottom: "16px" }}>Get In Touch</div>
            <h1 className="ct-info__title">
              Let&apos;s Build
              <br />
              <span className="g-text-anim">Something Great</span>
              <br />
              Together
            </h1>
            <p className="ct-info__sub">Tell us about your business, goals, and what you want your website to achieve.</p>
            {/* Trust badges */}
            <div className="ct-badges">
              <div className="ct-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Reply within 24h</span>
              </div>
              <div className="ct-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Free Consultation</span>
              </div>
              <div className="ct-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>No Commitment</span>
              </div>
            </div>
            {/* Contact channels */}
            <div className="ct-channels">
              <a href="mailto:contact@maddagency.com" className="ct-channel">
                <div className="ct-channel__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="ct-channel__label">Email Us</span>
                  <span className="ct-channel__val">contact@maddagency.com</span>
                </div>
              </a>
              <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="ct-channel">
                <div className="ct-channel__icon ct-channel__icon--green">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
                  </svg>
                </div>
                <div>
                  <span className="ct-channel__label">Chat on WhatsApp</span>
                  <span className="ct-channel__val">Quick reply within hours</span>
                </div>
              </a>
              <div className="ct-channel ct-channel--static">
                <div className="ct-channel__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="ct-channel__label">Location</span>
                  <span className="ct-channel__val">Serving clients across the USA</span>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT: Form */}
          <div className="ct-form-wrap">
            <div className="ct-form-card">
              <div className="ct-form-card__header">
                <h3>Send Us a Message</h3>
                <p>We&apos;ll craft a custom plan for your business</p>
              </div>
              <form className="contact-form" id="contactForm">
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="John Smith" required />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="plan">Interested Plan</label>
                    <select id="plan" name="plan">
                      <option value="">Select a plan...</option>
                      <option value="starter">Starter — $249</option>
                      <option value="growth">Growth — $499</option>
                      <option value="premium">Premium — $999+</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="message">Tell Us About Your Business</label>
                  <textarea id="message" name="message" rows="5" placeholder="What does your business do? What's your goal with this website?" required />
                </div>
                <button type="submit" className="btn btn--purple btn--full btn--lg">
                  <span>Send Message</span>
                  {" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2L15 22 11 13 2 9l20-7z"></path>
                  </svg>
                </button>
                <div className="contact-form__success" id="formSuccess">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {" "}Message sent! We&apos;ll contact you within 24 hours.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* READY TO START */}
      <div className="cta-band">
        <div className="container cta-band__inner">
          <div className="sec-eyebrow cta-band__tag">Ready to start?</div>
          <h2 className="cta-band__title">
            Your Next Website Is
            <br />
            <span className="g-text-anim">One Message Away</span>
          </h2>
          <p className="cta-band__sub">We respond within 24 hours with a free custom plan tailored to your business — no commitment required.</p>
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
