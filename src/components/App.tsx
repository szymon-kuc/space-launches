import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Launch } from './Test';

class App extends React.PureComponent {
	render() {
		return (
			<Provider store={store}>
				<div>
					<h1>Hello Wosssrld!</h1>
				</div>
				<Launch />
			</Provider>
		);
	}
}

export default App;