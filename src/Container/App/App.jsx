import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from '../../Pages/Create/Create';
import Header from '../Header/Header';
import RequestsPage from '../../Pages/RequestsPage/RequestsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/create' element={<Create /> } />
        <Route path='/requests' element={<RequestsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
