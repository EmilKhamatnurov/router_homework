import { FunctionComponent } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../../app/config';
import styles from './Navbar.module.css';
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	const location = useLocation();

	return (
		<>
			<nav className={styles['navigation']}>
				<ul className={styles['navigationLinks']}>
					<li className={styles['navigationLink']}>
						<NavLink
							style={({ isActive }) =>
								isActive ? { color: '#87f11c' } : { color: 'white' }
							}
							to={ROUTES.MAIN}
						>
							Main
						</NavLink>
					</li>
					<li className={styles['navigationLink']}>
						<NavLink
							style={({ isActive }) =>
								isActive ? { color: '#87f11c' } : { color: 'white' }
							}
							to={ROUTES.CHAPTERS}
						>
							Chapters
						</NavLink>
					</li>
					<li className={styles['navigationLink']}>
						<NavLink
							style={({ isActive }) =>
								isActive ? { color: '#87f11c' } : { color: 'white' }
							}
							to={ROUTES.EPISODES}
						>
							Episodes
						</NavLink>
					</li>
					<li className={styles['navigationLink']}>
						<NavLink
							style={({ isActive }) =>
								isActive ? { color: '#87f11c' } : { color: 'white' }
							}
							to={ROUTES.LOCATIONS}
						>
							Locations
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
