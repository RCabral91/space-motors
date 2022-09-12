import { useCallback, useMemo, useState } from 'react';

import axios from 'axios';
import { UseFormSetValue } from 'react-hook-form';

import { AddressType } from '../@types/Address';

type CepHookType = (setValue: UseFormSetValue<AddressType>) => {
  isLoading: boolean;
  isInvalidCep: boolean;
  lastCep: string;
  setLastCep: React.Dispatch<React.SetStateAction<string>>;
  getAddress: (cep: string) => Promise<void>;
};

const useCep: CepHookType = (setValue) => {
  const [isInvalidCep, setInvalidCep] = useState(false);
  const [lastCep, setLastCep] = useState('');
  const [isLoading, setLoading] = useState(true);
  const apiCep = axios.create({ baseURL: 'http://viacep.com.br/ws' });

  const getAddress = useCallback(
    async (cep: string) => {
      try {
        setInvalidCep(false);
        setLoading(true);
        const { data } = await apiCep.get(`/${cep}/json`);

        setValue('logradouro', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('estado', data.uf);

        if (data.erro) {
          setInvalidCep(true);
        }
        setLoading(false);
      } catch (e) {
        setInvalidCep(isInvalidCep);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue],
  );

  return useMemo(
    () => ({
      isLoading,
      isInvalidCep,
      lastCep,
      setLastCep,
      getAddress,
    }),
    [isLoading, isInvalidCep, lastCep, setLastCep, getAddress],
  );
};

export default useCep;
