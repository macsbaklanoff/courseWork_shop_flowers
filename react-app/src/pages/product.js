import flowers from './4.jpg';

function Product() {
    return(
        <div className = "product">
            <div className = "product-upper">
                <div className = "product-upper-left">
                    <img src = {flowers}/>
                </div>
                <div className = "product-upper-right"></div>
            </div>
            <div className = "product-lower"></div>
        </div>
    );
}

export default Product;