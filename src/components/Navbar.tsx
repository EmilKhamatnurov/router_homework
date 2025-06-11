import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/'>Main</Link>
					</li>
					<li>
						<Link to='/info'>Page Two</Link>
					</li>
					<li>
						<Link to='/categories'>Page Two</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
