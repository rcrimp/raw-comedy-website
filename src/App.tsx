import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/core/styles";
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from "./theme";

import MenuBar from "./components/MenuBar";
import FullScreenContainer from "./components/FullScreenContainer"
import Title from "./components/Title";
import About from "./components/About";
import Signup from "./components/Signup";
import Tickets from "./components/Tickets";

function App() {
  return (
	<Router basename={'/raw-comedy-website'}>
		<Switch>
			<Route path={'/'}>
				<ThemeProvider theme={theme}>
				<CssBaseline />
					<ParallaxProvider>
						<MenuBar />
						<FullScreenContainer content={<Title />} />
						<FullScreenContainer content={<About />} />
						<FullScreenContainer content={<Signup />} />
						<FullScreenContainer content={<Tickets />} />
					</ParallaxProvider>
				</ThemeProvider>
			</Route>)
		</Switch>
	</Router>
  );
}

export default App;
