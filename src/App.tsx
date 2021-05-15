import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/core/styles";
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from "./theme";

import FullScreenContainer from "./components/FullScreenContainer"
import Title from "./components/Title";
import About from "./components/About";
import Signup from "./components/Signup";
import Tickets from "./components/Tickets";

function App() {
  return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ParallaxProvider>
				<FullScreenContainer content={<Title />} />
				<FullScreenContainer content={<About />} />
				<FullScreenContainer content={<Signup />} />
				<FullScreenContainer content={<Tickets />} />
			</ParallaxProvider>
		</ThemeProvider>
  );
}

export default App;
