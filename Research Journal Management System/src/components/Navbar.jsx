// components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <i className="fas fa-book-open"></i>
          Research Journal
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/archive">Archive</Link></li>
          {user ? (
            <>
              {user.role === 'author' && (
                <li><Link to="/author-dashboard">Dashboard</Link></li>
              )}
              {user.role === 'editor' && (
                <li><Link to="/editor-dashboard">Dashboard</Link></li>
              )}
              {user.role === 'reviewer' && (
                <li><Link to="/reviewer-dashboard">Dashboard</Link></li>
              )}
              <li className="user-menu">
                <span>Welcome, {user.name}</span>
                <button onClick={logout} className="btn btn-outline">Logout</button>
              </li>
            </>
          ) : (
            <li className="user-actions">
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;