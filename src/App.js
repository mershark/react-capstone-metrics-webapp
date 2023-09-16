import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchCompanyData } from './redux/companyDataSlice';
import HomePage from './components/HomePage';
import CompanyInfoPage from './components/CompanyInfoPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanyData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/companyInfo/:symbol" element={<CompanyInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
