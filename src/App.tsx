import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app/routes';
import { LoginProvider } from './context/LoginProvider';

function App() {
	return (
		<LoginProvider>
			<BrowserRouter>
				<AppRoutes></AppRoutes>
			</BrowserRouter>
		</LoginProvider>
	);
}

export default App;
