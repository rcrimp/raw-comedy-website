import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
// import DunedinComedyLogo from '../images/dunedin-comedy.jpg';
// import RemarkablyFunnyLogo from '../images/remarkably-funny.jpg';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
	root: {
		color: "white",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "stretch",
		// minHeight: "100vh",
		paddingTop: "64px",
	},
	title: {
		width: "100%",
		margin: "auto",
	},
	flexEvents: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		margin: "auto",
		marginBottom: "24px",
		[theme.breakpoints.up('md')]: {
      maxWidth: "960px",
    },
	},
	flexRow: {
		padding: "8px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	flexCell: {
		margin: "0 0px",
		textAlign: "center",
		lineHeight: "36px",
		height: "36px",
		[theme.breakpoints.up('md')]: {
			margin: "0 16px 0 0",
		}
	},
	buttonTickets: {
		backgroundColor: '#B71C1C',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#B71C1C',
		},
		[theme.breakpoints.up('md')]: {
      // marginLeft: "16px",
			// borderRadius: "4px",
			margin: "0px",
    },
	},
	buttonFB: {
		backgroundColor: '#3c52b2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
		},
		[theme.breakpoints.down('sm')]: {
      marginLeft: "16px",
			borderRadius: "4px",
			// padding: "6px",
    },
	}
}));



const allEvents = [
	{
		type: "Heat",
		date: moment('09 Jul 2021 19:30:00'),
		city: 'Dunedin',
		tickets: 'google.com',
		fbevent: 'facebook.com'
	},
	{
		type: "Heat",
		date: moment('17 Jul 2021 19:30:00'),
		city: 'Dunedin',
		tickets: 'google.com',
		fbevent: 'facebook.com'},
	{
		type: "Heat",
		date: moment('20 Jul 2021 19:30:00'),
		city: 'Queenstown',
		tickets: 'google.com',
		fbevent: 'facebook.com'},
	{
		type: "Heat",
		date: moment('21 Jul 2021 19:30:00'),
		city: 'Wānaka',
		tickets: 'google.com',
		fbevent:'facebook.com'},
	{
		type: "Heat",
		date: moment('28 Jul 2021 19:30:00'),
		city: 'Invercargill',
		tickets: 'google.com',
		fbevent: 'facebook.com'},
	{
		type: "Semi Final",
		date: moment('31 Jul 2021 19:30:00'),
		city: 'Dunedin', tickets: 'google.com',
		fbevent: 'facebook.com'},
	{
		type: "Semi Final",
		date: moment('07 Aug 2021 19:30:00'),
		city: 'Wānaka',
		tickets: 'google.com',
		fbevent: 'facebook.com'},
	{
		type: "Regional Final",
		date: moment('21 Aug 2021 19:30:00'),
		city: 'Queenstown',
		tickets: 'google.com',
		fbevent: 'facebook.com'
	}
  ];

const Tickets = () => {
	const classes = useStyles();
	const theme = useTheme();
	const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
	const xsView = useMediaQuery('(max-width:420px)');

	const generateEventFlex = (events: any[]) => {
		return (
			<div className={classes.flexEvents}>
				{events.map((row, i) => (
					<div className={classes.flexRow} key={i}>
						
						{/* <TableCell className={classes.tableCell} align="center">{row.type}</TableCell> */}
						
						<div className={classes.flexCell} style={{width: "100px"}}>{row.city}</div>
						
						<div className={classes.flexCell} style={{width: "90px"}}>{moment(row.date).format('DD MMMM')}</div>
						
						{
							mobileView ? <></> : <div className={classes.flexCell} style={{width: "100px"}}>{moment(row.date).format('dddd')}</div>
						}
						{
							mobileView ? <></> : <div className={classes.flexCell} style={{width: "80px"}}>{moment(row.date).format('hh:mm A')}</div>
						}
						
						<div className={classes.flexCell} >
							<Button
								variant="contained"
								color="primary"
								className={classes.buttonTickets}
								startIcon={<ConfirmationNumberIcon />}
							>
								{xsView ? 'TIX' : 'Tickets'}
							</Button>
						</div>

						{xsView ? (
							<IconButton className={classes.buttonFB} style={{padding:"6px"}}><FacebookIcon /></IconButton>
								) : (
							<div className={classes.flexCell} >
								<Button variant="contained" className={classes.buttonFB} startIcon={<FacebookIcon />}>Event</Button>
							</div>
							)
						}

					</div>
				))}
			</div>);
	} 

	return (
		<div className={classes.root} >
			<div>
				<Typography className={classes.title} align="center" variant="h3">Tickets Lower South Island</Typography>
			</div>
			<div>
				<Typography className={classes.title} align="center" variant="h4">Heats</Typography>
				{generateEventFlex(allEvents.filter((e) => e.type==='Heat'))}
			</div>
			<div>
				<Typography className={classes.title} align="center" variant="h4">Semi Finals</Typography>
				{generateEventFlex(allEvents.filter((e) => e.type==='Semi Final'))}
			</div>
			<div>
				<Typography className={classes.title} align="center" variant="h4">Regional Final</Typography>
				{generateEventFlex(allEvents.filter((e) => e.type==='Regional Final'))}
			</div>
		</div>

	);
}

export default Tickets;