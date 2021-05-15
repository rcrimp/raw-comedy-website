import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';
import Image from 'material-ui-image'
// aspectRatio={635/194}

import RAWlogo from "../images/RAW.png";
import curtainBackground from "../images/curtain.jpg";
import seats from "../images/seats.png";

const rawLogoDimendsions = {w: 635, h: 194};
const curtainDimensions = {w: 1224, h: 857};

const shadowSettings = '0 2px 10px #000000BB'

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		display: "inline-block",
		height: "100%",
		width: "100%",
	},
	bgimg: {
		height: "100%",
		width: "100%",
		objectFit: "fill",
	},
	textContainer: {
		width: "100%", //rawLogoDimendsions.w,
		// backgroundColor: "rgba(0, 0, 0, 0.5)",
		color: "white",
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
	rawLogo: {
		width: "50%",
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		filter: `drop-shadow(${shadowSettings})`,
	},
	textTop: {
		textAlign: "center",
		fontSize: "4.1vw",
		margin: "auto",
		marginBottom: 8,
		textShadow: shadowSettings,
	},
	textBottom: {
		textAlign: "center",
		fontSize: "4.4vw",
		margin: "auto",
		marginTop: 8,
		textShadow: shadowSettings,
	},
	seats: {
		width: "100%",
		filter: `drop-shadow(0 0 10px #000000BB)`,

	},
}));

const Title = () => {
	const classes = useStyles();

	return (
		<div className={classes.root} >
			<img className={classes.bgimg} src={curtainBackground} />
			<Parallax className={classes.textContainer} y={[50, -50]}>
				<Typography className={classes.textTop} variant="h1">LOWER SOUTH ISLAND</Typography>
				<img className={classes.rawLogo} src={RAWlogo} alt="RAW logo" />
				<Typography className={classes.textBottom} variant="h1">COMEDY QUEST 2021</Typography>
			</Parallax>
			<Parallax y={[-12, -150]} >
				<img className={classes.seats} src={seats} />
			</Parallax>

		</div>
	);
}

export default Title;