import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Main from '../pages/Main';
import Charapters from '../pages/Charapters';
import Episodes from '../pages/Episodes';
import NotFound from '../pages/NotFound';
import Locations from '../pages/Locations';
import {ROUTES} from './config'

interface AppRoutesProps {}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path={ROUTES.MAIN} element={<Main />} />
				<Route path={ROUTES.CHARAPTERS} element={<Charapters />} />
				<Route path={ROUTES.EPISODES} element={<Episodes />} />
				<Route path={ROUTES.LOCATIONS} element={<Locations />} />
				<Route path={"/*"} element={<NotFound />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
