import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

import standingPerformer from "../images/signup.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		// display: "inline-block",
		height: "100%",
		width: "100%",
	},
	bgimg: {
		height: "100%",
		width: "100%",
		objectFit: "cover",
	},
	textContainer: {
   	position: "absolute",
		top: 0,
    bottom: 0,
		left: 0,
		right: 0,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
	},
	text: {
		color: "white",
		textAlign: "center",
		fontSize: "8vw",
		margin: "auto",
		marginBottom: 0,
		textShadow: '0 0 10px #00000077',
	},
}));

const Signup = () => {
	const classes = useStyles();

	return (
		<div className={classes.root} >
			<img className={classes.bgimg} src={standingPerformer} />
			<Parallax className={classes.textContainer} y={[250, -250]}>
				<Typography className={classes.text} variant="h3">Are you funny?</Typography>
			</Parallax>
		</div>
	);
}

export default Signup;