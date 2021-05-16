import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

import moment from 'moment';


const useStyles = makeStyles((theme) => ({
	root: {
		color: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: "100%",
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
		[theme.breakpoints.up('md')]: {
      maxWidth: "960px",
    },
	},
	flexRow: {
		padding: "8px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	flexCell: {
		margin: "0 0px",
		textAlign: "center",
		lineHeight: "36px",
		height: "36px",
		[theme.breakpoints.up('md')]: {
			margin: "0 16px",
		}
	},
	buttonTickets: {
		backgroundColor: '#B71C1C',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#B71C1C',
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
			padding: "6px",
    },
	},
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
		fbevent: 'facebook.com'},
  ];

const Tickets = () => {
	const classes = useStyles();
	const theme = useTheme();
	const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

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
								{mobileView ? 'TIX' : 'Tickets'}
							</Button>
						</div>

						{mobileView ? (
							<IconButton className={classes.buttonFB}><FacebookIcon /></IconButton>
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
				<Typography className={classes.title} align="center" variant="h3">Event Tickets</Typography>
			</div>
			
			<Typography className={classes.title} align="center" variant="h4">Heats</Typography>
			{generateEventFlex(allEvents.filter((e) => e.type=='Heat'))}
			<Typography className={classes.title} align="center" variant="h4">Semi Finals</Typography>
			{generateEventFlex(allEvents.filter((e) => e.type=='Semi Final'))}
			<Typography className={classes.title} align="center" variant="h4">Regional Final</Typography>
			{generateEventFlex(allEvents.filter((e) => e.type=='Regional Final'))}
		</div>
	);
}

export default Tickets;