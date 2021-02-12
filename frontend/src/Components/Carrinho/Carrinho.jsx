import { Button } from 'react-bootstrap'
import { connect } from 'react-redux';

function Carrinho(props) {

    const { cart } = props;
    const remove = () => {
        const { dispatch } = props;


        dispatch({
            type: 'REMOVE_ALL_CART',

        });
    };


    return (<div>
        <p>Total de itens no carrinho: {cart ? cart.length : 0} </p>
        <Button onClick={remove} variant="danger">Remover itens do carrinho</Button>
    </div>
    )


}

export default connect(state => ({
    cart: state.cart,
}))(Carrinho);