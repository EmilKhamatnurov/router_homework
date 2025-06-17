import { FunctionComponent } from 'react';
import styles from './Item.module.css';

interface ItemProps {
	item: { id: number; name: string };
	onClick: (item: { id: number; name: string }) => void;
}

const Item: FunctionComponent<ItemProps> = props => {
	const { item, onClick } = props;

	const handleItemClick = () => {
		onClick(item);
	};

	return (
		<div onClick={handleItemClick} className={styles['item']}>
			<p className={styles['itemName']}>{item.name}</p>
		</div>
	);
};

export default Item;
