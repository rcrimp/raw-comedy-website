import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Button, Typography, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		margin: "auto",
		maxWidth: "1000px",
		// maxHeight: "800px",
		paddingTop: "64px",
	},
	text: {
		color: "white",
		textAlign: "center",
		// margin: "auto",
		// marginBottom: 0,
		textShadow: '0 0px 10px #000000ff',
	},
}));

const Images = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	const Images = [
		{
			url: 'audience.jpg',
			label: 'The New Athenaum Theatre with the audience sitting in patient anticipation.',
		},
		{
			url: 'greenroom.jpg',
			label: 'The 2020 Finalists: Harriet Moir, Shane Mulvey, Sean Tinker, Hamish Mabon-Ross, Maggie Rogers, Mike "Chewie" Benett, Megan Cartwright, and John.',
		},
		{
			url: 'winner.jpg',
			label: 'Congratulations to Maggie Rogers for winning the 2020 Lower South Island Raw Comedy Quest',
		},
		{
			url: 'judges.jpg',
			label: 'Big thank you to our judges Gareth McMillan and H-J Kilkelly; our Host Marty Bright; and show Producer Tim Müller.',
		},
		{
			url: 'harriet.jpg',
			label: 'Harriet Moir',
		},
		{
			url: '2-shane.jpg',
			label: 'Shane Mulvey',
		},
		{
			url: 'hamish.jpg',
			label: 'Hamish Mabon-Ross',
		},
		{
			url: '2-maggie.jpg',
			label: 'Maggie Rogers',
		},
		{
			url: '2-chewie.jpg',
			label: 'Mike "Chewie" Bennett',
		},
		{
			url: '2-megan.jpg',
			label: 'Megan Cartwright',
		},
		{
			url: '2-sean.jpg',
			label: 'Sean Tinker',
		},
		{
			url: '2-john.jpg',
			label: 'John',
		},
		{
			url: 'winner-standing-ovation.jpg',
			label: 'Applause for the 2020 Winner Maggie Rogers.',
		},
		{
			url: 'audience-leaving.jpg',
			label: 'Audience leaving all tuckered out from laughing.',
		}
	];

	return (
		<div className={classes.root} >
			<Typography className={classes.text} align="center" variant="h3">Last Year's Regional Finals</Typography>
			<Carousel
				autoFocus={false} infiniteLoop={true} showStatus={false} autoPlay={false}
			>
				{Images.map((image, i) => (
					<div>
						<img src={`${window.location.origin}${'/gallery/'}${image.url}`}/>
					<p className="legend">{image.label}</p>
				</div>
				))}
				
			</Carousel>
		</div>
	);
}

export default Images;