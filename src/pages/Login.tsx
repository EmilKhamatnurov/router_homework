import { FunctionComponent, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import { useAuth } from '../context/LoginProvider';
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary';
import styles from './styles/Login.module.css';

interface LoginProps { }

const Login: FunctionComponent<LoginProps> = () => {
	const auth = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from || '/';

	const handleSubmit = useCallback(
		(event: any) => {
			event.preventDefault();
			const username = event.target.elements.user.value;
			console.log('username###', username);

			if (auth.signin) {
				auth.signin(username, () => {
					navigate(from, { replace: true });
				});
			}
		},
		[auth, from, navigate]
	);

	return (
		<div className={styles['loginPage']}>
			<p className={styles['loginPageTitle']}>Авторизация пользователя</p>
			<ErrorBoundary>
				<LoginForm handleSubmit={handleSubmit} />
			</ErrorBoundary>
		</div>
	);
};

export default Login;
