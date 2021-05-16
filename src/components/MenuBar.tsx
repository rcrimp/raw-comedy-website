import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import ReactDOM from 'react-dom'
// import HashLink from 'react-anchor-link-smooth-scroll'
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
		}
  }),
);

const MenuBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
      <AppBar elevation={0} color={"transparent"} position="absolute">
        <Toolbar>
          <Typography color={"primary"} variant="h6" className={classes.title}></Typography>
					
					<div className={classes.buttonContainer}>
						{/* <HashLink className={classes.link} smooth to="/raw#home">
							<Button size='large' className={classes.button} color="primary">^</Button>
						</HashLink> */}
						
						<HashLink className={classes.link} smooth to="/raw#about">
							<Button size='large' className={classes.button} color="secondary">About</Button>
						</HashLink>
						
						<HashLink className={classes.link} smooth to="/raw#compete">
							<Button size='large' className={classes.button} color="secondary">Compete</Button>
						</HashLink>
						
						<HashLink className={classes.link} smooth to="/raw#tickets">
							<Button size='large' className={classes.button} color="secondary">Tickets</Button>
						</HashLink>
					</div>

        </Toolbar>
      </AppBar>
    </div>
	);
}

export default MenuBar;