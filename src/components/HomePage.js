import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import Navbar from './Navbar';
import '../styles/HomePage.css';

function HomePage() {
  const {
    loading, error, items, filteredItems, isSearching,
  } = useSelector((state) => state.companyData);
  const displayCompanies = isSearching ? filteredItems : items;

  return (
    <section>
      <Navbar />
      <div className="home-page">
        {loading && <p className="loading">Loading, please wait!</p>}
        {error && <p className="error">Error loading data, please try again!</p>}
        {!loading && displayCompanies.length === 0 && <p className="no-match-message">No Match found</p>}
        {displayCompanies.map((company) => (
          <div key={company.symbol}>
            <NavLink to={`/companyInfo/${company.symbol}`}>
              <div className="company">
                <div className="arrow">
                  <FaArrowCircleRight className="arrow-icon" />
                </div>
                <div className="info">
                  <p data-testid="company-name" className="name">{company.name}</p>
                  <p data-testid="company-symbol" className="symbol">{company.symbol}</p>
                  <p data-testid="company-price" className="price">{company.price}</p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
