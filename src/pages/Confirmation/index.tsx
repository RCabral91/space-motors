import { useLocation } from 'react-router-dom';

import { useVehicles } from 'context/BaseContext';

import OrderByCreditCard from 'components/OrderByCreditCard';
import OrderSuccessfullyCard from 'components/OrderSuccessfullyCard';
import PageTitle from 'components/PageTitle';

import loading from '../../assets/loading.gif';

interface IConfirmationProps {
  activeAction: 'cc' | 'bank';
}

const Confirmation: React.FC = () => {
  const { state } = useLocation();
  const { activeAction } = state as IConfirmationProps;
  const { isLoading } = useVehicles();

  return (
    <div className="bg-secondary flex-grow-1">
      <div className="container">
        {isLoading ? (
          <img className="p-5 m-5" src={loading} alt="Loading" />
        ) : (
          <>
            <PageTitle title="Confirmação" />
            {activeAction === 'cc' ? (
              <OrderByCreditCard />
            ) : (
              <OrderSuccessfullyCard />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
