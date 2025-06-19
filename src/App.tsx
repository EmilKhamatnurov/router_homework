import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app/routes';

function App() {
	return (
		<BrowserRouter>
				<AppRoutes></AppRoutes>
		</BrowserRouter>
	);
}

export default App;
