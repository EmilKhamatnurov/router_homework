import { FunctionComponent, PropsWithChildren } from 'react';
import styles from './GridArea.module.css';

interface GridAreaProps {}

const GridArea: FunctionComponent<PropsWithChildren<GridAreaProps>> = ({
	children,
}) => {
	return <div className={styles['gridArea']}>{children}</div>;
};

export default GridArea;
