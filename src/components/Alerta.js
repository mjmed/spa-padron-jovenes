import React from 'react';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
	alert: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiAlert-message': {
            fontSize: '0.9rem',
            fontWeight: 700,
        }
	},

}));

export const Alerta = ({ mensaje }) => {

    const classes = useStyles();

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="warning" className={ classes.alert }>{ mensaje }</Alert>
        </Stack>
    )
}
