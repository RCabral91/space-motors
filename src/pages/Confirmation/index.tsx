import { useVehicles } from 'context/BaseContext';

import OrderByCreditCard from 'components/OrderByCreditCard';
import PageTitle from 'components/PageTitle';

import loading from '../../assets/loading.gif';

const Confirmation: React.FC = () => {
  const { isLoading } = useVehicles();

  return (
    <div className="bg-secondary">
      <div className="container">
        {isLoading ? (
          <img className="p-5 m-5" src={loading} alt="Loading" />
        ) : (
          <>
            <PageTitle title="Confirmação" />
            <div className="row" />
            <OrderByCreditCard />
          </>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
