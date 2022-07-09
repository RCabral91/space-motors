import { useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

import { useVehicles } from 'context/BaseContext';

import Address from 'components/Address';
import PageTitle from 'components/PageTitle';
import Payment from 'components/Payment';
import PersonalInfo from 'components/PersonalInfo';

import loading from '../../assets/loading.gif';

const Checkout: React.FC = () => {
  const { isLoading, getVehicle } = useVehicles();
  const { name } = useParams();

  useEffect(() => {
    getVehicle(name ?? '');
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-dark">
      <div className="container">
        {isLoading ? (
          <img className="p-5 m-5" src={loading} alt="Loading" />
        ) : (
          <>
            <PageTitle title="Checkout" />
            <div className="row row-cols-1 row-cols-sm-0 row-cols-md-1 row-cols-lg-1 row-cols-xl-12 py-3">
              <div className="col d-flex">
                <div className="col">
                  <PersonalInfo />
                </div>
                <div className="col mx-3">
                  <Address />
                </div>
                <div className="col">
                  <Payment />
                  <div>
                    <Link to="/confirmation">
                      <button type="submit" className="btn btn-warning w-100">
                        Finalizar compra
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
