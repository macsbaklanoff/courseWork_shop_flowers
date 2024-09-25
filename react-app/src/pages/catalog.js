import '../styles/catalog.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setFlower } from '../store/actions/action_1';
import { containsFlower } from '../store/reducers/contains_flower';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { hover } from '@testing-library/user-event/dist/hover';

function Catalog() {
    
    const [dataFlowersFull, setDataFlowersFull] = useState([])
    const [dataFlowers, setDataFlowers] = useState([])
    const arrayFlowerForBascetMap = useSelector(state => state.arrayFlowerForBascet)

    const [searchString, setsearchString] = useState('');


    useEffect(() => {
        axios.get("http://localhost:3001/getFlowers")
        .then(response => {
            setDataFlowersFull(response.data);
            setDataFlowers(response.data)
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
        }, []);
    useEffect(() => {
        if (searchString.length == 0) {
            setDataFlowers(dataFlowersFull)
        }
        else {
            setDataFlowers(dataFlowersFull.filter(x => x['Наименование'].toLowerCase().includes(searchString.toLowerCase()) || x['Количество'] == searchString))
        }

    }, [searchString])
    const dispatch = useDispatch();

    const changeInputFlower = event => {
        setsearchString(event.target.value)
    }

    return (
        <div className='flowers-app'>
            <div className='flowers-app-upper'>
                <input className='search-in-flowers'
                type = 'text'
                placeholder='Поиск по товарам'
                onChange={changeInputFlower}
                ></input>
            </div>
            <div className='main-app-flowers'>
                {   
                    dataFlowers && dataFlowers.map(flower => (
                     <div className='one-flowers'>
                        <img className = 'image-one-flower' src = {flower['URL']}></img>
                        <p className = 'text-main-name-flower'>{flower['Наименование']}</p>
                        <p className = 'text-main-name-flower'>Всего: {flower['Количество']}</p>
                        <p className = "text-main-content-one">{flower['Цена']}</p>
                        <div className='button' style={
                            {
                                backgroundColor: containsFlower(arrayFlowerForBascetMap, flower) ? "#ffc402" : "#AF65AC"
                                
                            }
                        }>
                            <Link to = "/product" className = 'button-buy-in-main-content-catalog' onClick={() => {dispatch(setFlower(flower))}}>{containsFlower(arrayFlowerForBascetMap, flower) ? 'В корзине' : "Купить"}</Link>
                        </div>
                     </div>   
                    ))
                
                }
                    
            </div>
        </div>
    );
}

export default Catalog;