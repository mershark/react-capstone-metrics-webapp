import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleCompanyInfo from './SingleCompanyInfo';
import { fetchSingleCompanyInfo } from '../redux/companyDataSlice';

function CompanyInfoPage() {
  const dispatch = useDispatch();
  const { loading, errorMessage } = useSelector((state) => state.companyData);
  const params = useParams();
  const { symbol } = params;

  useEffect(() => {
    dispatch(fetchSingleCompanyInfo(symbol));
  }, [dispatch, symbol]);

  return (
    <div>
      {loading && <p>Loading, please wait!</p>}
      {errorMessage && (
        <p>
          Error:
          {errorMessage}
        </p>
      )}
      {!loading && (
        <SingleCompanyInfo />
      )}
    </div>
  );
}

export default CompanyInfoPage;
