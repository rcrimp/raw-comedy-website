import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from 'react-router-dom';

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
// import DunedinComedyLogo from '../images/dunedin-comedy.jpg';
// import RemarkablyFunnyLogo from '../images/remarkably-funny.jpg';
const DunedinComedyLogo = "https://live.staticflickr.com/65535/51190004345_72a254feab_w.jpg";
const RemarkablyFunnyLogo = "https://live.staticflickr.com/65535/51189707144_737e3b6106_w.jpg";


const useStyles = makeStyles((theme) => ({
	root: {
		color: "white",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "stretch",
		// minHeight: "100vh",
		// paddingTop: "64px",
	},
	footer: {
		padding: "16px",
		flexGrow: 10,
		width: "100%",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
	},
	producerText: {
		padding: "0 16px",
		height: "64px",
		textAlign: "center",
		lineHeight: "64px",
		alignItems: "center",
		justifyContent: "center",
	},
	producer: {
		color: "#FFF",
		textDecoration: 'none',
		display: "flex",
		flexDirection: "row",
		"& img": {
			width: "64px",
			borderRadius: "50%",
		},
	}
}));

const Tickets = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div className={classes.root} >
			<div className={classes.footer}>
				<Typography className={classes.producerText} variant="body1">Produced by </Typography>
				<a className={classes.producer} href={'https://www.facebook.com/dunedincomedy'} >
					<img src={DunedinComedyLogo} />
					<Typography className={classes.producerText} variant="body1">Dunedin Comedy</Typography>
				</a>
				<a className={classes.producer} href={'https://www.facebook.com/queenstowncomedy'}>
					<img src={RemarkablyFunnyLogo} />
					<Typography className={classes.producerText} variant="body1">Remarkably Funny</Typography>
				</a>
			</div>
		</div>

	);
}

export default Tickets;