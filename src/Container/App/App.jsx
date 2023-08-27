import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import CreatePage from '../../Pages/CreatePage/CreatePage';
import OrderPage from '../../Pages/CreatePage/OrderPage/OrderPage';
import DeliveryPage from '../../Pages/CreatePage/DeliveryPage/DeliveryPage';
import Header from '../Header/Header';
import RequestsPage from '../../Pages/RequestsPage/RequestsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
      <Route path='/' element={<Navigate to="/create" />} />
        <Route path='/create' element={<CreatePage /> } />
        <Route path='/create/order' element={<OrderPage /> } />
        <Route path='/create/delivery' element={<DeliveryPage /> } />
        <Route path='/requests' element={<RequestsPage /> } />
      </Routes>
      </main>
    </div>
  );
}

export default App;
