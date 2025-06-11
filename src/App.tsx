import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app/routes';

function App() {
	return (
		<BrowserRouter>
			<AppRoutes>
				<div className='App'></div>
			</AppRoutes>
		</BrowserRouter>
	);
}

export default App;
