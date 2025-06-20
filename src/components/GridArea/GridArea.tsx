import {
	CSSProperties,
	FunctionComponent,
	PropsWithChildren,
	useMemo,
} from 'react';

import styles from './GridArea.module.css';

interface GridAreaProps {}

const GridArea: FunctionComponent<PropsWithChildren<GridAreaProps>> = ({
	children,
}) => {
	const gridAreaStyles = useMemo<CSSProperties>(() => {
		return {
			// background: `url('../../assets/images/IMG_1050.jpeg')`,
		};
	}, []);

	return (
		<div style={gridAreaStyles} className={styles['gridArea']}>
			{children}
		</div>
	);
};

export default GridArea;
