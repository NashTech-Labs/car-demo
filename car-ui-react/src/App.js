import './App.css';
import { ProductsList } from './pages/Products/ProductsList';
import {AllRoutes} from "./routes/AllRoutes";

function App() {
  return (
    <div className='App'>
        <AllRoutes/>
      <ProductsList/>
    </div>
  );
}

export default App;
