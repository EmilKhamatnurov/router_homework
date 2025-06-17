import { FunctionComponent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ItemInfo.module.css';

interface ItemInfoProps {}

const ItemInfo: FunctionComponent<ItemInfoProps> = props => {
	const navigate = useNavigate();
	const location = useLocation();
	const information = location.state;

	const handleBackLinkClick = () => {
		navigate(-1);
	};

	return (
		<>
			<div className={styles['backLink']} onClick={handleBackLinkClick}>
				Вернуться назад
			</div>
			{information && (
				<div className={styles['informationCard']}>
					{'image' in information && (
						<img
							src={information.image}
							className={styles['image']}
							alt='Картинка'
						/>
					)}

					{Object.entries(information).map(
						(field, index: number) =>
							field[0] !== 'image' && (
								<div key={index} className={styles['field']}>
									<p className={styles['fieldName']}>{field[0]}:</p>
									{/* @ts-ignore */}
									<p className={styles['fieldValue']}>{field[1]}</p>
								</div>
							)
					)}
				</div>
			)}
		</>
	);
};

export default ItemInfo;
