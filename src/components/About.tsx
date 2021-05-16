import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Button } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';


const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		display: "inline-block",
		height: "100%",
		width: "100%",
	},
	textContainer: {
		position: "absolute",
		top: "0",
		bottom: 0,
		left: 0,
		right: 0,
		padding: "10% 25% 10% 25%",
		height: "100%",
		margin: "auto",
		color: "white",
	},
	button: {
		margin: "auto",
		display: "block",
		width: "50%",
		marginBottom: "16px",
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Parallax className={classes.textContainer} y={[50, 0]}>
				<Typography align='center' variant="h3">The RAW Comedy Quest</Typography>
				<Typography align='center' variant="h5" paragraph={true}>
					Searching for New Zealand's best new comedian
				</Typography>
				<Typography variant="body1" paragraph={true}>
					The RAW Comedy Quest is a nationwide comedy comepition and the first step for many kiwi comedians.
				</Typography>
				<Typography variant="body1" paragraph={true}>
					Launched in 1995, the RAW Comedy Quest is New Zealand's biggest comedy competition, with $2500 in prize money, the glory and promises of further work as a professional comedian to be won. Many previous winners have found professional success as career comedians, while others honed a few good jokes for the office Christmas party. But most importantly all of them have faced humanity's greatest fear... "Public Speaking", with the added expectation of being funny.
				</Typography>
				<Typography variant="body1" paragraph={true}>
					The Lower South Island is accepting entrants from the Otago and Southland regions, who will be competing for an all-inclusive trip to the Grand National Final in Auckland.
				</Typography>
				<div>
					<Button className={classes.button} size="large" variant="contained" color="primary">Register to Compete</Button>
					<Button className={classes.button} size="large" variant="contained" color="primary">Buy Tickets</Button>
				</div>
			</Parallax>
		</div>
	);
}

export default About;