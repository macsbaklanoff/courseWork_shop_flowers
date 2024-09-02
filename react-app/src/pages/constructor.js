import '../styles/constructor.css';
import bear1 from './bear1.png';
import bear2 from './bear2.png';
import ob1 from './obertk1.png';
import shar2 from './shar2.png';

function Constructor() {
    return(
        <div className = "constructor">
            <div className="constructor-header">
                <span className = "constructor-header-text-h">Конструктор букета</span>
            </div>
            <div className="constructor-senior">
                <div className = "constructor-senior-left">
                <span className = "constructor-header-text">Цветы:</span>
                <span className = "constructor-header-text">Кол-во:</span>
                <span className = "constructor-header-text">Лента:</span>
                <span className = "constructor-header-text">Упаковка:</span>
                </div>
                <div className = "constructor-senior-right">
                <div className = "constructor-senior-right-div">Красные розы</div>
                <div className = "constructor-senior-right-div">11 шт</div>
                <div className = "constructor-senior-right-div">Зеленая</div>
                <div className = "constructor-senior-right-div">Прозрачная</div>
                </div>
            </div>
            <div className="constructor-middle">
                <button className = "buy-constr-middle">Купить</button>
                <button className = "soptov-constr-middle">Сопутствующие товары</button>
            </div>
            <div className="constructor-junior">
            <div class = 'main-content-one'>
                    <img className = "image-sop-tov" src = {bear1}/>
                    <div class = 'text-main-content-one'>800 р</div>
                    <button class="button-buy-in-main-content">В корзину</button>
                </div>
                <div class = 'main-content-one'>
                <img className = "image-sop-tov" src = {bear2}/>
                    <div class = 'text-main-content-one'>500 р</div>
                    <button class="button-buy-in-main-content">В корзину</button>
                </div>
                <div class = 'main-content-one'>
                <img className = "image-sop-tov" src = {ob1}/>
                    <div class = 'text-main-content-one'>700 р</div>
                    <button class="button-buy-in-main-content">В корзину</button>
                </div>
                
            </div>
        </div>
    );
}
export default Constructor;