import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Button, Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import standingPerformer from "../images/actingAudition-LD.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		minHeight: "100%",
		width: "100%",
		paddingTop: "64px",
	},
	textBox:{
		marginBottom: "32px",
	},

	title: {
		color: "white",
		textAlign: "center",
		
		// margin: "auto",
		// marginTop: 0,
		textShadow: '0 0 12px #000000FF',
		[theme.breakpoints.up('md')]: {
      fontSize: "5vw",
    },
		[theme.breakpoints.down('sm')]: {
      fontSize: "11vw",
    },
	},
	text: {
		color: "white",
		textAlign: "center",
		// margin: "auto",
		// marginBottom: 0,
		textShadow: '0 0px 10px #000000ff',
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "center",
		alignContent: "center",
		// margin: "auto",
	},
	button: {
		// display: "block",
		width: "170px",
		marginBottom: "16px",
		backgroundColor: '#B71C1C',
		color: '#fff',
    '&:hover': {

			backgroundColor: '#fff',
      color: '#B71C1C',
		},
	},
	link: {
		color: "#FFFFFF",
		textShadow: '0 0px 10px #000000ff',
	},
}));

const SignupForms = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<div className={classes.root} >

				<div className={classes.textBox}>
					<div>
						<Typography className={classes.text} align="center" variant="h3">To Compete</Typography>
					</div>

						<Typography className={classes.text} variant="body1">Amateur's only</Typography>
						<Typography className={classes.text} variant="body1">4-6 minute performance</Typography>
						<Typography className={classes.text} variant="body1">Must perform your own material</Typography>
						{/* <Typography className={classes.text} variant="body1">Otago and Southland registrations</Typography> */}
						<Typography className={classes.text} variant="body1">Must be a New Zealand citizen or resident</Typography>
						<Typography className={classes.text} variant="body1">Can't have been a finalist from previous years</Typography>

					</div>
					
					<div className={classes.textBox}>
						
						<Typography className={classes.text} variant="h4">Registration Forms</Typography>
						<div className={classes.buttonContainer}>
							<Button className={classes.button} color="primary" size="large" variant="contained" >Dunedin </Button>
							<Button className={classes.button} color="primary" size="large" variant="contained" >Wānaka </Button>
							<Button className={classes.button} color="primary" size="large" variant="contained" >Queenstown </Button>
							<Button className={classes.button} color="primary" size="large" variant="contained" >Invercargill </Button>
						</div>

						<Typography className={classes.text} variant="body1">Other Regions</Typography>
						<Typography className={classes.text} variant="body2">
							<a className={classes.link} href="https://www.meegwai.com/south-island-raw-1">Upper North Island (Christchurch)</a>
						</Typography>
						<Typography className={classes.text} variant="body2">
							<a className={classes.link} href="https://www.diycomedynz.com/">Central North Island (Palmerston North)</a>
						</Typography>
						<Typography className={classes.text} variant="body2">
							<a className={classes.link} href="http://wellingtoncomedy.co.nz/upcoming-shows/2021-wellington-raw-comedy-quest/?date=2021-06-03">Lower North Island (Wellington)</a>
						</Typography>
						<Typography className={classes.text} variant="body2">
							<a className={classes.link} href="http://www.comedy.co.nz/comedy-guide/shows/raw-comedy-quest-heats-2021/">Upper North Island (Auckland)</a>
						</Typography>

					</div>

		</div>
	);
}

export default SignupForms;