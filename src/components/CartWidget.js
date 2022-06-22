import './CartWidget.css'
import carro from "../assets/carro.svg"

function CartWidget() {
    return(
        <div>
            <img src={carro} className='cart' alt="Carro"/>
        </div>
    );
}

export default CartWidget;