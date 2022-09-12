import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import useCep from 'hooks/useCep';

import { AddressType } from '../../@types/Address';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Address: React.FC = () => {
  const { register, watch, setValue } = useForm<AddressType>();
  const { isLoading, isInvalidCep, lastCep, setLastCep, getAddress } =
    useCep(setValue);

  const cepValue = watch('cep');

  useEffect(() => {
    const sanitizedCEP = cepValue?.replaceAll(/\D/g, '');

    if (sanitizedCEP?.length === 8 && cepValue !== lastCep) {
      setLastCep(cepValue);
      getAddress(sanitizedCEP);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cepValue]);

  return (
    <div className="card bg-black p-3">
      <h3 className="text-warning fs-5">Endereço</h3>
      <div className="text-white mt-2">
        <label htmlFor="cep" className="form-label">
          CEP
        </label>

        <InputMask
          type="text"
          {...register('cep')}
          mask="99999-999"
          className="form-control border-secondary bg-secondary"
          required
        />

        {!isLoading && isInvalidCep && 'CEP Inválido'}
      </div>

      <div className="text-white mt-2">
        <label htmlFor="inputAddress" className="form-label">
          Logradouro
        </label>
        <input
          type="text"
          placeholder="logradouro"
          {...register('logradouro')}
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
            type="text"
            placeholder="numero"
            className="form-control border-secondary bg-secondary"
            id="inputEmail4"
            required
          />
        </div>
        <div>
          <label htmlFor="inputZip" className="form-label">
            Complemento
          </label>
          <input
            type="text"
            placeholder="complemento"
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
          {...register('bairro')}
          type="text"
          placeholder="bairro"
          className="form-control bg-secondary border-secondary"
          id="inputAddress"
        />
      </div>
      <div className="text-white mt-2">
        <label htmlFor="inputCity" className="form-label">
          Cidade
        </label>
        <input
          {...register('cidade')}
          type="text"
          placeholder="cidade"
          className="form-control border-secondary bg-secondary"
          id="inputCity"
        />
      </div>
      <div className="text-white mt-2">
        <label htmlFor="inputState" className="form-label">
          Estado
        </label>
        <input
          {...register('estado')}
          type="text"
          placeholder="estado"
          className="form-control border-secondary bg-secondary"
          id="inputState"
        />
      </div>
    </div>
  );
};

export default Address;
