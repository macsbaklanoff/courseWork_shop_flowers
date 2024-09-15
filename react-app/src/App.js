import {Route, Routes, Link} from "react-router-dom";
import './App.css';
import './styles/header.css';
import './styles/info.css'
import './styles/footer.css'
import backgroundapp from './background-fon1.jpg';
import logo from './rose.png';
import banner from './banner.png'
import Catalog from "./pages/catalog";
import About from "./pages/about";
import CatalogRelatedProduct from "./pages/catalogRelatedProducts";
import Product from "./pages/product";
import Constructor from "./pages/constructor";
import Bascet from "./pages/bascet";
import RelatedProduct from './pages/relatedProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "App-header-left">
          <img className = "logo-header" src = {logo}/>
          <Link to = "/" className = "App-text-header-left">ЦВЕТОК</Link>
        </div>
        <div className = "App-header-right">
            <Link to = "/" className = "text-app-header-right">Каталог</Link>
            <Link to = "/about" className = "text-app-header-right">О нас</Link>
            <Link to = "/catalogRelatedProduct" className = "text-app-header-right">Сопутствующие товары</Link>
            <Link to = '/bascet' className = "text-app-header-right">Корзина</Link>
            <Link to = "/constructor" className = "text-app-header-right">Создать свой букет</Link>
        </div>
      </header>
      <div className = "banner">
          <img className = "banner-image" src = {banner}></img>
          <span className = "text-banner">Доставка по городу за час</span>
        </div>
        <Routes>
          <Route path = "/" element = {<Catalog/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/catalogRelatedProduct" element = {<CatalogRelatedProduct/>}/>
          <Route path = "/constructor" element = {<Constructor/>}/>
          <Route path = "/product" element = {<Product/>}/>
          <Route path = "/bascet" element = {<Bascet/>}/>
          <Route path = "/relatedProduct" element = {<RelatedProduct/>}/>
        </Routes>
        <div className = "info">
                    <button className='button-about-us'>
                        <a>О нас</a>
                    </button>
                    <button className='button-about-us'>
                        <a>Услуги флориста</a>
                    </button>
        </div>
        <footer className="footer">
          <Link to = "/" className = "text-app-header-right">Каталог</Link>
          <Link to = "/about" className = "text-app-header-right">О нас</Link>
          <Link to = "/catalogRelatedProduct" className = "text-app-header-right">Сопутствующие товары</Link>
          <Link to = "/bascet" className = "text-app-header-right">Корзина</Link>
          <Link to = "/constructor" className = "text-app-header-right">Создать свой букет</Link>
        </footer>
    </div>
  );
}

export default App;
