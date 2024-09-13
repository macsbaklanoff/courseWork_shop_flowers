import '../styles/catalog.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setFlower } from '../store/actions/action_1';

function Catalog() {
    
    const [dataFlowers, setDataFlowers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/getFlowers")
        .then(response => {
            setDataFlowers(response.data);
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
                    dataFlowers && dataFlowers.map(flower => (
                     <div className='one-flowers'>
                        <img className = 'image-one-flower' src = {flower['URL']}></img>
                        <p className = 'text-main-name-flower'>{flower['Наименование']}</p>
                        <p className = 'text-main-name-flower'>Кол-во: {flower['Количество']}</p>
                        <p className = "text-main-content-one">{flower['Цена']}</p>
                        <div className='button'>
                            <Link to = "/product" className = 'button-buy-in-main-content-catalog' onClick={() => dispatch(setFlower(flower))}>Купить</Link>
                        </div>
                     </div>   
                    ))
                }
            </div>
        </div>
    );
}

export default Catalog;