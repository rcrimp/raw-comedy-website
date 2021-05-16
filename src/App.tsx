import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
  } from "react-router-dom";

	import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import HomePage from './components/HomePage'

function App() {

  return (
		<Router basename={'/raw-comedy-website'}>
			<Switch>
				<Route exact path={'/'} component={HomePage} />
				<Route exact path={'/raw'} component={HomePage} />
				<Route render={() => <Redirect to="/" />} />
			</Switch>
		</Router>
  );
}

export default App;
