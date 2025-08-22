import { FunctionComponent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ItemInfo.module.css';

interface ItemInfoProps { }

const ItemInfo: FunctionComponent<ItemInfoProps> = props => {
	const navigate = useNavigate();
	const location = useLocation();
	const information = location.state?.item;
	const filteredFields = location.state?.filteredFields;

	const handleBackLinkClick = () => {
		navigate(-1);
	};

	const renderField = (fieldInfo, index) => {

		return !filteredFields.includes(fieldInfo[0]) && (
			typeof fieldInfo[1] !== 'object' ? (
				<div key={index} className={styles['field']}>
					<p className={styles['fieldName']}>{fieldInfo[0]}:</p>
					<p className={styles['fieldValue']}>{fieldInfo[1]}</p>
				</div>
			) :
				(
					<>
						<div style={{ fontSize: '32px' }}>{fieldInfo[0]}:</div>
						<div style={{ paddingLeft: '15px' }}>
							{Object.entries(fieldInfo[1]).map((field, index: number) => (
								renderField(field, index)
							))}
						</div>
					</>
				)
		);
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
						(field, index: number) => renderField(field, index))}
				</div>
			)}
		</>
	);
};

export default ItemInfo;
