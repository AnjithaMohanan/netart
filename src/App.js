
import './App.css';
import Navbar from './components/Navbar';
import Description from './components/description/Description';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
import Segments from './components/products_seg/Segments';

function App() {
  return (
    <div className="App" style={{ backgroundImage: 'linear-gradient(to bottom, #ffffff, #ffffcc)' }}>
      <Navbar/>
      <Description/>
      <Product/>
      <Segments/>
      <Footer/>
      
    </div>
  );
}

export default App;
