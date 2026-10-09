import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Programs() {
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

    const animatedElements = document.querySelectorAll('.program-card, .section-header');
    
    animatedElements.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div style={{ paddingTop: '80px' }}></div>
      <section className="programs" id="programs">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Academic <span className="gradient-text">Programs</span></h2>
            <p>Tailored educational pathways designed to foster growth at every stage of development.</p>
          </div>
          
          <div className="programs-grid">
            {/* Program 1 */}
            <div className="glass-card program-card">
              <div className="card-icon">
                <i className="fa-solid fa-child-reaching"></i>
              </div>
              <h3>Primary School</h3>
              <p>Building a strong foundation with an emphasis on curiosity, creativity, and fundamental skills.</p>
              <Link to="/admissions" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            
            {/* Program 2 */}
            <div className="glass-card program-card">
              <div className="card-icon">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <h3>Middle School</h3>
              <p>Fostering independence and critical thinking during crucial developmental years.</p>
              <Link to="/admissions" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            
            {/* Program 3 */}
            <div className="glass-card program-card">
              <div className="card-icon">
                <i className="fa-solid fa-user-graduate"></i>
              </div>
              <h3>High School (9th & 10th)</h3>
              <p>Preparing students for board exams and future careers through rigorous academic challenges.</p>
              <Link to="/admissions" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            
            {/* Program 4 */}
            <div className="glass-card program-card">
              <div className="card-icon">
                <i className="fa-solid fa-flask"></i>
              </div>
              <h3>11th & 12th Science</h3>
              <p>Specialized intensive curriculum focusing on Biology, Physics, Mathematics, and Chemistry.</p>
              <Link to="/admissions" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Educational Approach Section */}
      <section className="educational-approach" style={{ padding: '6rem 0', background: 'linear-gradient(to bottom, var(--bg-primary), rgba(241, 245, 249, 0.8))' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
            <h2>Our <span className="gradient-text">Educational</span> Approach</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto 0' }}>Dedicated to fostering a culture of academic rigor, critical thinking, and lifelong learning.</p>
          </div>
          <div className="approach-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card fade-in" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(59, 130, 246, 0.2))', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-brain" style={{ fontSize: '2rem', color: 'var(--accent-primary)' }}></i>
              </div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.25rem' }}>Analytical Thinking</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our curriculum goes beyond rote memorization, challenging students to analyze information critically and solve complex problems independently.</p>
            </div>
            <div className="glass-card fade-in" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(139, 92, 246, 0.2))', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-graduation-cap" style={{ fontSize: '2rem', color: 'var(--accent-secondary)' }}></i>
              </div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.25rem' }}>Board Exam Excellence</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We provide structured, intensive preparation programs designed to help students achieve top-tier results in their critical board examinations.</p>
            </div>
            <div className="glass-card fade-in" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.2))', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-microscope" style={{ fontSize: '2rem', color: '#10b981' }}></i>
              </div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.25rem' }}>Practical Application</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Students bridge the gap between theory and reality through hands-on academic projects and continuous assessments in science and mathematics.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
