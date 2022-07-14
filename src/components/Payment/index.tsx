import { useCallback } from 'react';

interface IPaymentProps {
  activeAction: 'cc' | 'bank';
  setActiveAction: React.Dispatch<React.SetStateAction<'cc' | 'bank'>>;
}

const Payment: React.FC<IPaymentProps> = ({
  activeAction,
  setActiveAction,
}) => {
  const createClass = useCallback(
    (value: string) => {
      const buttonType = activeAction === value ? 'warning' : 'light';
      return `h-100 w-100 btn btn-block btn-${buttonType}`;
    },
    [activeAction],
  );

  return (
    <div className="card bg-black p-3">
      <h3 className="text-warning fs-5">Forma de Pagamento</h3>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className={createClass('cc')}
            onClick={() => setActiveAction('cc')}
          >
            Cartão de Crédito
          </button>
        </div>
        <div className="col">
          <button
            className={createClass('bank')}
            type="button"
            onClick={() => setActiveAction('bank')}
          >
            Boleto Bancário
          </button>
        </div>
      </div>
      {activeAction === 'cc' && (
        <>
          <div className="text-white mt-2">
            <label htmlFor="card-holder" className="form-label">
              Nome do titular do cartão
              <input
                name="card-holder"
                type="text"
                className="form-control bg-secondary border-secondary"
              />
            </label>
          </div>
          <div className="text-white mt-2">
            <label htmlFor="card-number" className="form-label">
              Número do cartão
              <input
                name="card-number"
                type="number"
                className="form-control bg-secondary border-secondary"
              />
            </label>
          </div>
          <div className=" w-50 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 text-white mt-2">
            <div className="me-3">
              <label htmlFor="expiration" className="form-label">
                Validade
                <input
                  name="expiration"
                  type="text"
                  maxLength={5}
                  placeholder="MM/AA"
                  className="form-control border-secondary bg-secondary"
                />
              </label>
            </div>
            <div className="mt-2">
              <label htmlFor="safe-code" className="form-label">
                Código de segurança
                <input
                  name="safe-code"
                  type="number"
                  maxLength={3}
                  className="form-control border-secondary bg-secondary"
                />
              </label>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
