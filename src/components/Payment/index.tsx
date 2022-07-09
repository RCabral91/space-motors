import { useCallback } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/label-has-associated-control */

type FormDataType = {
  email: string;
};

const Payment: React.FC = () => {
  const { handleSubmit } = useForm<FormDataType>();

  const onSubmit = useCallback((data: FormDataType) => {
    login(data.email);
  }, []);

  return (
    <form className="col card bg-black p-3">
      onSubmit={handleSubmit(onSubmit)}
      <h3 className="text-warning fs-5">Forma de Pagamento</h3>
      <div className="col">
        <button type="submit" className="btn btn-warning me-3">
          Cartão de Crédito
        </button>
        <Link to="/banksplitconfirmation">
          <button type="submit" className="btn btn-warning">
            Boleto Bancário
          </button>
        </Link>
      </div>
      <div className="col text-white mt-2">
        <label htmlFor="inputAddress" className="form-label">
          Nome do titular do cartão
        </label>
        <input
          type="text"
          className="form-control bg-secondary border-secondary"
          id="inputAddress"
          required
        />
      </div>
      <div className="col text-white mt-2">
        <label htmlFor="inputAddress" className="form-label">
          Número do cartão
        </label>
        <input
          type="number"
          className="form-control bg-secondary border-secondary"
          id="inputAddress"
          required
        />
      </div>
      <div className="col text-white d-flex mt-2">
        <div className="me-3">
          <label htmlFor="inputZip" className="form-label">
            Validade
          </label>
          <input
            type="email"
            className="form-control border-secondary bg-secondary"
            id="inputEmail4"
            required
          />
        </div>
        <div>
          <label htmlFor="inputZip" className="form-label">
            Código de segurança
          </label>
          <input
            type="email"
            className="form-control border-secondary bg-secondary"
            id="inputEmail4"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default Payment;
