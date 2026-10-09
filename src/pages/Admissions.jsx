import { useEffect } from 'react';

export default function Admissions() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.cta-content');
    
    animatedElements.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <section className="cta-section" id="admissions" style={{ minHeight: 'calc(100vh - 300px)' }}>
        <div className="container">
          <div className="glass-card cta-content">
            <h2>Ready to Shape Your Future?</h2>
            <p>Join the Vision Academy community today. Admissions for the upcoming academic year are now open.</p>
            <form className="inquiry-form" style={{ maxWidth: '600px', margin: '2.5rem auto 0', textAlign: 'left', display: 'grid', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <input type="text" placeholder="Student's Full Name" required className="form-input" />
                <input type="text" placeholder="Parent/Guardian's Name" required className="form-input" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <input type="email" placeholder="Email Address" required className="form-input" />
                <input type="tel" placeholder="Phone Number" required className="form-input" />
              </div>
              <select required className="form-input" style={{ appearance: 'none', cursor: 'pointer' }} defaultValue="">
                <option value="" disabled>Grade Applying For</option>
                <option value="primary">Primary School (Grades 1-5)</option>
                <option value="middle">Middle School (Grades 6-8)</option>
                <option value="high">High School (Grades 9-12)</option>
              </select>
              <textarea placeholder="Do you have any questions or additional information?" rows="4" className="form-input" style={{ borderRadius: '1.5rem', resize: 'vertical', paddingTop: '1.25rem' }}></textarea>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', fontSize: '1.1rem' }}>Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
