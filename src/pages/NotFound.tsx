import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../app/config';
import styles from './styles/NotFound.module.css';

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
	const navigate = useNavigate();

	const handleBackLinkClick = () => {
		navigate(ROUTES.MAIN);
	};

	return (
		<div className={styles['backLabel']}>
			Такая страница не найдена.
			<span className={styles['backBtn']} onClick={handleBackLinkClick}>
				Прыгнуть в портал
			</span>
		</div>
	);
};

export default NotFound;
