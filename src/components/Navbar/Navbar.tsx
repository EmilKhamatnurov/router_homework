import { FunctionComponent } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ROUTES } from '../../app/config';
import { LoginStatus } from '../LoginStatus/LoginStatus';
import styles from './Navbar.module.css';
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
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
					<li>
						<LoginStatus />
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Navbar;
