import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import SubHeader from 'components/SubHeader';

import BankSplitConfirmation from 'pages/BankSplitConfirmation';
import Checkout from 'pages/Checkout';
import Confirmation from 'pages/Confirmation';
import Home from 'pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <SubHeader />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/:name" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route
          path="/banksplitconfirmation"
          element={<BankSplitConfirmation />}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
