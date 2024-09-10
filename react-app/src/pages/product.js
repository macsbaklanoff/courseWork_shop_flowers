import { useSelector } from "react-redux";
import {Route, Routes, Link} from "react-router-dom";
import '../styles/product.css';

function Product() {
    const flower = useSelector(state => state)

    return(
        <div className = "product">
            <div className = "product-upper">
                <div className = "product-upper-left">
                    <img src = {flower['URL']} className="product-upper-left"></img>
                </div>
                <div className = "product-upper-right">
                    <div className="product-upper-right-upper">
                        <p>{flower['Наименование']}</p>
                        <p>Количество букетов: {flower['Количество']}</p>
                        <p>Цена одного букета: {flower['Цена']}</p>
                    </div>
                    <div className="product-upper-right-lower">
                        <Link to = "/korzina" className = 'button-buy-product'>Купить</Link>
                    </div>
                </div>
            </div>
            <div className = "product-lower"></div>
        </div>
    );
}

export default Product;