import {
	FormEventHandler,
	FunctionComponent,
	useCallback,
	useState,
} from 'react';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';

interface LoginFormProps {
	handleSubmit?: FormEventHandler<HTMLFormElement>;
}

const LoginForm: FunctionComponent<LoginFormProps> = props => {
	const { handleSubmit } = props;
	// States
	const [value, setValue] = useState({
		user: '',
		password: '',
	});

	const handleValueChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
		},
		[]
	);

	return (
		<form className={styles['form']} onSubmit={handleSubmit}>
			<Input
				name='user'
				type='text'
				value={value.user}
				onChange={handleValueChange}
				label='Username'
				radius={5}
				size={38}
				description='Введите имя пользователя'
			/>
			<Input
				name='password'
				type='password'
				value={value.password}
				onChange={handleValueChange}
				label='Password'
				radius={5}
				size={38}
				description='Введите пароль'
			/>
			<button type='submit' className={styles['formButton']}>
				Войти
			</button>
		</form>
	);
};

export default LoginForm;
