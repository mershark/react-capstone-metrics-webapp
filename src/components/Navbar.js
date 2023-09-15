import React from 'react';
import { useDispatch } from 'react-redux';
import { FaAngleLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import { filterItems, setIsSearching } from '../redux/companyDataSlice';
import '../styles/Navbar.css';

function Navbar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setIsSearching(e.target.value));
    dispatch(filterItems(e.target.value));
  };
  return (
    <div className="navbar">
      <div className="nav-icon">
        <div className="nav-date">
          <FaAngleLeft className="nav-arrow" data-testid="nav-arrow" />
          <p>2023</p>
        </div>
        <p className="app-logo">most active</p>
        <div className="set-micro">
          <FaMicrophone className="navcons" data-testid="navcons-microphone" />
          <FaCog className="navcons" data-testid="navcons-cog" />
        </div>
      </div>
      <div className="search">
        <input className="search-bar" onChange={handleChange} type="text" placeholder="Search company name here..." />
      </div>
    </div>
  );
}

export default Navbar;
