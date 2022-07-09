/* eslint-disable jsx-a11y/label-has-associated-control */
const Address: React.FC = () => {
  return (
    <div className="col card bg-black p-3">
      <h3 className="text-warning fs-5">Endereço</h3>
      <div className="col-md-6 text-white mt-2">
        <label htmlFor="inputZip" className="form-label">
          CEP
        </label>

        <input
          type="text"
          className="form-control border-secondary bg-secondary"
          required
        />
      </div>

      <div className="col text-white mt-2">
        <label htmlFor="inputAddress" className="form-label">
          Logradouro
        </label>
        <input
          type="text"
          className="form-control bg-secondary border-secondary"
          id="inputAddress"
        />
      </div>
      <div className="col text-white d-flex mt-2">
        <div className="me-3">
          <label htmlFor="inputZip" className="form-label">
            Número
          </label>
          <input
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
            type="text"
            className="form-control border-secondary bg-secondary"
            id="inputEmail4"
          />
        </div>
      </div>
      <div className="col text-white mt-2">
        <label htmlFor="inputAddress" className="form-label">
          Bairro
        </label>
        <input
          type="text"
          className="form-control bg-secondary border-secondary"
          id="inputAddress"
        />
      </div>
      <div className="col text-white mt-2">
        <label htmlFor="inputCity" className="form-label">
          Cidade
        </label>
        <input
          type="text"
          className="form-control border-secondary bg-secondary"
          id="inputCity"
        />
      </div>
      <div className="col text-white mt-2">
        <label htmlFor="inputState" className="form-label">
          Estado
        </label>
        <input
          type="text"
          className="form-control border-secondary bg-secondary"
          id="inputState"
        />
      </div>
    </div>
  );
};

export default Address;
