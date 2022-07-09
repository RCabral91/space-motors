// import GlobalStyle from 'styles/global';

import { VehiclesProvider } from 'context/BaseContext';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <>
      <VehiclesProvider>
        <Routes />
      </VehiclesProvider>
      {/* <GlobalStyle /> */}
    </>
  );
};

export default App;
