import { useDispatch, useSelector } from 'react-redux';
import '../styles/bascet.css'
import { useEffect, useState } from 'react';
import { addOneFlowerCount, deleteFlowerInBascet, deleteOneFlowerCount, deleteProductInBascet } from '../store/actions/action_1';

function Bascet() {

    const arrayFlowerForBascet = useSelector(state => state.arrayFlowerForBascet)
    const arrayRelatedProductsForBascet = useSelector(state => state.arrayRelatedProductsForBascet)
    const countProduct = useSelector(state=> state.countProduct)

    const [yourBascet, setYourBascet] = useState('');
    const [yourFlowers, setYourFlowers] = useState('');
    const [yourRelatedProducts, setYourRelatedProducts] = useState('');
    
    const dispatch = useDispatch();

    const addOneProductinComponents = (counts) => {
        if (countProduct < counts) {
            dispatch(addOneFlowerCount())
        }
    }
    const deleteOneProductinComponents = () => {
        if (countProduct > 1) {
            dispatch(deleteOneFlowerCount())
        }
    }

    useEffect(() => {
        if (arrayFlowerForBascet.length === 0 && arrayRelatedProductsForBascet.length === 0) {
            setYourBascet("Корзина пуста, выберите товары из каталогов и вернитесь на эту страницу")
            setYourFlowers("")
            setYourRelatedProducts("")
        }
        else if (arrayFlowerForBascet.length !=0 && arrayRelatedProductsForBascet.length === 0) {
            setYourBascet("Ваша корзина: ")
            setYourFlowers("Выбранные букеты: ")
            setYourRelatedProducts("")
        }
        else if (arrayFlowerForBascet.length === 0 && arrayRelatedProductsForBascet.length != 0) {
            setYourBascet("Ваша корзина:")
            setYourFlowers("")
            setYourRelatedProducts("Выбранные товары:")
        }
        else if (arrayFlowerForBascet.length != 0 && arrayRelatedProductsForBascet != 0) {
            setYourBascet("Ваша корзина: ")
            setYourFlowers("Выбранные букеты:")
            setYourRelatedProducts("Выбранные товары: ")
        }
    }, [arrayFlowerForBascet, arrayRelatedProductsForBascet])

    return(
        <div className="bascet">
            <div className="bascet-first">
                    <h1>{yourBascet}</h1>
            </div>
            <div className="bascet-second">
                <h3>{yourFlowers}</h3>
                {   
                    arrayFlowerForBascet && arrayFlowerForBascet.map(flower =>(
                        <div className='one-element-bascet'>
                            <div className='one-element-bascet-left'>
                                <img src = {flower['URL']} className='flower-in-bascet'/>
                                <p className='text-flower-in-bascet-name'>Наименование: {flower['Наименование']}</p>
                                <p className='text-flower-in-bascet-count'>Количество: {countProduct}</p>
                                <button onClick={() => addOneProductinComponents(flower['Количество'])}>+</button>
                                <button onClick={() => deleteOneProductinComponents()}>-</button>
                                <p className='text-flower-in-bascet-cost'>Цена: {flower['Цена']}</p>
                            </div>
                            <div className='one-element-bascet-right'>
                                <button className = 'button-delete-product' onClick={() => dispatch(deleteFlowerInBascet(flower))}>Удалить</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="bascet-three">
                <h3>{yourRelatedProducts}</h3>
                {   
                    arrayRelatedProductsForBascet && arrayRelatedProductsForBascet.map(product =>(
                        <div className='one-element-bascet'>
                            <div className='one-element-bascet-left'>
                                <img src = {product['URL']} className='flower-in-bascet'/>
                                <p className='text-flower-in-bascet-name'>Наименование: {product['Наименование']}</p>
                                <p className='text-flower-in-bascet-count'>Количество: {product['Количество']}</p>
                                <p className='text-flower-in-bascet-cost'>Цена: {product['Цена']}</p>
                            </div>
                            <div className='one-element-bascet-right'>
                                <button className='button-delete-product' onClick={() => dispatch(deleteProductInBascet(product))}>Удалить</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Bascet;