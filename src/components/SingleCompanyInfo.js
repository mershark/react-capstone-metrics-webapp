import { NavLink } from 'react-router-dom';
import { FaAngleLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import '../styles/SingleCompanyinfo.css';

const SingleCompanyInfo = () => {
  const { companyInfo } = useSelector((state) => state.companyData);
  if (!companyInfo) {
    return <p className="loading">Loading...</p>;
  }
  const {
    companyName: name,
    ceo,
    sector,
    country,
    image,
    currency,
    city,
    phone,
    website,
  } = companyInfo;

  return (
    <div>
      <div className="company-details">
        <div className="nav-icons">
          <NavLink className="navlink" to="/">
            <FaAngleLeft className="nav-arrow" />
          </NavLink>
          <p className="company-logo">{name}</p>
          <div className="settings-microphone">
            <FaMicrophone className="navcons" />
            <FaCog className="navcons" />
          </div>
        </div>
      </div>
      <div className="company-details-image">
        <img className="logo" src={image} alt="Logo" />
        <p className="company-logos">{name}</p>
      </div>
      <div className="details-infoss">
        <p>STATS BY COMPANY</p>
      </div>
      <div className="company-details-container">
        <div className="details-info">
          <p>Ceo:</p>
          <p>{ceo}</p>
        </div>
        <div className="details-infos">
          <p>Currency:</p>
          <p>{currency}</p>
        </div>
        <div className="details-info">
          <p>Country:</p>
          <p>{country}</p>
        </div>
        <div className="details-infos">
          <p>Sector:</p>
          <p>{sector}</p>
        </div>
        <div className="details-info">
          <p>City:</p>
          <p>{city}</p>
        </div>
        <div className="details-infos">
          <p> Phone:</p>
          <p>{phone}</p>
        </div>
        <div className="details-info">
          <p>Website:</p>
          <a href={website}>{website}</a>
        </div>
      </div>
    </div>
  );
};

export default SingleCompanyInfo;
