import { useVehicles } from 'context/BaseContext';

import OrderSuccessfullyCard from 'components/OrderSuccessfullyCard';
import PageTitle from 'components/PageTitle';

import loading from '../../assets/loading.gif';

const BankSplitConfirmation: React.FC = () => {
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
            <OrderSuccessfullyCard />
          </>
        )}
      </div>
    </div>
  );
};

export default BankSplitConfirmation;
