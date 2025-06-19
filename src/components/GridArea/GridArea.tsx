import { FunctionComponent, PropsWithChildren, useMemo } from 'react';
import styles from './GridArea.module.css';
import {useLocation} from 'react-router';
import {ROUTES} from '../../app/config';
interface GridAreaProps {}

const GridArea: FunctionComponent<PropsWithChildren<GridAreaProps>> = ({
	children,
}) => {
	const location = useLocation();

	const gridAreaStyles = useMemo(() => {
		if (
			location.pathname === ROUTES.MAIN ||
			location.pathname.includes(ROUTES.CHAPTERS) ||
			location.pathname.includes(ROUTES.EPISODES) ||
			location.pathname.includes(ROUTES.LOCATIONS)

		) {
			return {
				background: "url('../../assets/images/IMG_1050.jpeg') center center / cover no-repeat",
			}
		}
	}, [location])

	return (
		<div 
			style={gridAreaStyles} 
			className={styles['gridArea']}>
			{children}
		</div>
	);
};

export default GridArea;
