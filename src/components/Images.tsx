import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Typography } from '@material-ui/core';

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
		// {
		// 	url: 'https://live.staticflickr.com/65535/51190003740_307a6ddc57_h.jpg',
		// 	label: 'The New Athenaum Theatre with the audience sitting in patient anticipation.',
		// },
		{
			url: 'https://live.staticflickr.com/65535/51189156038_352501cc67_h.jpg',
			label: 'Applause for the 2020 Winner Maggie Rogers.',
		},
		{
			url: 'https://live.staticflickr.com/65535/51188938701_f86e9120e3_h.jpg',
			label: 'The 2020 Finalists: Harriet Moir, Shane Mulvey, Sean Tinker, Hamish Mabon-Ross, Maggie Rogers, Mike "Chewie" Benett, Megan Cartwright, and John.',
		},
		// {
		// 	url: 'https://live.staticflickr.com/65535/51188231277_fe315dd2a8_h.jpg',
		// 	label: 'Congratulations to Maggie Rogers for winning the 2020 Lower South Island Raw Comedy Quest',
		// },
		{
			url: 'https://live.staticflickr.com/65535/51190003670_e56a12e990_h.jpg',
			label: 'Big thank you to our judges Gareth McMillan and H-J Kilkelly; our Host Marty Bright; and show Producer Tim Müller.',
		},
		{
			url: 'https://live.staticflickr.com/65535/51190003855_fbb338a0ec_h.jpg',
			label: 'Harriet Moir',
		},
		{
			url: 'https://live.staticflickr.com/65535/51189156163_4ed4c157e7_h.jpg',
			label: 'Shane Mulvey',
		},
		{
			url: 'https://live.staticflickr.com/65535/51188231317_29b9dac6bd_h.jpg',
			label: 'Hamish Mabon-Ross',
		},
		{
			url: 'https://live.staticflickr.com/65535/51247253760_a26bdf89ce_h.jpg', // 'https://live.staticflickr.com/65535/51189156258_a1a56427ce_h.jpg',
			label: 'Maggie Rogers',
		},
		{
			url: 'https://live.staticflickr.com/65535/51189706709_170bbc5a57_h.jpg',
			label: 'Mike "Chewie" Bennett',
		},
		{
			url: 'https://live.staticflickr.com/65535/51188938786_83a4bcf9e4_h.jpg	',
			label: 'Megan Cartwright',
		},
		{
			url: 'https://live.staticflickr.com/65535/51188231387_3aec2d241b_h.jpg',
			label: 'Sean Tinker',
		},
		{
			url: 'https://live.staticflickr.com/65535/51189706689_ec29abdfa5_h.jpg',
			label: 'John',
		},
		// {
		// 	url: 'https://live.staticflickr.com/65535/51190003725_f4ca3d5295_h.jpg',
		// 	label: 'Audience leaving all tuckered out from laughing.',
		// }
	];

	return (
		<div className={classes.root} >
			<Typography className={classes.text} align="center" variant="h3">Last Year's Regional Finals</Typography>
			<Carousel
				autoFocus={false} infiniteLoop={true} showStatus={false} autoPlay={false}
			>
				{Images.map((image, i) => (
					<div key={`image-galleyr-${i}`}>
						{/* <img src={`${window.location.origin}${'/gallery/'}${image.url}`}/> */}
						<img src={image.url} alt={image.label}/>
					<p className="legend">{image.label}</p>
				</div>
				))}
				
			</Carousel>
		</div>
	);
}

export default Images;