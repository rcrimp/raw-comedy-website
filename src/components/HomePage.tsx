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
import SignupForms from "./SignupForms";
import Tickets from "./Tickets";
import Images from "./Images";
import Footer from "./Footer";

const HomePage = () => {

	return (
		<ThemeProvider theme={theme}>
		<CssBaseline />
			<ParallaxProvider>
				<MenuBar />
				<FullScreenContainer stretch={false} anchor={'home'} content={<Title />} />
				<FullScreenContainer stretch={false} shrink={true} anchor={'about'} content={<About />} />
				<FullScreenContainer stretch={true} anchor={'ad'} content={<Signup />} />
				<FullScreenContainer stretch={false} shrink={true} anchor={'compete'} content={<SignupForms />} />
				<FullScreenContainer stretch={true} anchor={'tickets'} content={<Tickets />} />
				<FullScreenContainer stretch={false} shrink={true} anchor={'gallery'} content={<Images />} />
				<Footer />
			</ParallaxProvider>
		</ThemeProvider>
	);
}

export default HomePage;