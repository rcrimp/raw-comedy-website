import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';


const useStyles = makeStyles((theme) => ({
	root: {
	},

}));

const About = () => {
	const classes = useStyles();

	return (
		<div className={classes.root} >

			<Typography variant="body1">About</Typography>
		</div>
	);
}

export default About;