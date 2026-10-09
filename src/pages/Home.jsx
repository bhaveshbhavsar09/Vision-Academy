import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import { useEffect } from 'react';

export default function Home() {
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

    const animatedElements = document.querySelectorAll('.about-text, .about-image-container, .program-card, .section-header, .stats-container, .cta-content, .feature-card, .approach-grid > div');
    
    animatedElements.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-background"></div>
        <div className="hero-content">
          <span className="badge">Shaping the Future</span>
          <h1>Empowering the <span className="gradient-text">Leaders</span> of Tomorrow</h1>
          <p>Welcome to Vision Academy, where academic excellence meets holistic development. Discover an environment designed to inspire and challenge.</p>
          <div className="hero-buttons">
            <Link to="/programs" className="btn btn-primary">Explore Programs</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
          
          <div className="stats-container">
            <div className="stat-item">
              <Counter target={2500} />
              <p>Students Enrolled</p>
            </div>
            <div className="stat-item">
              <Counter target={150} />
              <p>Expert Faculty</p>
            </div>
            <div className="stat-item">
              <Counter target={50} />
              <p>Plus Awards</p>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
            <h2>Why Choose <span className="gradient-text">Vision</span>?</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 0' }}>We provide a supportive and engaging environment that promotes holistic development.</p>
          </div>
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="glass-card feature-card text-center" style={{ padding: '2.5rem 2rem', transition: 'transform 0.3s' }}>
              <i className="fa-solid fa-users-rectangle" style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '1rem' }}></i>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.25rem' }}>Smart Classrooms</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Equipped with digital learning tools for an interactive and engaging educational experience.</p>
            </div>
            <div className="glass-card feature-card text-center" style={{ padding: '2.5rem 2rem', transition: 'transform 0.3s' }}>
              <i className="fa-solid fa-chalkboard-user" style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '1rem' }}></i>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.25rem' }}>Expert Faculty</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Learn from highly qualified educators dedicated to academic excellence.</p>
            </div>
            <div className="glass-card feature-card text-center" style={{ padding: '2.5rem 2rem', transition: 'transform 0.3s' }}>
              <i className="fa-solid fa-user-check" style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '1rem' }}></i>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.25rem' }}>Personalized Mentorship</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>One-on-one guidance and support to ensure every student reaches their full potential.</p>
            </div>
            <div className="glass-card feature-card text-center" style={{ padding: '2.5rem 2rem', transition: 'transform 0.3s' }}>
              <i className="fa-solid fa-book-open" style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '1rem' }}></i>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.25rem' }}>Extensive Library</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>A vast collection of academic resources to support deep research and learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
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
              <Link to="/about" className="btn btn-outline">Discover Our Campus <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section Snippet */}
      <section className="programs" id="programs" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Academic <span className="gradient-text">Programs</span></h2>
            <p>Tailored educational pathways designed to foster growth at every stage of development.</p>
          </div>
          
          <div className="programs-grid">
            <div className="glass-card program-card">
              <div className="card-icon"><i className="fa-solid fa-child-reaching"></i></div>
              <h3>Primary School</h3>
              <p>Building a strong foundation with an emphasis on curiosity, creativity, and fundamental skills.</p>
              <Link to="/programs" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="glass-card program-card">
              <div className="card-icon"><i className="fa-solid fa-book-open"></i></div>
              <h3>Middle School</h3>
              <p>Fostering independence and critical thinking during crucial developmental years.</p>
              <Link to="/programs" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="glass-card program-card">
              <div className="card-icon"><i className="fa-solid fa-user-graduate"></i></div>
              <h3>High School (9th & 10th)</h3>
              <p>Preparing students for board exams and future careers through rigorous academic challenges.</p>
              <Link to="/programs" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="glass-card program-card">
              <div className="card-icon"><i className="fa-solid fa-flask"></i></div>
              <h3>11th & 12th Science</h3>
              <p>Specialized intensive curriculum focusing on Biology, Physics, Mathematics, and Chemistry.</p>
              <Link to="/programs" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="admissions">
        <div className="container">
          <div className="glass-card cta-content">
            <h2>Ready to Shape Your Future?</h2>
            <p>Join the Vision Academy community today. Admissions for the upcoming academic year are now open.</p>
            <Link to="/admissions" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Apply Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
