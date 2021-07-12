import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink  } from 'react-router-hash-link';
import { Typography, Button } from '@material-ui/core';

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import RAWlogo from "../images/RAW.png";

const shadowSettings = '0 2px 10px #000000BB'

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		height: "100%",
		width: "100%",
		display: "inline-block",
		color: "white",
		marginTop: "64px",
		[theme.breakpoints.down('sm')]: {
			marginTop: "56px",
		},
	},
	textContainer: {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		maxWidth: "960px",
		padding: '0 16px',
		marginLeft: "auto",
		marginRight: "auto",
		[theme.breakpoints.up('md')]: {
    },
		color: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
	},
	buttonList: {
		// maxWidth: "800px",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	},
	button: {
		// margin: "auto",
		display: "block",
		minWidth: "300px",
		margin: "0 16px 16px 0",
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
}));

const About = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{/* <Typography className={classes.textTop} variant="h1">LOWER SOUTH ISLAND</Typography> */}
			{/* <LazyLoadImage
				className={classes.rawLogo}
				src={RAWlogo}
				// width={rawLogoDimendsions.w}
				// height={rawLogoDimendsions.h}
				alt="RAW logo"
			/> */}
			{/* <Typography className={classes.textBottom} variant="h1">COMEDY QUEST 2021</Typography> */}
			<div className={classes.textContainer}>
				
				<Typography className={classes.title} align='center' variant="h3">The RAW Comedy Quest</Typography>
				<Typography className={classes.subtitle} align='center' variant="h5" paragraph={true}>
					Searching for New Zealand's best new comedian
				</Typography>

				<Typography variant="body1" paragraph={true}>
					Every year hundreds of funny folk from across the nation sign up for their time in the spotlight as part of The RAW Comedy Quest, the country’s largest and most prestigious open mic comedy compeititon.

					Now we want you! All you need is five minutes of original material and the glory could be yours… get through the heats and finals and you could be New Zealand's next star comedian.
				</Typography>
				<Typography variant="body1" paragraph={true}>
					The Lower South Island is accepting sign ups from the Otago and Southland regions, who will compete for an all-inclusive trip to the Grand National Final in Auckland.
				</Typography>
				<Typography variant="body1" paragraph={true}>
					So what are you waiting for? Sign up now!
				</Typography>


				<div className={classes.buttonList}>
					<HashLink className={classes.link} smooth to="/#compete">
						<Button className={classes.button} size="large" variant="contained" color="primary">Sign Up</Button>
					</HashLink>
          
					<HashLink className={classes.link} smooth to="/#tickets">
						<Button className={classes.button} size="large" variant="contained" color="primary">Purchase Tickets</Button>
					</HashLink>
				</div>
			</div>
		</div>
	);
}

export default About;