import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

import Checkout from 'pages/Checkout';
import Confirmation from 'pages/Confirmation';
import Home from 'pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="d-flex flex-grow-1">
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/:name" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
