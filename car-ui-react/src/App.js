import { Footer } from './components/Layouts/Footer';
import { Header } from './components/Layouts/Header';
import { ProductsList } from './pages/Products/ProductsList';
import { FilterBar } from './pages/Products/components/FilterBar';

function App() {
  return (
    <div className='App'>
      <Header/>
      <ProductsList/>
      <Footer/>
    </div>
  );
}

export default App;
