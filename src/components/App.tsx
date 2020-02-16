import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import '../../assets/css/style.css'
import { SearchResults } from './SearchResults';
import { Main } from './Main';
import { Data } from './Data';
import { Menu } from './Menu';


class App extends React.PureComponent {
	render() {
		return (
			<Provider store={store}>
				<Data />
                <Menu />
				<Main />
				<SearchResults />
			</Provider>
		);
	}
}

export default App;