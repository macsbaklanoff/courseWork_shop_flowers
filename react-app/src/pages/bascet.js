import { useDispatch, useSelector } from 'react-redux';
import '../styles/bascet.css'
import { useEffect, useState } from 'react';
import { addOneFlowerCount, addOneProductCount, deleteFlowerInBascet, deleteOneFlowerCount, deleteOneProductCount, deleteProductInBascet } from '../store/actions/action_1';

function Bascet() {

    const arrayFlowerForBascetMap = useSelector(state => state.arrayFlowerForBascet)
    const arrayRelatedProductForBascetMap = useSelector(state => state.arrayRelatedProductsForBascet)

    //const arrayRelatedProductsForBascet = useSelector(state => state.arrayRelatedProductsForBascet)

    //const [arrayFlowerForBascetValues, setarrayFlowerForBascetValues] = useState([]);
    const [arrayFlowerForBascetKeys, setarrayFlowerForBascetKeys] = useState([]);
    const [arrayRelatedProductForBascetKeys, setarrayRelatedProductForBascetKeys] = useState([]);

    const [yourBascet, setYourBascet] = useState('');
    const [yourFlowers, setYourFlowers] = useState('');
    const [yourRelatedProducts, setYourRelatedProducts] = useState('');
    

    const dispatch = useDispatch();
    const addOneFlowerInComponents = (flower) => {
        if (arrayFlowerForBascetMap.get(flower) < flower['Количество']) {
            dispatch(addOneFlowerCount(flower))
            //setarrayFlowerForBascetValues(Array.from(arrayFlowerForBascetMap.values()))
            setarrayFlowerForBascetKeys(Array.from(arrayFlowerForBascetMap.keys()))
        }
    }
    const deleteOneFlowerinComponents = (flower) => {
        if (arrayFlowerForBascetMap.get(flower) > 1) {
            dispatch(deleteOneFlowerCount(flower))
            //setarrayFlowerForBascetValues(Array.from(arrayFlowerForBascetMap.values()))
            setarrayFlowerForBascetKeys(Array.from(arrayFlowerForBascetMap.keys()))
        }
    }

    const addOneRelatedProductInComponents = (product) => {
        if (arrayRelatedProductForBascetMap.get(product) < product['Количество']) {
            dispatch(addOneProductCount(product))
            //setarrayFlowerForBascetValues(Array.from(arrayFlowerForBascetMap.values()))
            setarrayRelatedProductForBascetKeys(Array.from(arrayRelatedProductForBascetMap.keys()))
        }
    }
    const deleteOneRelatedProductInComponents = (product) => {
        if (arrayRelatedProductForBascetMap.get(product) > 1) {
            dispatch(deleteOneProductCount(product))
            //setarrayFlowerForBascetValues(Array.from(arrayFlowerForBascetMap.values()))
            setarrayRelatedProductForBascetKeys(Array.from(arrayRelatedProductForBascetMap.keys()))
        }
    }

    useEffect(() => {
        
    }, [arrayFlowerForBascetKeys, arrayRelatedProductForBascetKeys])


    return(
        <div className="bascet">
            <div className="bascet-first">
                    <h1>{yourBascet}</h1>
            </div>
            <div className="bascet-second">
                <h3>{yourFlowers}</h3>
                {   
                        Array.from(arrayFlowerForBascetMap.keys()).map(flower =>(
                        <div className='one-element-bascet'>
                            <div className='one-element-bascet-left'>
                                <img src = {flower['URL']} className='flower-in-bascet'/>
                                <p className='text-flower-in-bascet-name'>Наименование: {flower['Наименование']}</p>
                                <p className='text-flower-in-bascet-count'>Количество: {arrayFlowerForBascetMap.get(flower)}</p>
                                <button onClick={() => addOneFlowerInComponents(flower)}>+</button>
                                <button onClick={() => deleteOneFlowerinComponents(flower)}>-</button>
                                <p className='text-flower-in-bascet-cost'>Цена: {arrayFlowerForBascetMap.get(flower) * flower['Цена']}</p>
                            </div>
                            <div className='one-element-bascet-right'>
                                <button className = 'button-delete-product' onClick={() => {
                                    dispatch(deleteFlowerInBascet(flower))
                                    setarrayFlowerForBascetKeys(Array.from(arrayFlowerForBascetMap.keys()))
                                    console.log(arrayFlowerForBascetMap)
                                    
                                    }}>Удалить</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="bascet-three">
                <h3>{yourRelatedProducts}</h3>
                {   
                    Array.from(arrayRelatedProductForBascetMap.keys()).map(product =>(
                        <div className='one-element-bascet'>
                            <div className='one-element-bascet-left'>
                                <img src = {product['URL']} className='flower-in-bascet'/>
                                <p className='text-flower-in-bascet-name'>Наименование: {product['Наименование']}</p>
                                <p className='text-flower-in-bascet-count'>Количество: {arrayRelatedProductForBascetMap.get(product)}</p>
                                <button onClick={() => addOneRelatedProductInComponents(product)}>+</button>
                                <button onClick={() => deleteOneRelatedProductInComponents(product)}>-</button>
                                <p className='text-flower-in-bascet-cost'>Цена: {arrayRelatedProductForBascetMap.get(product) * product['Цена']}</p>
                            </div>
                            <div className='one-element-bascet-right'>
                                <button className='button-delete-product' onClick={() => {
                                    dispatch(deleteProductInBascet(product))
                                    setarrayRelatedProductForBascetKeys(Array.from(arrayRelatedProductForBascetMap.keys()))
                                    }}>Удалить</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Bascet;