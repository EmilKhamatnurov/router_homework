import { FunctionComponent, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { ROUTES } from './config';

interface AppRoutesProps { }

const Main = lazy(() => import('../pages/Main.tsx'));
const Chapters = lazy(() => import('../pages/Chapters.tsx'));
const Episodes = lazy(() => import('../pages/Episodes.tsx'));
const Locations = lazy(() => import('../pages/Locations.tsx'));
const ItemInfo = lazy(() => import('../components//ItemInfo/ItemInfo.tsx'));

const RouteWrapper = ({ children }) => {
	return (
		<PrivateRoute>
			<Suspense fallback={<div>Loading...</div>}>
				{children}
			</Suspense>
		</PrivateRoute>
	);
};

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
							<RouteWrapper>
								<Main />
							</RouteWrapper>
						}
					/>
					<Route
						path={ROUTES.CHAPTERS}
						element={
							<RouteWrapper>
								<Chapters />
							</RouteWrapper>
						}
					/>
					<Route
						path={ROUTES.CHAPTERS + '/:id'}
						element={
							<RouteWrapper>
								<ItemInfo />
							</RouteWrapper>
						}
					/>

					<Route
						path={ROUTES.EPISODES}
						element={
							<RouteWrapper>
								<Episodes />
							</RouteWrapper>
						}
					/>
					<Route
						path={ROUTES.EPISODES + '/:id'}
						element={
							<RouteWrapper>
								<ItemInfo />
							</RouteWrapper>
						}
					/>

					<Route
						path={ROUTES.LOCATIONS}
						element={
							<RouteWrapper>
								<Locations />
							</RouteWrapper>
						}
					/>
					<Route
						path={ROUTES.LOCATIONS + '/:id'}
						element={
							<RouteWrapper>
								<ItemInfo />
							</RouteWrapper>
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
