import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const shadowSettings = '0 2px 10px #000000BB';

const useStyles = makeStyles((theme) => ({
	root: {
		// position: "relative",
		width: "100%",
		[theme.breakpoints.up('md')]: {
      height: "100vh",
    },
		backgroundColor: '#000000', //`rgb(${r}, ${g}, ${b})`,
	},
	rootStretch: {
		// position: "relative",
		width: "100%",
		[theme.breakpoints.up('md')]: {
      minHeight: "100vh",
    },
		backgroundColor: '#000000', //`rgb(${r}, ${g}, ${b})`,
	},
	scrollIcon: {
		position: "absolute",
		top: 0,
		zIndex: 100000,
		color: "#FFFFFF",
		display: "block",
		margin: "auto",
		// marginTop: "100px",
		// marginLeft: "auto",
		// marginRight: "auto",
		width: "100px",
		height: "100px",
		filter: `drop-shadow(${shadowSettings})`,
	},
}));

const FullScreenContainer = (props:any) => {

	const classes = useStyles();

	return (
		<section id={props.anchor} className={props.stretch ? classes.rootStretch: classes.root} >
			{props.content}
			{/* <KeyboardArrowDownIcon className={classes.scrollIcon}/> */}
		</section >
	);
}

export default FullScreenContainer;