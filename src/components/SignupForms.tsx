import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Typography, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

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
		// textShadow: '0 0 12px #000000FF',
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
		// textShadow: '0 0px 10px #000000ff',
	},
	buttonContainer: {
		margin: "auto",
		maxWidth: "800px",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
		// alignContent: "center",
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
		// textShadow: '0 0px 10px #000000ff',
	},
	list: {
		maxWidth: "800px",
		margin: "auto",
		color: "white"
	}
}));

const SignupForms = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	const generateListItem = (text: string) => {
		return (<ListItem>
			<ListItemIcon>
				<ArrowRightIcon style={{color: "white"}} />
			</ListItemIcon>
			<ListItemText
				primary={
					<Typography variant="body1">
						{text}
					</Typography>}
			/>
		</ListItem>)
	} 

	return (
		<div className={classes.root} >

				<div className={classes.textBox}>
					<div>
						<Typography className={classes.text} align="center" variant="h3">To Compete</Typography>
					</div>
					<List className={classes.list} dense={true}>
						{generateListItem("Must be a New Zealand Citizen or Permanent Resident (or working towards residency).")}
						{generateListItem("You cannot enter in different regions in the same year.")}
						{generateListItem("If you've been a National Finalist, or twice Regional Finalist, you can't enter again.")}
						{generateListItem("If you've competed before you may enter again, but up to a maximum of 3 different years.")}
						{generateListItem("You must be a first timer or amateur. That is, you can not have earned more than $500 from performing live comedy, as of 1 January 2021.")}
          </List>
					<Typography className={classes.text} variant="body2">
						For rule clarifications or special exemptions email us at <a className={classes.link} href="mailto:remarkablyfunny@gmail.com">remarkablyfunny@gmail.com</a>
					</Typography>
				</div>
				
				<div className={classes.textBox}>
					<div>
						<Typography className={classes.text} align="center" variant="h4">Your Performance</Typography>
					</div>
					<List className={classes.list} dense={true}>
						{generateListItem("Solo, group, stand-up, music, sketch... all forms of live comedy are welcome.")}
						{generateListItem("Your performance must be no longer than 5 - F I V E - minutes.")}
						{generateListItem("Your material must be original.")}
          </List>
				</div>
					
					<div className={classes.textBox}>
						
						<Typography className={classes.text} variant="h4" paragraph={true} >Sign Up Forms</Typography>
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