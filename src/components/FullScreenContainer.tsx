import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const FullScreenContainer = (props:any) => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	
	const useStyles = makeStyles((theme) => ({
		root: {
			width: "100%",
			height: "100vh",
			backgroundColor: '#FF0000', //`rgb(${r}, ${g}, ${b})`,
		},
	}));

	const classes = useStyles();

	return (
		<div className={classes.root} >
			{props.content}
		</div>
	);
}

export default FullScreenContainer;