import { createTheme } from '@mui/material/styles';


const theme = createTheme({
	typography: {
		h6: {
			fontSize: '18px'
		},
		body2: {
			fontSize: '13px'
		}
	},
	palette: {
		primary: {
		  light: '#5f7b98',
		  main: '#375A7F',
		  dark: '#263e58',
		  contrastText: '#fff',
		},
		secondary: {
		  light: '#696969',
		  main: '#444444',
		  dark: '#2f2f2f',
		  contrastText: '#fff',
		},
        error: {
            light: '#eb6f63',
            main: '#E74C3C',
            dark: '#a1352a',
            contrastText: '#fff',
        },
        warning: {
            light: '#f5af41',
            main: '#F39C12',
            dark: '#aa6d0c',
            contrastText: '#fff',
        },
        info: {
            light: '#5cace2',
            main: '#3498DB',
            dark: '#246a99',
            contrastText: '#fff',
        },
        success: {
            light: '#33c9a3',
            main: '#00BC8C',
            dark: '#008362',
            contrastText: '#fff',
        },
	  },
});

export default theme;
