import { useCallback, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { useVehicles } from 'context/VehicleContext';

import PageTitle from 'components/PageTitle';
import Payment from 'components/Payment';
import PersonalInfo from 'components/PersonalInfo';

import loading from '../../assets/loading.gif';
import Address from '../../components/Address';

const Checkout: React.FC = () => {
  const [activeAction, setActiveAction] = useState<'cc' | 'bank'>('cc');
  const { isLoading, getVehicle } = useVehicles();
  const { name } = useParams();
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = useCallback(() => {
    navigate('/confirmation', { state: { activeAction } });
  }, [activeAction, navigate]);

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row row-cols-1 row-cols-md-1 g-2 row-cols-lg-3 py-3">
                <div className="col">
                  <PersonalInfo />
                </div>
                <div className="col">
                  <Address />
                </div>
                <div className="col">
                  <Payment
                    activeAction={activeAction}
                    setActiveAction={setActiveAction}
                  />
                  <div>
                    <button type="submit" className="btn btn-warning p-3 w-100">
                      Finalizar compra
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
