import '../styles/catalog.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setFlower } from '../store/actions/action_1';

function CatalogRelatedProduct() {
    
    const [dataRelatedProducts, setdataRelatedProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/getRelatedProducts")
        .then(response => {
            setdataRelatedProducts(response.data);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
        }, []);

        const dispatch = useDispatch();

    return (
        <div className='flowers-app'>
            <div className='main-app-flowers'>
                {
                    dataRelatedProducts && dataRelatedProducts.map(relatedProduct => (
                     <div className='one-flowers'>
                        <img className = 'image-one-flower' src = {relatedProduct['URL']}></img>
                        <p className = 'text-main-name-flower'>{relatedProduct['Наименование']}</p>
                        <p className = 'text-main-name-flower'>Кол-во: {relatedProduct['Количество']}</p>
                        <p className = "text-main-content-one">{relatedProduct['Цена']}</p>
                        <div className='button'>
                            <Link to = "/relatedProduct" className = 'button-buy-in-main-content-catalog' onClick={() => dispatch(setFlower(relatedProduct))}>Купить</Link>
                        </div>
                     </div>   
                    ))
                }
            </div>
        </div>
    );
}

export default CatalogRelatedProduct;