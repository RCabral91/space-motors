/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */

// import { useState } from 'react';

const Payment: React.FC = () => {
  // const [showBankSplit, setShowBankSplit] = useState(false);

  return (
    <form className="card bg-black p-3">
      <h3 className="text-warning fs-5">Forma de Pagamento</h3>
      <div className="col">
        <div className="btn btn-warning me-3">Cartão de Crédito</div>

        <button
          className="btn btn-warning"
          type="submit"
          /* onClick={() =>
      setBankSplit(false)
    }  {showBankSplit ? 'show' : ''} */
        >
          Boleto Bancário
        </button>
      </div>
      <div className="col text-white mt-2">
        <label className="form-label">Nome do titular do cartão</label>
        <input
          type="text"
          required
          className="form-control bg-secondary border-secondary"
        />
      </div>
      <div className="col text-white mt-2">
        <label htmlFor="inputAddress" className="form-label">
          Número do cartão
        </label>
        <input
          type="number"
          required
          className="form-control bg-secondary border-secondary"
        />
      </div>
      <div className="col text-white d-flex mt-2">
        <div className="me-3">
          <label htmlFor="inputZip" className="form-label">
            Validade
          </label>
          <input
            type="text"
            required
            className="form-control border-secondary bg-secondary"
          />
        </div>
        <div>
          <label htmlFor="inputZip" className="form-label">
            Código de segurança
          </label>
          <input
            type="number"
            required
            className="form-control border-secondary bg-secondary"
          />
        </div>
      </div>
      <div />
    </form>

    /* <div className="bg-secondary">
    <div className="container">
      {isLoading ? (
        <img className="p-5 m-5" src={loading} alt="Loading" />
      ) : (

        <>   
          <button
            className="btn btn-warning"
            type="submit"
            onClick={() => setShowBankSplit(!showBankSplit)}  
          >
            Boleto Bancário
          </button>

          <PageTitle title="Confirmação" />
          <div className="row" />
          <OrderSuccessfullyCard />
        </>
      )}
    </div>
    </div> */
  );
};

export default Payment;
