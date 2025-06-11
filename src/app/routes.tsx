import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Categories from '../pages/Categories';
import Info from '../pages/Info';
import Main from '../pages/Main';
import { ROUTES } from './config';

interface AppRoutesProps {}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path={ROUTES.MAIN} element={<Main />} />
				<Route path={ROUTES.INFO} element={<Info />} />
				<Route path={ROUTES.CATEGORIES} element={<Categories />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
