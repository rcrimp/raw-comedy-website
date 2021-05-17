import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';
import Image from 'material-ui-image'
// aspectRatio={635/194}

import RAWlogo from "../images/RAW.png";
import curtainBackground from "../images/curtain-HD.jpg";

import seats1 from "../images/theatre-seats/001.png";
import seats2 from "../images/theatre-seats/002.png";
import seats3 from "../images/theatre-seats/003.png";
import seats4 from "../images/theatre-seats/004.png";
import seats5 from "../images/theatre-seats/005.png";
import seats6 from "../images/theatre-seats/006.png";
import seats7 from "../images/theatre-seats/007.png";
import seats8 from "../images/theatre-seats/008.png";
import mdSeats from "../images/theatre-seats/md-03-08.png"
const seatingRow = [seats3, seats4, seats5, seats6, seats7, seats8];

// const rawLogoDimendsions = {w: 635, h: 194};
// const curtainDimensions = {w: 1224, h: 857};

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
		[theme.breakpoints.down('sm')]: {
      paddingBottom: "20vw",
    },
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
	seatsContainer: {
		position: "absolute",
		width: "100%",
	},
	seats: {
		// position: "absolute",
		width: "100%",
		minHeight: "50vh",
		// margin: "auto",
		filter: `drop-shadow(0 0 10px #000000BB)`,
		objectFit: "cover",
	},
	mobileSeats: {
		position: "absolute",
		top: '60vw',
		left: 0,
		width: "100%",
		// objectFit: "cover",
	},
	mobileSeatsSpacing: {
		display: "block",
		height: "20vw",
	},
}));

const Title = (props: any) => {
	const classes = useStyles();
	const theme = useTheme();
	const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
	
	let seats;


	if (mobileView) {
		seats = (
		<>
			<img className={classes.mobileSeats} src={mdSeats} />
			<div className={classes.mobileSeatsSpacing}/>	
		</>
		);
	} else {
		seats = seatingRow.map((row: any, i: number) => (
			<div key={`seatRow${i}`} className={classes.seatsContainer} >
				<Parallax y={[-15 + Math.pow(2, i+2), -15 + -Math.pow(2, i+2)]} >
					<img className={classes.seats} src={row} />
				</Parallax>
			</div>
		))
	}

	return (
		<div className={classes.root} >
			<img className={classes.bgimg} src={curtainBackground} />
			<div className={classes.textContainer}>
				<Typography className={classes.textTop} variant="h1">LOWER SOUTH ISLAND</Typography>
				<img className={classes.rawLogo} src={RAWlogo} alt="RAW logo" />
				<Typography className={classes.textBottom} variant="h1">COMEDY QUEST 2021</Typography>
			</div>
			{seats}
		</div>
	);
}

export default Title;