import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/core/styles";
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from "../theme";

import MenuBar from "./MenuBar";

import FullScreenContainer from "./FullScreenContainer"
import Title from "./Title";
import About from "./About";
import Signup from "./Signup";
import Tickets from "./Tickets";

const HomePage = () => {

	return (
		<ThemeProvider theme={theme}>
		<CssBaseline />
			<ParallaxProvider>
				<MenuBar />
				<FullScreenContainer stretch={false} anchor={'home'} content={<Title />} />
				<FullScreenContainer stretch={true} anchor={'about'} content={<About />} />
				<FullScreenContainer stretch={false} anchor={'compete'} content={<Signup />} />
				<FullScreenContainer stretch={true} anchor={'tickets'} content={<Tickets />} />
			</ParallaxProvider>
		</ThemeProvider>
	);
}

export default HomePage;