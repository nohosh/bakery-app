/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext } from 'react';
import { CartContext } from '../Hooks/CartContext';

const Products = ({ items, setItems }) => {
	const { setCartItems } = useContext(CartContext);

	const handleAdd = useCallback((ITEM) => {
		setItems((prev) =>
			prev.map((item) => {
				return item.id !== ITEM.id ? item : { ...item, selected: true };
			})
		);

		setCartItems((prev) => [...prev, ITEM]);
	}, []);

	const handleDelete = useCallback((ID) => {
		setItems((prev) =>
			prev.map((item) => {
				return item.id !== ID ? item : { ...item, selected: false };
			})
		);
		setCartItems((prev) => {
			const removeIndex = prev.map((item) => item.id).indexOf(ID);
			return prev.splice(removeIndex, 1);
		});
	}, []);

	return (
		<div className="page">
			<h1 className="page-heading">New Products</h1>
			<div className="grid">
				{items.map((item) => (
					<article>
						<img src={item.img} alt=" product pic" />
						<div class="text">
							<h3>{item.name}</h3>
							<h5>${item.price}</h5>
							{item.selected ? (
								<button
									onClick={() => handleDelete(item.id)}
									class="add-to-cart delete-from-cart "
								>
									Delete
								</button>
							) : (
								<button onClick={() => handleAdd(item)} class="add-to-cart">
									Add to cart
								</button>
							)}
						</div>
					</article>
				))}
			</div>
		</div>
	);
};

export default Products;
