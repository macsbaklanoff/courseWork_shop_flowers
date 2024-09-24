import '../styles/catalog.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setFlower } from '../store/actions/action_1';
import { containsRelatedProduct } from '../store/reducers/contains_related_products';
import Dropdown from './dropdown';

function CatalogRelatedProduct() {
    
    const [dataRelatedProductsFull, setdataRelatedProductsFull] = useState([])
    const [dataRelatedProducts, setdataRelatedProducts] = useState([])
    const arrayRelatedProductsForBascetMap = useSelector(state => state.arrayRelatedProductsForBascet)

    const [searchString, setsearchString] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3001/getRelatedProducts")
        .then(response => {
            setdataRelatedProductsFull(response.data);
            setdataRelatedProducts(response.data)
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
        }, []);
    useEffect(() => {
        if (searchString.length == 0) {
            setdataRelatedProducts(dataRelatedProductsFull)
        }
        else {
            setdataRelatedProducts(dataRelatedProductsFull.filter(x => x['Наименование'].toLowerCase().includes(searchString.toLowerCase()) || x['Количество'] == searchString))
        }
    }, [searchString])
    const dispatch = useDispatch();

    const changeInputProduct = event => {
        setsearchString(event.target.value);
    }
    
    return (
        <div className='flowers-app'>
            <div className='flowers-app-upper'>
                <div className='flowers-app-upper-left'>
                    <input className='search-in-flowers'
                    type = 'text'
                    placeholder='Поиск по товарам'
                    onChange={changeInputProduct}
                    ></input>
                </div>
                <div className='flowers-app-upper-right'>
                    
                </div>
            </div>
            <div className='main-app-flowers'>
                {
                    dataRelatedProducts && dataRelatedProducts.map(relatedProduct => (
                     <div className='one-flowers'>
                        <img className = 'image-one-flower' src = {relatedProduct['URL']}></img>
                        <p className = 'text-main-name-flower'>{relatedProduct['Наименование']}</p>
                        <p className = 'text-main-name-flower'>Всего: {relatedProduct['Количество']}</p>
                        <p className = "text-main-content-one">{relatedProduct['Цена']}</p>
                        <div className='button' style={
                            {
                                backgroundColor: containsRelatedProduct(arrayRelatedProductsForBascetMap, relatedProduct) ? "#ffc402" : "#AF65AC"
                            }
                        }>
                            <Link to = "/relatedProduct" className = 'button-buy-in-main-content-catalog' onClick={() => dispatch(setFlower(relatedProduct))}>{containsRelatedProduct(arrayRelatedProductsForBascetMap, relatedProduct) ? "В корзине" : "Купить"}</Link>
                        </div>
                     </div>   
                    ))
                }
            </div>
        </div>
    );
}

export default CatalogRelatedProduct;