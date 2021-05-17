import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Button, Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import standingPerformer from "../images/actingAudition-LD.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		// display: "inline-block",
		minHeight: "100%",
		width: "100%",
		paddingTop: "64px",
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
		// width: "100%",
		// height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		// alignContent: "space-evenly",
	},
	textBox:{
		// margin: "auto",
	},
	blendShadow: {
		position: "absolute",
		top: 64,
		bottom: 0,
		width: "100%",
		// height: "100%",
		backgroundImage: `linear-gradient(0deg, black, transparent 50%, transparent 90%, black)`,
	},
	title: {
		color: "white",
		textAlign: "center",
		textShadow: '0 0 12px #000000FF',
		[theme.breakpoints.up('md')]: {
      fontSize: "5vw",
    },
		[theme.breakpoints.down('sm')]: {
      fontSize: "11vw",
    },
	},
	title2: {
		color: "white",
		textAlign: "center",
		textShadow: '0 0 12px #000000FF',
		[theme.breakpoints.up('md')]: {
      fontSize: "3vw",
    },
		[theme.breakpoints.down('sm')]: {
      fontSize: "6vw",
    },
	},
}));

const Signup = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<div className={classes.root} >
			<LazyLoadImage className={classes.bgimg} src={standingPerformer} />
			<div className={classes.blendShadow} />
						
				<div className={classes.textContainer}>
				<Parallax y={[100, -100]}>
					<Typography className={classes.title} variant="h3">Are you funny?</Typography>
					
					<Typography className={classes.title2} variant="h3">You could be NZ's next star comedian</Typography>
					</Parallax>
				</div>

		</div>
	);
}

export default Signup;