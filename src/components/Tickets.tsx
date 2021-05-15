import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

const useStyles = makeStyles((theme) => ({
	root: {
	},
}));

const Tickets = () => {
	const classes = useStyles();

	return (
		<div className={classes.root} >
			<Typography variant="body1">Tickets</Typography>
		</div>
	);
}

export default Tickets;