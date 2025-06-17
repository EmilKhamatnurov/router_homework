import { FunctionComponent } from 'react';
import GridArea from '../components/GridArea/GridArea';
import styles from './styles/Main.module.css';
interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
	return (
		<GridArea>
			<div className={styles['mainPage']}>
				<p className={styles['welcomeText']}>
					Добро пожаловать на сайт Рика и Морти!
				</p>
			</div>
		</GridArea>
	);
};

export default Main;
