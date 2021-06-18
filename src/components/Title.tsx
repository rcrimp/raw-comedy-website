import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import YouTube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';

import curtainBackground from "../images/curtain-HD.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		display: "inline-block",
		height: "100%",
		width: "100%",
		color: "white",
	},
	videoWrapper: {
		// backgroundImage: "url(../images/curtain-HD.jpg)",
		// background: "red",
		top: 0,
		bottom: 0,
		paddingBottom: 0, //"56.25%", /* 16:9 */
		height: 0,
		width: "100%",
		"& iframe, & embed, & object": {
			backgroundColor: "transparent",
			width: "75vw",
			height: "calc(75vw * 9/16)",
			paddingLeft: 0,
			margin: 0,
			[theme.breakpoints.down('sm')]: {
				width: "96vw",
				height: "calc(99vw * 9/16)",
			},
		},
		[theme.breakpoints.up('md')]: {
			paddingLeft: "12vw",
			paddingTop: "64px",
		},
		[theme.breakpoints.down('sm')]: {
			paddingTop: "56px",
		},
	},
	videoHeight: {
		height: "calc(75vw * 9/16)",
		marginTop: "128px",
		[theme.breakpoints.down('sm')]: {
			marginTop: "56px",
		},
	},
}));

const Title = (props: any) => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div className={classes.root} >
			<div className={classes.videoWrapper}>
				{/* <YouTube
					videoId={'5QM4lT5QGas'}                  // defaults -> null
					// id={string}                       // defaults -> null
					// className={string}                // defaults -> null
					// containerClassName={string}       // defaults -> ''
					opts={{
						height: "560",
						width: "349"
					}}                        // defaults -> {}
					// onReady={func}                    // defaults -> noop
					// onPlay={func}                     // defaults -> noop
					// onPause={func}                    // defaults -> noop
					// onEnd={func}                      // defaults -> noop
					// onError={func}                    // defaults -> noop
					// onStateChange={func}              // defaults -> noop
					// onPlaybackRateChange={func}       // defaults -> noop
					// onPlaybackQualityChange={func}    // defaults -> noop
				/> */}
				<Vimeo
					video="564619870"
					autoplay
					showPortrait
					showTitle
					showByline
					
				/>
			</div>
			{/* <div className={classes.videoHeight}></div> */}
		</div>
	);
}

export default Title;