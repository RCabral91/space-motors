import { useVehicles } from 'context/BaseContext';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Address: React.FC = () => {
  const { isLoading, cep, setCep, getAddress } = useVehicles();

  return (
    <div className="card bg-black p-3">
      <h3 className="text-warning fs-5">Endereço</h3>
      <div className="text-white mt-2">
        <label htmlFor="inputZip" className="form-label">
          CEP
        </label>

        <input
          name="cep"
          type="number"
          id="cep"
          value={cep}
          maxLength={9}
          className="form-control border-secondary bg-secondary"
          onChange={(event) => setCep(event.target.value)}
          required
        />
        <button className="btn text-muted" type="button" onClick={getAddress}>
          <small>Pesquisar CEP</small>
        </button>
        {/* <div>{isLoading ? 'Loading' : address}</div> */}
      </div>

      <div className="text-white mt-2">
        <label htmlFor="inputAddress" className="form-label">
          Logradouro
        </label>
        <input
          type="text"
          name="street"
          className="form-control bg-secondary border-secondary"
          id="inputAddress"
        />
      </div>
      <div className="text-white d-flex mt-2">
        <div className="me-3">
          <label htmlFor="inputZip" className="form-label">
            Número
          </label>
          <input
            name="number"
            type="number"
            className="form-control border-secondary bg-secondary"
            id="inputEmail4"
          />
        </div>
        <div>
          <label htmlFor="inputZip" className="form-label">
            Complemento
          </label>
          <input
            name="complement"
            type="text"
            className="form-control border-secondary bg-secondary"
            id="inputEmail4"
          />
        </div>
      </div>
      <div className="text-white mt-2">
        <label htmlFor="inputAddress" className="form-label">
          Bairro
        </label>
        <input
          name="neighborhood"
          type="text"
          className="form-control bg-secondary border-secondary"
          id="inputAddress"
        />
      </div>
      <div className="text-white mt-2">
        <label htmlFor="inputCity" className="form-label">
          Cidade
        </label>
        <input
          name="city"
          type="text"
          className="form-control border-secondary bg-secondary"
          id="inputCity"
        />
      </div>
      <div className="text-white mt-2">
        <label htmlFor="inputState" className="form-label">
          Estado
        </label>
        <input
          name="state"
          type="text"
          className="form-control border-secondary bg-secondary"
          id="inputState"
        />
      </div>
    </div>
  );
};

export default Address;
