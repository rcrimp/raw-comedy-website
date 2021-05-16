import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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
  }),
);

const MenuBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
      <AppBar elevation={0} color={"transparent"} position="fixed">
        <Toolbar>
          <Typography color={"primary"} variant="h6" className={classes.title}>
            RAW
          </Typography>
          <Button color="primary">About</Button>
          <Button color="primary">Tickets</Button>
          <Button color="primary">Compete</Button>
        </Toolbar>
      </AppBar>
    </div>
	);
}

export default MenuBar;