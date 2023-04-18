import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Products from './pages/Products';
import CakeClass from './pages/CakeClass';
import Recipes from './pages/Recipes';
import { CartContext } from './Hooks/CartContext';
import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Cart from './pages/Cart';

const ITEMS = [
	{
		id: 'djafioasfj',
		name: 'Black Forest',
		price: '38.00',
		img: 'https://media.istockphoto.com/id/803095110/vector/hand-drawn-piece-of-layered-chocolate-cake-with-icing-shavings.jpg?s=612x612&w=0&k=20&c=IX1WTXDjI7NGS-xJYS74_LBpWNMLUzhsTbaIFhswlw8=',
		selected: false,
	},
	{
		id: 'fjsdiofjsofs',
		name: 'Black Forest',
		price: '32.00',
		img: 'https://media.istockphoto.com/id/803095110/vector/hand-drawn-piece-of-layered-chocolate-cake-with-icing-shavings.jpg?s=612x612&w=0&k=20&c=IX1WTXDjI7NGS-xJYS74_LBpWNMLUzhsTbaIFhswlw8=',
		selected: false,
	},
	{
		id: 'fjdsiopfjsojf',
		name: 'Black Forest',
		price: '31.00',
		img: 'https://media.istockphoto.com/id/803095110/vector/hand-drawn-piece-of-layered-chocolate-cake-with-icing-shavings.jpg?s=612x612&w=0&k=20&c=IX1WTXDjI7NGS-xJYS74_LBpWNMLUzhsTbaIFhswlw8=',
		selected: false,
	},
	{
		id: 'vucobuxovcxj',
		name: 'Black Forest',
		price: '38.00',
		img: 'https://media.istockphoto.com/id/803095110/vector/hand-drawn-piece-of-layered-chocolate-cake-with-icing-shavings.jpg?s=612x612&w=0&k=20&c=IX1WTXDjI7NGS-xJYS74_LBpWNMLUzhsTbaIFhswlw8=',
		selected: false,
	},
	{
		id: 'vucobdsuxovcxj',
		name: 'Black Forest',
		price: '38.00',
		img: 'https://media.istockphoto.com/id/803095110/vector/hand-drawn-piece-of-layered-chocolate-cake-with-icing-shavings.jpg?s=612x612&w=0&k=20&c=IX1WTXDjI7NGS-xJYS74_LBpWNMLUzhsTbaIFhswlw8=',
		selected: false,
	},
	{
		id: 'vucobfdsuxovcxj',
		name: 'Black Forest',
		price: '38.00',
		img: 'https://media.istockphoto.com/id/803095110/vector/hand-drawn-piece-of-layered-chocolate-cake-with-icing-shavings.jpg?s=612x612&w=0&k=20&c=IX1WTXDjI7NGS-xJYS74_LBpWNMLUzhsTbaIFhswlw8=',
		selected: false,
	},
];

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [items, setItems] = useState([]);

	const cartValue = useMemo(
		() => ({ cartItems, setCartItems }),
		[cartItems, setCartItems]
	);

	useEffect(() => setItems(ITEMS), []);

	useEffect(() => {
		console.log(items);
	}, [items]);
	return (
		<BrowserRouter>
			<CartContext.Provider value={cartValue}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route
							index
							element={<Products items={items} setItems={setItems} />}
						/>
						<Route path="cake-class" element={<CakeClass />} />
						<Route path="recipes" element={<Recipes />} />
						<Route exact path="cart" element={<Cart />} />
					</Route>
				</Routes>
			</CartContext.Provider>
		</BrowserRouter>
	);
}

export default App;
