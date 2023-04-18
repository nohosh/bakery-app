import { useContext, useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CartContext } from '../Hooks/CartContext';

const Layout = ({ count }) => {
	const { cartItems } = useContext(CartContext);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	function handleResize() {
		setIsMobile(window.innerWidth < 450);
	}
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">
							{!isMobile && (
								<img
									className="img-header"
									src={require('../cupcake.png')}
									alt=" icon"
								/>
							)}
							<div>
								<h5 className="header-tab-title">Products</h5>
								{!isMobile && (
									<p className="header-tab-desc">
										Lorem ipsum dolor sit amet. Et aspernatur praesentium
									</p>
								)}
							</div>
						</Link>
					</li>
					<li>
						<Link to="/cake-class">
							{!isMobile && (
								<img
									className="img-header"
									src={require('../cupcake.png')}
									alt=" icon"
								/>
							)}
							<div>
								<h5 className="header-tab-title">Cake Class</h5>
								{!isMobile && (
									<p className="header-tab-desc">
										Lorem ipsum dolor sit amet. Et aspernatur praesentium
									</p>
								)}
							</div>
						</Link>
					</li>
					<li>
						<Link to="/recipes">
							{!isMobile && (
								<img
									className="img-header"
									src={require('../cupcake.png')}
									alt=" icon"
								/>
							)}
							<div>
								<h5 className="header-tab-title">Recipes</h5>
								{!isMobile && (
									<p className="header-tab-desc">
										Lorem ipsum dolor sit amet. Et aspernatur praesentium
									</p>
								)}
							</div>
						</Link>
					</li>
				</ul>
				<Link to="/cart">
					<div className="cart">
						<img src={require('../cart.png')} alt=" icon" />
						<span>{cartItems.length}</span>
					</div>
				</Link>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
