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
						{generateListItem("You must be an amateur. You cannot be paid regularly to perform comedy.")}
						{generateListItem("You cannot enter in different regions in the same year.")}
						{generateListItem("If you've been a National Finalist you can't enter again.")}
						{generateListItem("If you've competed before you may enter again, but up to a maximum of 3 different years.")}
						{/* {generateListItem("You must be a first timer or amateur. That is, you can not have earned more than $500 from performing live comedy, as of 1 January 2021.")} */}
          </List>
					<Typography className={classes.text} variant="body2">
						For rule clarifications or special exemptions email us at <a className={classes.link} href="mailto:hello@dunedincomedy.co.nz">hello@dunedincomedy.co.nz</a>
					</Typography>
				</div>
				
				<div className={classes.textBox}>
					<div>
						<Typography className={classes.text} align="center" variant="h4">Your Performance</Typography>
					</div>
					<List className={classes.list} dense={true}>
						{generateListItem("Solo, group, stand-up, music, sketch... all forms of live comedy are welcome.")}
						{generateListItem("Your performance must be no longer than 6 - S I X - minutes.")}
						{generateListItem("Your material must be original.")}
          </List>
				</div>
					
					<div className={classes.textBox}>
						
						<Typography className={classes.text} variant="h4" paragraph={true} >Lower South Island Sign Up</Typography>
						<Typography className={classes.text} variant="body1">Heats in Dunedin, Queenstown, Invercargill, W??naka, and Clyde.</Typography>
						<Typography className={classes.text} variant="body1">If you live elsewhere you may still compete if you are prepared to travel.</Typography>
						<Typography className={classes.text} variant="body1">You must also be prepared to travel for the semis/finals, there is funding available for travel grants.</Typography>
						<Typography className={classes.text} style={{color: "yellow"}} variant="body1">Dunedin Heats are now full.</Typography>
						<div className={classes.buttonContainer}>
							<Button className={classes.button} href="https://timmuller.typeform.com/to/pKgqvp" color="primary" size="large" variant="contained" >Sign Up Form</Button>
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