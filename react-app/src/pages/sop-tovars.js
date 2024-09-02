
import '../styles/sop-tovars.css';
import bear1 from './bear1.png';
import bear2 from './bear2.png';
import ob1 from './obertk1.png';
import ob2 from './obertk2.png';
import shar1 from './shar1.png';
import shar2 from './shar2.png';

function Tovars() {
    return (
        <>
        <div class = 'main-content'>
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
                <div class = 'main-content-one'>
                <img className = "image-sop-tov" src = {shar2}/>
                    <div class = 'text-main-content-one'>1500 р</div>
                    <button class="button-buy-in-main-content">В корзину</button>
                </div>
                <div class = 'main-content-one'>
                <img className = "image-sop-tov" src = {shar1}/>
                    <div class = 'text-main-content-one'>200 р</div>
                    <button class="button-buy-in-main-content">В корзину</button>
                </div>
                <div class = 'main-content-one'>
                <img className = "image-sop-tov" src = {ob2}/>
                    <div class = 'text-main-content-one'>160 р</div>
                    <button class="button-buy-in-main-content">В корзину</button>
                </div>
                <div class = 'main-content-one'>
                <img className = "image-sop-tov" src = {bear2}/>
                    <div class = 'text-main-content-one'>670 р</div>
                    <button class="button-buy-in-main-content">В корзину</button>
                </div>
                <div class = 'main-content-one'>
                <img className = "image-sop-tov" src = {shar2}/>
                    <div class = 'text-main-content-one'>1250 р</div>
                    <button class="button-buy-in-main-content">В корзину</button>
                </div>
                <div class = 'main-content-one'>
                <img className = "image-sop-tov" src = {ob1}/>
                    <div class = 'text-main-content-one'>100 р</div>
                    <button class="button-buy-in-main-content">В корзину</button>
                </div>
            </div>
            <button className='button-see-all'>
            <a className='see-all'>Показать все</a>
          </button>
          </>
    );
}

export default Tovars;