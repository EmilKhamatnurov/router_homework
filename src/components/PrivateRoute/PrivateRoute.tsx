import { FunctionComponent, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/LoginProvider';

interface PrivateRouteProps {}
//@ts-ignore
const PrivateRoute: FunctionComponent<PropsWithChildren<PrivateRouteProps>> = ({
	children,
}) => {
	const auth = useAuth();
	const location = useLocation();

	if (auth.user === '' || auth.user == null) {
		return <Navigate to='/login' state={{ from: location.pathname }} replace />;
	}

	return children;
};

export default PrivateRoute;
