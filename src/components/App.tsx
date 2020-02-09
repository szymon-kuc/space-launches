import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Menu } from './Menu';
import { Live } from './Live';
import '../../assets/css/style.css'
import { Data } from './Data';
import { Upcoming } from './Upcoming';

class App extends React.PureComponent {
	render() {
		return (
			<Provider store={store}>
				<Data />
				<Menu />
				<Live />
				<Upcoming />
			</Provider>
		);
	}
}

export default App;