import { useDispatch, useSelector } from 'react-redux';
import '../styles/bascet.css'
import { useEffect, useState } from 'react';
import { addOneFlowerCount, addOneProductCount, deleteBascet, deleteFlowerInBascet, deleteOneFlowerCount, deleteOneProductCount, deleteProductInBascet } from '../store/actions/action_1';
import { countProductsAll } from './countProducts';
import { costProducts } from './costProducts';
import { orderToBack } from '../orderToBack';

function Bascet() {

    const arrayFlowerForBascetMap = useSelector(state => state.arrayFlowerForBascet)
    const arrayRelatedProductForBascetMap = useSelector(state => state.arrayRelatedProductsForBascet)

    const [arrayFlowerForBascetKeys, setarrayFlowerForBascetKeys] = useState([]);
    const [arrayRelatedProductForBascetKeys, setarrayRelatedProductForBascetKeys] = useState([]);

    const [yourBascet, setYourBascet] = useState('');
    const [yourFlowers, setYourFlowers] = useState('');
    const [yourRelatedProducts, setYourRelatedProducts] = useState('');

    const [showOrder, setShowOrder] = useState(false)
    
    const [methodDelivery, setMethodDelivery] = useState('');
    const [firstNameClient, setFirstNameClient] = useState('');
    const [secondNameClient, setSecondNameClient] = useState('');
    const [threeNameClient, setThreeNameClient] = useState('');
    const [telephone, setTelephone] = useState('');
    const [adressClient, setadressClient] = useState('');



    const dispatch = useDispatch();
    const addOneFlowerInComponents = (flower) => {
        if (arrayFlowerForBascetMap.get(flower) < flower['Количество']) {
            dispatch(addOneFlowerCount(flower))
            setarrayFlowerForBascetKeys(Array.from(arrayFlowerForBascetMap.keys()))
        }
    }
    const deleteOneFlowerinComponents = (flower) => {
        if (arrayFlowerForBascetMap.get(flower) > 1) {
            dispatch(deleteOneFlowerCount(flower))
            setarrayFlowerForBascetKeys(Array.from(arrayFlowerForBascetMap.keys()))
        }
    }

    const addOneRelatedProductInComponents = (product) => {
        if (arrayRelatedProductForBascetMap.get(product) < product['Количество']) {
            dispatch(addOneProductCount(product))
            setarrayRelatedProductForBascetKeys(Array.from(arrayRelatedProductForBascetMap.keys()))
        }
    }
    const deleteOneRelatedProductInComponents = (product) => {
        if (arrayRelatedProductForBascetMap.get(product) > 1) {
            dispatch(deleteOneProductCount(product))
            setarrayRelatedProductForBascetKeys(Array.from(arrayRelatedProductForBascetMap.keys()))
        }
    }

    const handleInputChangeDelivery = (event) => {
        setMethodDelivery(event.target.value)
    }
    const handleInputFirstName = (event) => {
        setFirstNameClient(event.target.value)
    }
    const handleInputSecondName = (event) => {
        setSecondNameClient(event.target.value)
    }
    const handleInputThreeName = (event) => {
        setThreeNameClient(event.target.value)
    }
    const handleInputTelephone = (event) => {
        setTelephone(event.target.value)
    }
    const handleInputAdress = (event) => {
        setadressClient(event.target.value)
    }

    useEffect(() => {
        if (arrayFlowerForBascetMap.size == 0 && arrayRelatedProductForBascetMap.size == 0) {
            setYourBascet("Ваша корзина пуста, выберите что то из каталогов и вернитесь на эту страницу")
            setYourFlowers('')
            setYourRelatedProducts('')
        }
        else if (arrayFlowerForBascetMap.size != 0 && arrayRelatedProductForBascetMap.size != 0) {
            setYourBascet("Ваша корзина")
            setYourFlowers("Выбранные букеты")
            setYourRelatedProducts("Выбранные товары")
        }
        else if (arrayFlowerForBascetMap.size != 0 && arrayRelatedProductForBascetMap.size == 0) {
            setYourBascet("Ваша корзина:")
            setYourFlowers("Выбранные букеты:")
            setYourRelatedProducts("")
        }
        else if (arrayFlowerForBascetMap.size == 0 && arrayRelatedProductForBascetMap.size != 0) {
            setYourBascet("Ваша корзина:")
            setYourFlowers("")
            setYourRelatedProducts("Выбранные товары:")
        }        
        
    }, [arrayFlowerForBascetKeys, arrayRelatedProductForBascetKeys])

    const createOnOrder = () => {
        if (firstNameClient == '' || secondNameClient == '' || threeNameClient == '' || (methodDelivery == 'Доставка по адресу' && adressClient == '')) {
            alert("Проверьте заполненные поля!");
            return;
        }
        console.log(arrayFlowerForBascetMap)
        const objectForBackend = {
            arrayFlowerForBascetMap: [Array.from(arrayFlowerForBascetMap.keys()), Array.from(arrayFlowerForBascetMap.values())],
            arrayRelatedProductForBascetMap: [Array.from(arrayRelatedProductForBascetMap.keys()), Array.from(arrayRelatedProductForBascetMap.values())],
            firstNameClient: firstNameClient,
            secondNameClient: secondNameClient,
            threeNameClient: threeNameClient,
            telephone: telephone,
            adressClient: adressClient != '' ? adressClient : ''
        }
        //dispatch(deleteBascet());
        orderToBack(objectForBackend)
    }

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
            {(arrayFlowerForBascetMap.size || arrayRelatedProductForBascetMap.size) && <div className='bascet-last'>
                        <div>
                            <h2>Итого:</h2>
                         </div>
                        <div className='bascet-last-count'>
                            <h3>Всего товаров:</h3>
                            <h3>
                            {
                                countProductsAll(arrayFlowerForBascetMap, arrayRelatedProductForBascetMap)
                            } шт.
                            </h3>
                        </div>
                        <div className='bascet-last-count'>
                            <h3>Итоговая сумма:</h3>
                            <h3>
                                {
                                    costProducts(arrayFlowerForBascetMap, arrayRelatedProductForBascetMap)
                                } р.
                                
                            </h3>
                        </div>
                </div>
            }
            <div className = 'order'>
                <button onClick={() => {!showOrder ? setShowOrder(true) : setShowOrder(false)}}>Купить</button>
                {showOrder && 
                <div className='div-inputs'>
                    <div className='order-left'>
                        <h4>Фамилия*:</h4>
                        <h4>Имя*:</h4>
                        <h4>Отчество*:</h4>
                        <h4>Телефон*:</h4>
                        <h4>Способ получения*:</h4>
                        {
                            methodDelivery == 'Доставка по адресу' && <h4>Ваш адрес*:</h4>
                        }
                        <datalist id = 'datalist'>
                            <option value = 'Самовывоз'></option>
                            <option value = 'Доставка по адресу'></option>
                        </datalist>
                    </div>
                    <div className='order-right'>
                        <input onChange={handleInputSecondName}></input>
                        <input onChange={handleInputFirstName} className='input-element'></input>
                        <input onChange={handleInputThreeName} className='input-element'></input>
                        <input onChange={handleInputTelephone} className='input-element'></input>
                        <input 
                        list = 'datalist'
                        onChange={handleInputChangeDelivery}                    
                        placeholder='Выбрать'
                        className='input-element'
                        ></input>
                        {
                            (methodDelivery == 'Доставка по адресу')  && <input onChange={handleInputAdress} className='input-element'></input>
                        }
                        {
                            (methodDelivery == 'Доставка по адресу' || methodDelivery == 'Самовывоз') && <button className='create-an-order' onClick={createOnOrder}>Оформить заказ</button>
                        }       
                    </div>
                </div>
                
                }
            </div>
        </div>
    )
}
export default Bascet;