import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/LoginProvider';

interface LoginStatusProps {}

export const LoginStatus: FunctionComponent<LoginStatusProps> = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	const handleSignout = () => {
		if (auth.signout) {
			auth.signout(() => {
				navigate('/login');
			});
		}
	};

	if (auth.user === null || auth.user === undefined) {
		return <p>You are not login</p>;
	}
	return (
		<>
			<p>Welcome user {auth.user}</p>
			<button onClick={handleSignout}>Sign out</button>
		</>
	);
};
