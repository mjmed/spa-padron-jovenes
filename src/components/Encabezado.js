import React from 'react';

import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    divHeader: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 50px',
        backgroundColor: theme.palette.secondary.main,
    },
    typoHeader: {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        
    }
}));

export const Encabezado = () => {

    const classes = useStyles();

    return (
        <div className={ classes.divHeader }>
            <Typography variant="h6" component="div" className={ classes.typoHeader }>
                Registro de Electores Jóvenes de la localidad de Mercedes
            </Typography>    
        </div>
    )
}
