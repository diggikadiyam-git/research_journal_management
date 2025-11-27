// pages/Archive.jsx
import React, { useState } from 'react';
import PaperCard from '../components/PaperCard';

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    year: '',
    subject: '',
    author: ''
  });

  // Mock data for published papers
  const publishedPapers = [
    {
      id: 1,
      title: 'Machine Learning Approaches to Natural Language Processing',
      authors: ['John Doe', 'Jane Smith'],
      abstract: 'This paper explores various machine learning techniques applied to natural language processing tasks, comparing their effectiveness across different domains and datasets.',
      status: 'accepted',
      submissionDate: '2023-05-15',
      publicationDate: '2023-06-20',
      keywords: ['ML', 'NLP', 'AI'],
      doi: '10.1234/rjms.2023.001'
    },
    {
      id: 2,
      title: 'Blockchain Technology for Secure Academic Credential Verification',
      authors: ['John Doe', 'Alan Turing'],
      abstract: 'We propose a blockchain-based system for verifying academic credentials that increases security and reduces fraudulent claims of educational attainment.',
      status: 'accepted',
      submissionDate: '2023-06-22',
      publicationDate: '2023-07-30',
      keywords: ['Blockchain', 'Education', 'Security'],
      doi: '10.1234/rjms.2023.002'
    },
    {
      id: 3,
      title: 'Quantum Computing: Current State and Future Prospects',
      authors: ['John Doe'],
      abstract: 'This comprehensive review examines the current state of quantum computing technology, its potential applications, and the challenges that remain before widespread adoption.',
      status: 'accepted',
      submissionDate: '2023-04-10',
      publicationDate: '2023-05-15',
      keywords: ['Quantum Computing', 'Physics', 'Technology'],
      doi: '10.1234/rjms.2023.003'
    },
    {
      id: 4,
      title: 'Sustainable Energy Solutions for Urban Environments',
      authors: ['John Doe', 'Marie Curie', 'Albert Einstein'],
      abstract: 'Our research evaluates various sustainable energy approaches specifically tailored for high-density urban environments, considering both technical feasibility and economic factors.',
      status: 'accepted',
      submissionDate: '2023-01-30',
      publicationDate: '2023-03-10',
      keywords: ['Energy', 'Sustainability', 'Urban Planning'],
      doi: '10.1234/rjms.2023.004'
    }
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const filteredPapers = publishedPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          paper.authors.some(author => 
                            author.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesYear = !filters.year || paper.publicationDate.startsWith(filters.year);
    const matchesSubject = !filters.subject || 
                          paper.keywords.some(keyword => 
                            keyword.toLowerCase() === filters.subject.toLowerCase());
    const matchesAuthor = !filters.author || 
                         paper.authors.some(author => 
                           author.toLowerCase().includes(filters.author.toLowerCase()));
    
    return matchesSearch && matchesYear && matchesSubject && matchesAuthor;
  });

  return (
    <div className="archive-page">
      <div className="archive-header">
        <div className="container">
          <h1>Journal Archive</h1>
          <p>Browse all published research papers in our journal</p>
        </div>
      </div>

      <div className="archive-content">
        <div className="container">
          <div className="search-filters">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search papers by title, abstract, or author..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            
            <div className="filter-controls">
              <div className="filter-group">
                <label htmlFor="year">Publication Year</label>
                <select
                  id="year"
                  name="year"
                  value={filters.year}
                  onChange={handleFilterChange}
                >
                  <option value="">All Years</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label htmlFor="subject">Subject Area</label>
                <select
                  id="subject"
                  name="subject"
                  value={filters.subject}
                  onChange={handleFilterChange}
                >
                  <option value="">All Subjects</option>
                  <option value="ML">Machine Learning</option>
                  <option value="NLP">Natural Language Processing</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="Quantum Computing">Quantum Computing</option>
                  <option value="Energy">Energy</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  placeholder="Filter by author..."
                  value={filters.author}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          </div>

          <div className="results-info">
            <p>Showing {filteredPapers.length} of {publishedPapers.length} papers</p>
          </div>

          <div className="papers-grid">
            {filteredPapers.length > 0 ? (
              filteredPapers.map(paper => (
                <PaperCard 
                  key={paper.id} 
                  paper={paper} 
                  onAction={() => alert(`View details for ${paper.title}`)}
                  actionText="View Paper"
                />
              ))
            ) : (
              <div className="empty-state">
                <i className="fas fa-search"></i>
                <h3>No papers found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;