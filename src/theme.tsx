import { createMuiTheme } from "@material-ui/core";

/* 200 */
import nexaLightWoff from "./fonts/nexa-light-webfont.woff";
import nexaLightWoff2 from "./fonts/nexa-light-webfont.woff2";

/* 400 */
import nexaRegularWoff from "./fonts/nexa-regular-webfont.woff";
import nexaRegularWoff2 from "./fonts/nexa-regular-webfont.woff2";

/* 500 */
import nexaBookWoff from "./fonts/nexa-book-webfont.woff";
import nexaBookWoff2 from "./fonts/nexa-book-webfont.woff2";

/* 600 */
import nexaBoldWoff from "./fonts/nexa-bold-webfont.woff";
import nexaBoldWoff2 from "./fonts/nexa-bold-webfont.woff2";

/* 700 */
import nexaHeavyWoff from "./fonts/nexa-heavy-webfont.woff";
import nexaHeavyWoff2 from "./fonts/nexa-heavy-webfont.woff2";

/* 900 */
import nexaBlackWoff from "./fonts/nexa-black-webfont.woff";
import nexaBlackWoff2 from "./fonts/nexa-black-webfont.woff2";

const fontFaces = [
	{
		fontFamily: 'Nexa',
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontWeight: 200,
		src: `
			url(${nexaLightWoff2}) format('woff2'),
			url(${nexaLightWoff}) format('woff')
		`,
		// unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
	},
	{
		fontFamily: 'Nexa',
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontWeight: 400,
		src: `
			url(${nexaRegularWoff2}) format('woff2'),
			url(${nexaRegularWoff}) format('woff')
		`,
		// unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
	},
	{
		fontFamily: 'Nexa',
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontWeight: 500,
		src: `
			url(${nexaBookWoff2}) format('woff2'),
			url(${nexaBookWoff}) format('woff')
		`,
	},
	{
		fontFamily: 'Nexa',
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontWeight: 600,
		src: `
			url(${nexaBoldWoff2}) format('woff2'),
			url(${nexaBoldWoff}) format('woff')
		`,
	},
	{
		fontFamily: 'Nexa',
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontWeight: 700,
		src: `
			url(${nexaHeavyWoff2}) format('woff2'),
			url(${nexaHeavyWoff}) format('woff')
		`,
	},
	{
		fontFamily: 'Nexa',
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontWeight: 900,
		src: `
			url(${nexaBlackWoff2}) format('woff2'),
			url(${nexaBlackWoff}) format('woff')
		`,
	}
];

const theme = createMuiTheme({
	palette: {
		primary: {
		  main: "#FFFFFF",
		},
		secondary: {
		  main: "#808080",
		},
	  },
	typography: {
	fontFamily: 'Nexa, Arial',
		h1: {
			fontWeight: 900,
		},
		h2: {
			fontWeight: 900,
		},
		h3: {
			fontWeight: 700,
		},
		h4: {
			fontWeight: 700,
		},
		h5: {
			fontWeight: 600,
		},
		h6: {
			fontWeight: 500,
		},
		body1: {
      fontWeight: 400,
    },
		body2: {
      fontWeight: 200,
    },
		subtitle1: {
      fontWeight: 400,
    },
		subtitle2: {
      fontWeight: 200,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': fontFaces as React.CSSProperties[],
      },
    },
  },
});

export default theme;