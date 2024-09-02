import '../styles/catalog.css';
import pictmain from './katalog-pict.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

function Catalog() {
    
    const [dataFlowers, setDataFlowers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/get")
        .then(response => {
            setDataFlowers(response.data);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
        }, []);
    return (
        <div className='flowers-app'>
            <div className='main-app-flowers'>
                {
                    dataFlowers && dataFlowers.map(flower => (
                     <div className='one-flowers'>
                        {console.log(flower)}
                     </div>   
                    ))
                }
            </div>
        </div>
    );
}

export default Catalog;