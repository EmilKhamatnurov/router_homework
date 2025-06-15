import { FunctionComponent } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import {ROUTES} from '../../app/config';
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {

	const location = useLocation();
	
	return (
		<>
			<nav className={styles['navigation']}>
				<ul className={styles['navigationLinks']}>
					<li className={styles['navigationLink']}>
						<Link to={ROUTES.MAIN}>Main</Link>
					</li>
					<li className={styles['navigationLink']}>
						<Link to={ROUTES.CHARAPTERS}>Charapters</Link>
					</li>
					<li className={styles['navigationLink']}>
						<Link to={ROUTES.EPISODES}>Episodes</Link>
					</li>
					<li className={styles['navigationLink']}> 
						<Link to={ROUTES.LOCATIONS}>Locations</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
