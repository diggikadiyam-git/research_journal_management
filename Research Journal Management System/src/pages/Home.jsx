// pages/Home.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import useScrollAnimation from '../components/useScrollAnimation';
import '../styles/global.css'; // make sure fade-in CSS is here

const Home = () => {
  const { user } = useContext(AuthContext);

  // Activate scroll animation for fade-in sections
  useScrollAnimation();

  return (
    <div className="home-page">
      <section className="hero fade-in">
        <div className="container">
          <div className="hero-content">
            <h1>Research Journal Management System</h1>
            <p>A comprehensive platform for academic publishing, peer review, and research dissemination</p>
            {!user ? (
              <div className="hero-actions">
                <Link to="/register" className="btn btn-primary btn-large">Get Started</Link>
                <Link to="/login" className="btn btn-outline btn-large">Login</Link>
              </div>
            ) : (
              <div className="hero-actions">
                {user.role === 'author' && (
                  <Link to="/author-dashboard" className="btn btn-primary btn-large">Go to Dashboard</Link>
                )}
                {user.role === 'editor' && (
                  <Link to="/editor-dashboard" className="btn btn-primary btn-large">Go to Dashboard</Link>
                )}
                {user.role === 'reviewer' && (
                  <Link to="/reviewer-dashboard" className="btn btn-primary btn-large">Go to Dashboard</Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="features fade-in">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-upload"></i></div>
              <h3>Easy Submission</h3>
              <p>Submit your research papers through our intuitive submission system with support for multiple file formats.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-search"></i></div>
              <h3>Plagiarism Detection</h3>
              <p>Integrated plagiarism checking to maintain academic integrity and publication standards.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-users"></i></div>
              <h3>Peer Review Management</h3>
              <p>Streamlined peer review process with automated reviewer assignment and tracking.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-history"></i></div>
              <h3>Revision Tracking</h3>
              <p>Keep track of all revisions and feedback throughout the publication process.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-tasks"></i></div>
              <h3>Role-based Dashboards</h3>
              <p>Customized interfaces for authors, editors, and reviewers based on their roles.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-archive"></i></div>
              <h3>Archiving & Preservation</h3>
              <p>Secure archiving of all published research with digital preservation techniques.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats fade-in">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-in">
              <h3>2,500+</h3>
              <p>Published Papers</p>
            </div>
            <div className="stat-item fade-in">
              <h3>1,200+</h3>
              <p>Active Researchers</p>
            </div>
            <div className="stat-item fade-in">
              <h3>350+</h3>
              <p>Reviewers</p>
            </div>
            <div className="stat-item fade-in">
              <h3>98%</h3>
              <p>Author Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
