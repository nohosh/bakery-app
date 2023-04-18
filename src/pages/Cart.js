import { useContext } from 'react';
import { CartContext } from '../Hooks/CartContext';

const Cart = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className="page">
			<h1 className="page-heading">Cart</h1>
			<h5 className="page-heading">
				Total $ {cartItems.reduce((acc, curr) => acc + Number(curr.price), 0)}
			</h5>
			<pre>{JSON.stringify(cartItems, null, 2)}</pre>
		</div>
	);
};

export default Cart;
