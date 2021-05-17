import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink  } from 'react-router-hash-link';
import { Typography, Button } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		// display: "inline-block",
		height: "100%",
		width: "100%",
		display: "flex",
		backgroundImage: `linear-gradient(0deg, black 50%, transparent)`,
		paddingTop: "64px",
	},
	textContainer: {
		// position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		// padding: "10% 10% 10% 10%",
		maxWidth: "960px",
		padding: '0 16px',
		marginLeft: "auto",
		marginRight: "auto",
		[theme.breakpoints.up('md')]: {
      marginTop: "200px",
    },
		
		color: "white",
		

		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
	},
	button: {
		margin: "auto",
		display: "block",
		width: "50%",
		marginBottom: "16px",
		backgroundColor: '#B71C1C',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#B71C1C',
		},
	},
	link: {
		textDecoration: 'none !important',
	},
	title: {
		[theme.breakpoints.up('md')]: {
      fontSize: "4vw",
    },
		[theme.breakpoints.down('sm')]: {
      fontSize: "7.2vw",
    },
	},
	subtitle: {
		[theme.breakpoints.up('md')]: {
      fontSize: "2vw",
    },
		[theme.breakpoints.down('sm')]: {
      fontSize: "3.7vw",
    },
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.textContainer}>
				
				<div>
					<Typography className={classes.title} align='center' variant="h3">The RAW Comedy Quest</Typography>
					<Typography className={classes.subtitle} align='center' variant="h5" paragraph={true}>
						Searching for New Zealand's best new comedian
					</Typography>
				</div>
				{/* <Typography variant="body1" paragraph={true}>
					The RAW Comedy Quest is a nationwide comedy comepition and the first step for many kiwi comedians.
				</Typography> */}
				<div>
					<Typography variant="body1" paragraph={true}>
						Launched in 1995, the RAW Comedy Quest is New Zealand's biggest comedy competition, with $2500 in prize money, the glory and promises of further work as a professional comedian to be won. Many previous winners have found professional success as career comedians, while others honed a few good jokes for the office Christmas party. But most importantly all of them have faced humanity's greatest fear... "Public Speaking", with the added expectation of being funny.
					</Typography>
					<Typography variant="body1" paragraph={true}>
						The Lower South Island is accepting entrants from the Otago and Southland regions, who will be competing for an all-inclusive trip to the Grand National Final in Auckland.
					</Typography>
				</div>

				<div>
					<HashLink className={classes.link} smooth to="/raw#compete">
						<Button className={classes.button} size="large" variant="contained" color="primary">Register to Compete</Button>
					</HashLink>
          
					<HashLink className={classes.link} smooth to="/raw#tickets">
						<Button className={classes.button} size="large" variant="contained" color="primary">Purchase Tickets</Button>
					</HashLink>
				</div>
			</div>
		</div>
	);
}

export default About;