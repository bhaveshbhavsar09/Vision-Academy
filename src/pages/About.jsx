import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function About() {
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

    const animatedElements = document.querySelectorAll('.about-text, .about-image-container');
    
    animatedElements.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-container">
              <div className="glass-card image-card">
                <img src="/pic2.webp" alt="Vision Academy Campus" onError={(e) => { e.target.src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop'; }} className="about-img" />
                <div className="floating-badge">
                  <i className="fa-solid fa-award"></i>
                  <div>
                    <strong>Top Rated</strong>
                    <span>Institution</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-text">
              <h2>A Tradition of <span className="gradient-text">Excellence</span></h2>
              <p>At Vision Academy, we believe that education is not just about imparting knowledge, but about nurturing the potential within every student. Our state-of-the-art facilities and innovative teaching methodologies create an unparalleled learning experience.</p>
              <ul className="features-list">
                <li><i className="fa-solid fa-check-circle"></i> Rigorous and specialized curriculum</li>
                <li><i className="fa-solid fa-check-circle"></i> Focus on analytical and critical thinking</li>
                <li><i className="fa-solid fa-check-circle"></i> Advanced preparation for board exams</li>
                <li><i className="fa-solid fa-check-circle"></i> Technology-integrated smart classrooms</li>
              </ul>
              <Link to="/admissions" className="btn btn-outline">Discover Our Campus <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>

          <div className="about-grid" style={{ marginTop: '6rem', alignItems: 'center' }}>
            <div className="about-text">
              <h2>Meet Our Founder, <span className="gradient-text">Anil Mala Sir</span></h2>
              <p style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Anil Mala Sir, the visionary teacher and founder behind Vision Academy, has dedicated his life to empowering students with the knowledge and character needed to excel in the modern world.</p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>With his profound teaching experience and passion for education, his unique pedagogical approach blends traditional values with innovative, future-ready learning strategies. Under his guidance, Vision Academy has grown into a premier institution where every student is mentored to realize their fullest potential.</p>
            </div>
            <div className="about-image-container">
              <div className="glass-card image-card" style={{ padding: '1rem' }}>
                <img src="/pic1.webp" alt="Anil Mala Sir - Founder and Teacher" style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover', aspectRatio: '4/5' }} />
                <div className="floating-badge" style={{ bottom: '1rem', left: '-1rem', right: 'auto', background: 'var(--bg-secondary)' }}>
                  <i className="fa-solid fa-chalkboard-user"></i>
                  <div>
                    <strong>Anil Mala Sir</strong>
                    <span>Founder & Teacher</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
