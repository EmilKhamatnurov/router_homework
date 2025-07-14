import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemInfo from '../components/ItemInfo/ItemInfo';
import Navbar from '../components/Navbar/Navbar';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Chapters from '../pages/Chapters';
import Episodes from '../pages/Episodes';
import Locations from '../pages/Locations';
import Login from '../pages/Login';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import { ROUTES } from './config';

interface AppRoutesProps {}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
	return (
		<>
			<Routes>
				<Route
					element={
						<PrivateRoute>
							<Navbar />
						</PrivateRoute>
					}
				>
					<Route
						path={ROUTES.MAIN}
						element={
							<PrivateRoute>
								<Main />
							</PrivateRoute>
						}
					/>
					<Route
						path={ROUTES.CHAPTERS}
						element={
							<PrivateRoute>
								<Chapters />
							</PrivateRoute>
						}
					/>
					<Route
						path={ROUTES.CHAPTERS + '/:id'}
						element={
							<PrivateRoute>
								<ItemInfo />
							</PrivateRoute>
						}
					/>

					<Route
						path={ROUTES.EPISODES}
						element={
							<PrivateRoute>
								<Episodes />
							</PrivateRoute>
						}
					/>
					<Route
						path={ROUTES.EPISODES + '/:id'}
						element={
							<PrivateRoute>
								<ItemInfo />
							</PrivateRoute>
						}
					/>

					<Route
						path={ROUTES.LOCATIONS}
						element={
							<PrivateRoute>
								<Locations />
							</PrivateRoute>
						}
					/>
					<Route
						path={ROUTES.LOCATIONS + '/:id'}
						element={
							<PrivateRoute>
								<ItemInfo />
							</PrivateRoute>
						}
					/>

					<Route path='*' element={<NotFound />} />
				</Route>
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
