import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemInfo from '../components/ItemInfo/ItemInfo';
import Navbar from '../components/Navbar/Navbar';
import Chapters from '../pages/Chapters';
import Episodes from '../pages/Episodes';
import Locations from '../pages/Locations';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import { ROUTES } from './config';

interface AppRoutesProps {}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path={ROUTES.MAIN} element={<Main />} />
				<Route path={ROUTES.CHAPTERS} element={<Chapters />} />
				<Route path={ROUTES.CHAPTERS + '/:id'} element={<ItemInfo />} />

				<Route path={ROUTES.EPISODES} element={<Episodes />} />
				<Route path={ROUTES.EPISODES + '/:id'} element={<ItemInfo />} />

				<Route path={ROUTES.LOCATIONS} element={<Locations />} />
				<Route path={ROUTES.LOCATIONS + '/:id'} element={<ItemInfo />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
