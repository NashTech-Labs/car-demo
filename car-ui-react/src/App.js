import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import { ProductsList } from './pages/Products/ProductsList';
import {AllRoutes} from "./routes/AllRoutes";

function App() {
  return (
      <Router>
            <div className='App'>
                <AllRoutes/>
            </div>
      </Router>
  );
}

export default App;
