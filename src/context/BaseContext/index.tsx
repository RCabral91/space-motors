/* eslint-disable camelcase */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import axios from 'axios';

import { VehiclesType } from '../../@types/Vehicles';

interface IVehiclesContextProps {
  vehicle: VehiclesType | null;
  vehicles?: VehiclesType[];
  isLoading: boolean;
  currentPage: number;
  pageCount: number;
  errorMessage: string | null;
  address: string | null;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  getAddress: (cep: string | null) => Promise<void>;
  getVehicle: (name: string) => Promise<void>;
  getVehicles: (page?: number, searchText?: string) => Promise<void>;
}

export const VehiclesContext = createContext<IVehiclesContextProps>(
  {} as IVehiclesContextProps,
);

const api = axios.create({ baseURL: 'http://swapi.dev/api' });

export const VehiclesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [vehicle, setVehicle] = useState<VehiclesType | null>(null);
  const [vehicles, setVehicles] = useState<VehiclesType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState(0);
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getVehicle = useCallback(async (name: string): Promise<void> => {
    setErrorMessage(null);
    try {
      setLoading(true);
      const response = await api.get(`/movies/${name}`);
      setVehicle(response?.data);
      setLoading(false);
    } catch (e) {
      setVehicle(null);
      setErrorMessage('Erro ao Carregar');
    } finally {
      setLoading(false);
    }
  }, []);

  const getVehicles = useCallback(
    async (page = 1, searchText = ''): Promise<void> => {
      const params: {
        search?: string;
        page?: number;
      } = {
        page,
      };
      setLoading(true);
      setCurrentPage(page);

      try {
        if (searchText) {
          params.search = searchText;
        }
        const response = await api.get('/vehicles', { params });

        setVehicles(response.data.results);
        setPageCount(Math.ceil(response.data.count / 10));
      } catch (e) {
        setErrorMessage('Erro ao Carregar');
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const apiCep = axios.create({ baseURL: 'http://viacep.com.br/ws' });

  const getAddress = useCallback(async () => {
    setErrorMessage(null);

    try {
      setLoading(true);
      const { data } = await apiCep.get(`/${cep}/json`);
      const { logradouro, numero, bairro, cidade, uf } = data;

      setAddress(`${logradouro}, ${numero}, ${bairro}, ${cidade}, ${uf}`);
      setStreet(logradouro);
      setNumber(numero);
      setNeighborhood(bairro);
      setCity(cidade);
      setState(uf);
      setCep(cep);
    } catch (e) {
      setAddress('Não foi possível encontrar seu endereço');
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cep]);

  return (
    <VehiclesContext.Provider
      value={useMemo(
        () => ({
          vehicle,
          vehicles,
          isLoading,
          currentPage,
          pageCount,
          errorMessage,
          address,
          street,
          number,
          neighborhood,
          city,
          state,
          setAddress,
          setCep,
          getAddress,
          getVehicle,
          getVehicles,
        }),
        [
          vehicle,
          vehicles,
          isLoading,
          currentPage,
          pageCount,
          errorMessage,
          address,
          street,
          number,
          neighborhood,
          city,
          state,
          setAddress,
          setCep,
          getAddress,
          getVehicle,
          getVehicles,
        ],
      )}
    >
      {children}
    </VehiclesContext.Provider>
  );
};

export const useVehicles = (): IVehiclesContextProps => {
  const context = useContext(VehiclesContext);

  if (!context) {
    throw new Error('useVehicles must be within VehiclesProvider');
  }

  return context;
};
