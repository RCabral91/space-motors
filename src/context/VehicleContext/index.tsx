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
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getVehicle = useCallback(async (name: string): Promise<void> => {
    setErrorMessage(null);
    try {
      setLoading(true);
      const response = await api.get(`/vehicles/${name}`);
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
