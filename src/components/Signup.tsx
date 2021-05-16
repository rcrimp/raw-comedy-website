import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Typography } from '@material-ui/core';
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
	upperShadow: {
		width: "100%",
		height: "100px",
		backgroundImage: `linear-gradient(0deg, transparent, black)`,
	},
	text: {
		color: "white",
		textAlign: "center",
		fontSize: "8vw",
		margin: "auto",
		// marginBottom: 0,
		textShadow: '0 0 10px #00000077',
	},
	buttonContainer: {
		display: "block",
		margin: "auto"
	},
	button: {
		display: "block",
		width: "200px",
		marign: "auto",
		marginBottom: "16px",
	}
}));

const Signup = () => {
	const classes = useStyles();

	return (
		<div className={classes.root} >
			<img className={classes.bgimg} src={standingPerformer} />
			<div className={classes.textContainer}>
				<div className={classes.upperShadow} />
				<Typography className={classes.text} variant="h3">Are you funny?</Typography>
				<div className={classes.buttonContainer}>
					<Button className={classes.button} size="large" variant="contained" >Dunedin</Button>
					<Button className={classes.button} size="large" variant="contained" >Wānaka</Button>
					<Button className={classes.button} size="large" variant="contained" >Queenstown</Button>
					<Button className={classes.button} size="large" variant="contained" >Invercargill</Button>
				</div>
			</div>
		</div>
	);
}

export default Signup;