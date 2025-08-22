import { Component, PropsWithChildren } from 'react';

class ErrorBoundary extends Component {
	constructor(props: PropsWithChildren) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		console.log('error', error);

		return {
			hasError: true,
		};
	}

	componentDidCatch(error, errorInfo) {
		console.log('error###', error);
		console.log('errorInfo###', errorInfo);
	}

	render() {
		// @ts-ignore
		if (this.state.hasError) {
			return <div>Что-то пошло не так!</div>;
		}
		// @ts-ignore
		return this.props.children;
	}
}

export default ErrorBoundary;