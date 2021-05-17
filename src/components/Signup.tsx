import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

import standingPerformer from "../images/actingAudition-LD.jpg";

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
	blendShadow: {
		position: "absolute",
		top: 0,
		bottom: 0,
		width: "100%",
		// height: "100%",
		backgroundImage: `linear-gradient(0deg, black, transparent 20%, transparent 80%, black)`,
	},
	lowerShadow: {
		position: "absolute",
		top: 0,
		width: "100%",
		height: "100px",
		backgroundImage: `linear-gradient(180deg, transparent, black)`,
	},
	title: {
		color: "white",
		textAlign: "center",
		fontSize: "5vw",
		margin: "auto",
		// marginTop: 0,
		textShadow: '0 0 10px #00000077',
	},
	text: {
		color: "white",
		textAlign: "center",
		margin: "auto",
		// marginBottom: 0,
		textShadow: '0 0 10px #00000077',
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignContent: "center"
	},
	button: {
		// display: "block",
		width: "20%",
		marign: "auto",
		marginBottom: "16px",
	},
}));

const Signup = () => {
	const classes = useStyles();

	return (
		<div className={classes.root} >
						<img className={classes.bgimg} src={standingPerformer} />
			<div className={classes.blendShadow} />
						

			{/* <Parallax y={[0, 0]}> */}
				<div className={classes.textContainer}>
					<Typography className={classes.title} variant="h3">Are you funny?</Typography>
				</div>
			{/* </Parallax> */}
				

				{/* <Typography className={classes.text} variant="h6">Register to compete below</Typography> */}


				{/* <div className={classes.buttonContainer}> */}
					{/* <Button className={classes.button} color="primary" size="large" variant="contained" >Dunedin</Button>
					<Button className={classes.button} color="primary" size="large" variant="contained" >Wānaka</Button>
					<Button className={classes.button} color="primary" size="large" variant="contained" >Queenstown</Button>
					<Button className={classes.button} color="primary" size="large" variant="contained" >Invercargill</Button> */}
				{/* </div> */}
			
		</div>
	);
}

export default Signup;