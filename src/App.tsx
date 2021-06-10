import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import HomePage from './components/HomePage'
import ReactGA from 'react-ga';
import trackData from './track-data.json';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log('Hello developer');
} else {
	console.log('Looking for bugs in my code are ya?');
	console.log('Are you a software tester?');
	console.log("If you are, I bet you have heaps of children.");
	console.log('As you and I both know, software testers are professionally trained to reproduce mistakes.');
    ReactGA.initialize(trackData.trackingID, {
		// debug: true,
		titleCase: false,
		gaOptions: {
			userId: "developer",
			siteSpeedSampleRate: 100,
			alwaysSendReferrer: true,
		}
	  });
}
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  return (
		<Router basename={'/'}>
			<Switch>
				<Route exact path={'/'} component={HomePage} />
				{/* <Route exact path={'/raw'} component={HomePage} /> */}
				<Route render={() => <Redirect to="/" />} />
			</Switch>
		</Router>
  );
}

export default App;
