import React, { useContext } from 'react';

import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ElectoresContext } from '../context/ElectoresContext';


const useStyles = makeStyles((theme) => ({
	paper: {
        backgroundColor: theme.palette.grey[50],
        padding: theme.spacing(3),
	},
    textField: {
        backgroundColor: 'white'
    }
}));

export const Resultados = () => {

    const classes = useStyles();

    const { busqueda, electores } = useContext( ElectoresContext );
    const { domicilio, barrio } = busqueda;

    return (
        <Paper
            elevation={0}
            variant="outlined"
            className={ classes.paper }
        >
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
            >
                <Grid item container direction="column" justifyContent="space-between" alignItems="center" spacing={1}>
                    <Grid item>
                        <Typography variant="subtitle2" style={{ textTransform: 'uppercase' }}>Total electores</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" color="primary">{ electores.length }</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" justifyContent="space-between" alignItems="center" spacing={1}>

                    
                        {
                            (domicilio !== '')
                                ? (
                                    <>
                                        <Grid item>
                                            <Typography variant="subtitle2" style={{ textTransform: 'uppercase' }}>Domicilio</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h5" color="primary">{ domicilio.toUpperCase() }</Typography>
                                        </Grid>
                                    </>
                                    
                                    )
                                : (
                                    <>
                                        <Grid item>
                                            <Typography variant="subtitle2" style={{ textTransform: 'uppercase' }}>Barrio</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h5" color="primary">{ barrio.toUpperCase() }</Typography>
                                        </Grid>
                                    </>
                                )
                        }
                    
                </Grid>
            </Grid>
        </Paper>
    )
}
