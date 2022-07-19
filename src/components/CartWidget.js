import './CartWidget.css'
import carro from "../assets/carro.svg"
import { Link } from 'react-router-dom';

function CartWidget() {
    return(
        <div>
            <Link to='/cart'><img src={carro} className='cart' alt="Carro"/></Link>
        </div>
    );
}

export default CartWidget;