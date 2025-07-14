import {
	createContext,
	FunctionComponent,
	PropsWithChildren,
	useContext,
	useState,
} from 'react';

interface LoginProviderProps {}

interface LoginContextType {
	user?: string | null;
	signout?: (callback: any) => void;
	signin?: (user: string, callback: () => void) => void;
}

const LoginContext = createContext<LoginContextType>({});

export function useAuth() {
	return useContext(LoginContext);
}

export const LoginProvider: FunctionComponent<
	PropsWithChildren<LoginProviderProps>
> = ({ children }) => {
	const [user, setUser] = useState<string | null>(() => {
		if (localStorage.getItem('user')) {
			return localStorage.getItem('user');
		} else {
			return null;
		}
	});

	const signin = (user: string, callback: () => void) => {
		setUser(user);
		localStorage.setItem('user', user);
		callback();
	};

	const signout = (callback: () => void) => {
		setUser(null);
		localStorage.removeItem('user');
		callback();
	};

	const contextValue = {
		user,
		signin,
		signout,
	};

	return <LoginContext value={contextValue}>{children}</LoginContext>;
};
