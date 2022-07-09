import { useEffect } from 'react';

import { useVehicles } from 'context/BaseContext';

import Card from 'components/Card';
import Pagination from 'components/Pagination';
import { SearchInput } from 'components/SearchInput';

import loading from '../../assets/loading.gif';

const MainPage: React.FC = () => {
  const { vehicles, currentPage, pageCount, isLoading, getVehicles } =
    useVehicles();

  useEffect(() => {
    getVehicles();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchText: string): void => {
    getVehicles(1, searchText);
  };

  const handlePageChange = (event: { selected: number }): Promise<void> =>
    getVehicles(event.selected + 1);

  return (
    <div className="bg-dark">
      <div className="container">
        {isLoading ? (
          <img className="p-5 m-5" src={loading} alt="Loading" />
        ) : (
          <>
            <SearchInput
              onSearch={handleSearch}
              placeholder="Digite o nome ou modelo do veículo"
            />

            <div className="row row-cols-1 my-5 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 text-danger">
              {vehicles?.map((vehicle) => {
                return (
                  <div key={vehicle.name} className="col mt-auto">
                    <Card vehicle={vehicle} />
                  </div>
                );
              })}
            </div>
            {pageCount > 1 && (
              <Pagination
                className="pb-4"
                forcePage={currentPage - 1}
                pageCount={pageCount}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
