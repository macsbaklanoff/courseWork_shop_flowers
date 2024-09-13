import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {Route, Routes, Link} from "react-router-dom";
import { addFlowerInBascet, addProductInBascet, inBascet } from "../store/actions/action_1";
import { useEffect, useState } from "react";
import { contains } from "../store/reducers/contains_related_products";
import '../styles/relatedProduct.css'

function RelatedProduct() {
    const [stringInBascet, setStringInBascet] = useState("Добавить в корзину")
    const [dataTableFlowersFull, setdataTableFlowersFull] = useState([])
    const [dataTableFlowers, setdataTableFlowers] = useState([])
    const [countShowProducts, setCountShowProducts] = useState(3)


    const product = useSelector(state => state.product)
    const arrayRelatedProductsForBascet = useSelector(state => state.arrayRelatedProductsForBascet)


    const dispatch = useDispatch()
    
    const onClickButtonBuy = () => {
        if (!contains(arrayRelatedProductsForBascet, product)) {
            dispatch(addProductInBascet(product));
            setStringInBascet("В корзине");
        }
    }

    useEffect(() => {
        axios.get("http://localhost:3001/getFlowers")
        .then(response => {
            setdataTableFlowersFull(response.data);
            setdataTableFlowers(response.data.filter((_, index) => index < countShowProducts))
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });

        if (!contains(arrayRelatedProductsForBascet, product)) {
            setStringInBascet("Добавить в корзину")
        }
        else {
            setStringInBascet("В корзине")
        }
    })

    useEffect (() => {

    }, [countShowProducts])
    
    return(
        <div className = "related-product">
            <div className = "related-product-upper">
                <div className = "related-product-upper-left">
                    <img src = {product['URL']} className="related-product-upper-left"></img>
                </div>
                <div className = "related-product-upper-right">
                    <div className="related-product-upper-right-upper">
                        <p className="related-text-product">{product['Наименование']}</p>
                        <p className="related-text-product">Количество букетов: {product['Количество']}</p>
                        <p className="related-text-product-cost">Цена: {product['Цена']}</p>
                    </div>
                    <div className="related-product-upper-right-lower">
                    <button className="related-button-buy-product" onClick={onClickButtonBuy}>
                            {stringInBascet}
                        </button>
                    </div>
                </div>
            </div>
            <div className = "related-product-lower">
                <div className="related-product-lower-upper"><h1>С этим товаром покупают:</h1></div>
                <div className="related-product-lower-lower">
                        <div className="mini-catalog-related-products">
                    {
                        dataTableFlowers && dataTableFlowers.map(flower => (
                            <div className="one-related-product">
                                <img className = 'image-one-related-product' src = {flower['URL']}></img>
                                <p className = 'related-text-main-name-product'>{flower['Наименование']}</p>
                                <p className = 'related-text-main-name-product'>Кол-во: {flower['Количество']}</p>
                                <p className = "related-text-main-content-one">{flower['Цена']}</p>
                                <div className='button'>
                                    <Link to = "/relatedProduct" className = 'button-buy-in-main-content-catalog'>Купить</Link>
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

export default RelatedProduct;