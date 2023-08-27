// import Loader from 'common/Loader';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import React from 'react';

const CreatePage = React.lazy(() => import('../../Pages/CreatePage/CreatePage'));
const OrderPage = React.lazy(() => import('../../Pages/CreatePage/OrderPage/OrderPage'));
const DeliveryPage = React.lazy(() => import('../../Pages/CreatePage/DeliveryPage/DeliveryPage'));
const RequestsPage = React.lazy(() => import('../../Pages/RequestsPage/RequestsPage'));
const ErrorPage = React.lazy(() => import('../../Pages/404'));

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
      <React.Suspense fallback={null}>
      <Routes>
      <Route path='/' element={<Navigate to="/create" />} />
        <Route path='/create' element={<CreatePage /> } />
        <Route path='/create/order' element={<OrderPage /> } />
        <Route path='/create/delivery' element={<DeliveryPage /> } />
        <Route path='/requests' element={<RequestsPage /> } />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </React.Suspense>
      </main>
    </div>
  );
}

export default App;
