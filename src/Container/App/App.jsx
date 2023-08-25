
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from '../../Pages/Create/Create';
import RequestsList from '../../Pages/RequestsList/RequestsList';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/create' element={<Create /> } />
        <Route path='/requests' element={<RequestsList /> } />
      </Routes>
    </div>
  );
}

export default App;
