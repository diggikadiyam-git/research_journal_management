// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthorDashboard from './pages/AuthorDashboard';
import EditorDashboard from './pages/EditorDashboard';
import ReviewerDashboard from './pages/ReviewerDashboard';
import Archive from './pages/Archive';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './styles/global.css';
import './styles/dashboard.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/author-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['author']}>
                    <AuthorDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/editor-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['editor']}>
                    <EditorDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/reviewer-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['reviewer']}>
                    <ReviewerDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="/archive" element={<Archive />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;