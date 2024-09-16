import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {Route, Routes, Link} from "react-router-dom";
import productcss from '../styles/product.css';
import { addFlowerInBascet, setFlower } from "../store/actions/action_1";
import { useEffect, useState } from "react";
import { containsFlower } from "../store/reducers/contains_flower";
import { containsRelatedProduct } from "../store/reducers/contains_related_products";


function Product() {
    const [stringInBascet, setStringInBascet] = useState("Добавить в корзину")
    const [dataTableRelatedProductsFull, setdataTableRelatedProductsFull] = useState([])
    const [dataTableRelatedProducts, setdataTableRelatedProducts] = useState([])
    const [countShowProducts, setCountShowProducts] = useState(3);


    const flower = useSelector(state => state.product)
    const arrayFlowerForBascet = useSelector(state => state.arrayFlowerForBascet)
    const dispatch = useDispatch()
    
    const onClickButtonBuy = () => {
        if (!containsFlower(arrayFlowerForBascet, flower)) {
            dispatch(addFlowerInBascet(flower));
            setStringInBascet("В корзине");
        }
    }

    useEffect(() => {
        axios.get("http://localhost:3001/getRelatedProducts")
        .then(response => {
            setdataTableRelatedProductsFull(response.data);
            setdataTableRelatedProducts(response.data.filter((_, index) => index < countShowProducts))//для кнопки показать еще для постепенного показа
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
        console.log(arrayFlowerForBascet)
        if (!containsFlower(arrayFlowerForBascet, flower)) {
            setStringInBascet("Добавить в корзину")
        }
        else {
            setStringInBascet("В корзине")
        }
    }, [])

    useEffect(() => {
        setdataTableRelatedProducts(dataTableRelatedProductsFull.filter((_, index) => index < countShowProducts))
    }, [countShowProducts])

    return(
        <div className = "product">
            <div className = "product-upper">
                <div className = "product-upper-left">
                    <img src = {flower['URL']} className="product-upper-left"></img>
                </div>
                <div className = "product-upper-right">
                    <div className="product-upper-right-upper">
                        <p className="text-product">{flower['Наименование']}</p>
                        <p className="text-product">Количество букетов: {flower['Количество']}</p>
                        <p className="text-product-cost">Цена: {flower['Цена']}</p>
                    </div>
                    <div className = "product-upper-right-lower">
                    <button className="button-buy-product" onClick={onClickButtonBuy}>
                            {stringInBascet}
                        </button>
                    </div>
                </div>
            </div>
            <div className = "product-lower">
                <div className="product-lower-upper"><h1>С этим товаром покупают:</h1></div>
                <div className="product-lower-lower">
                        <div className="mini-catalog-products">
                    {
                        dataTableRelatedProducts && dataTableRelatedProducts.map(product => (
                            <div className="one-product">
                                <img className = 'image-one-product' src = {product['URL']}></img>
                                <p className = 'text-main-name-product'>{product['Наименование']}</p>
                                <p className = 'text-main-name-product'>Кол-во: {product['Количество']}</p>
                                <p className = "text-main-content-one">{product['Цена']}</p>
                                <div className='button'>
                                    <Link to = "/relatedProduct" className = 'button-buy-in-main-content-catalog' onClick={() => dispatch(setFlower(product))}>Купить</Link>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <button onClick={() => setCountShowProducts(countShowProducts + 3)}>Показать еще</button>
                </div>
            </div>
        </div>
    );
}

export default Product;