import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { HashLink  } from 'react-router-hash-link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
		link: {
			textDecoration: 'none !important',
		},
		buttonContainer: {
			// width: "400px",
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
		},
		button: {
			// color: '#FFFFFF',
		},
		appBar: {
			backgroundImage: 'linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.8))',
		},
  }),
);

const MenuBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} color={'transparent'} elevation={0} position="fixed">
				<Toolbar>
					<Typography color={"primary"} variant="h6" className={classes.title}></Typography>
					<div className={classes.buttonContainer}>
						<HashLink className={classes.link} smooth to="/#home">
							<Button size='large' className={classes.button} color="secondary">VIDEO</Button>
						</HashLink>
						
						<HashLink className={classes.link} smooth to="/#about">
							<Button size='large' className={classes.button} color="secondary">About</Button>
						</HashLink>
						
						<HashLink className={classes.link} smooth to="/#compete">
							<Button size='large' className={classes.button} color="secondary">Compete</Button>
						</HashLink>
						
						<HashLink className={classes.link} smooth to="/#tickets">
							<Button size='large' className={classes.button} color="secondary">Tickets</Button>
						</HashLink>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default MenuBar;