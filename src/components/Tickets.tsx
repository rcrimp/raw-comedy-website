import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Button } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
	root: {
		color: "white",
	},
	table: {
		minWidth: 650,
	  },
}));



const rows = [
	{
		type: "Heat",
		date: Date.parse('09 Jul 2021 19:30:00 NZST'),
		city: 'Dunedin',
		tickets: 'google.com',
		fbevent: 'facebook.com'},
	{type: "Heat", date: Date.parse('17 Jul 2021 19:30:00 NZST'), city: 'Dunedin', tickets: 'google.com', fbevent: 'facebook.com'},
	{type: "Heat", date: Date.parse('20 Jul 2021 19:30:00 NZST'), city: 'Queenstown', tickets: 'google.com', fbevent: 'facebook.com'},
	{type: "Heat", date: Date.parse('21 Jul 2021 19:30:00 NZST'), city: 'Wanaka', tickets: 'google.com', fbevent: 'facebook.com'},
	{type: "Heat", date: Date.parse('28 Jul 2021 19:30:00 NZST'), city: 'Invercargill', tickets: 'google.com', fbevent: 'facebook.com'},
	{type: "Semi Final", date: Date.parse('31 Jul 2021 19:30:00 NZST'), city: 'Dunedin', tickets: 'google.com', fbevent: 'facebook.com'},
	{type: "Semi Final", date: Date.parse('07 Aug 2021 19:30:00 NZST'), city: 'Wanaka', tickets: 'google.com', fbevent: 'facebook.com'},
	{type: "Regional Final", date: Date.parse('21 Aug 2021 19:30:00 NZST'), city: 'Queenstown', tickets: 'google.com', fbevent: 'facebook.com'},
  ];

const Tickets = () => {
	const classes = useStyles();

	return (
		<div className={classes.root} >
			<Typography variant="h2">Tickets</Typography>
			<TableContainer>
			<Table className={classes.table} aria-label="simple table">
				{/* <TableHead>
					<TableRow>
						<TableCell>Dessert (100g serving)</TableCell>
						<TableCell align="right">Calories</TableCell>
						<TableCell align="right">Fat&nbsp;(g)</TableCell>
						<TableCell align="right">Carbs&nbsp;(g)</TableCell>
						<TableCell align="right">Protein&nbsp;(g)</TableCell>
					</TableRow>
				</TableHead> */}
				<TableBody>
				{rows.map((row) => (
					<TableRow key={row.date}>
						<TableCell align="right">{row.type}</TableCell>
						<TableCell align="right">{row.date.toString()}</TableCell>
						<TableCell align="right">{row.city}</TableCell>
						<TableCell align="right">{row.tickets}</TableCell>
						<TableCell align="right">{row.fbevent}</TableCell>
					</TableRow>
				))}
				</TableBody>
			</Table>
			</TableContainer>
		</div>
	);
}

export default Tickets;