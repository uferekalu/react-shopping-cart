import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import ProductsContextProvider from './contexts/ProductsContext';
import Routes from './routes/routes';

function App() {
  return (
      <ProductsContextProvider>
        <Routes />
      </ProductsContextProvider>
  );
}

export default App;
