import React, { useContext, useState } from 'react';

import { Button, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import SearchIcon from '@mui/icons-material/Search';

import { ElectoresContext } from '../context/ElectoresContext';


const useStyles = makeStyles((theme) => ({
	paper: {
        width: '100%',
		margin: 0,
        backgroundColor: theme.palette.grey[50],
	},
    textField: {
        backgroundColor: 'white'
    }
}));

export const Formulario = () => {

    const classes = useStyles();

    const [formValues, setFormValues] = useState({
        domicilio: '',
        barrio: ''
    });

    const { domicilio, barrio } = formValues;

    const { buscarElectores, setConsultar, setCargando } = useContext( ElectoresContext );

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    }

    const handleSubmit = e => {

        e.preventDefault();

        buscarElectores(formValues);
        setConsultar(true);
        setCargando( true );

        setFormValues({
            domicilio: '',
            barrio: ''
        });
    }

    return (

        <Paper
            elevation={0}
            variant="outlined"
            className={ classes.paper }
        >
            <Typography variant="h6" textAlign="center" style={{ padding: '1rem' }}>Consultar Electores</Typography>
            <Divider />

            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
                style={{ padding: '3rem'}}
                component="form"
                onSubmit={ handleSubmit }
            >
                <Grid item style={{ width: '100%' }}>
                    <TextField
                        variant="outlined"
                        autoFocus
                        fullWidth
                        label="Domicilio"
                        placeholder="Consultar por domicilio"
                        name="domicilio"
                        value={ domicilio }
                        onChange={ handleInputChange }
                        className={ classes.textField }
                    />
                </Grid>
                <Grid item style={{ width: '100%' }}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        label="Barrio"
                        placeholder="Consultar por barrio"
                        name="barrio"
                        value={ barrio }
                        onChange={ handleInputChange }
                        className={ classes.textField }
                    />
                </Grid>
                <Grid item style={{ width: '100%' }}>
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        size="large"
                        // startIcon={ <SearchIcon /> }
                    >
                        <i className="bi bi-search mr-2" style={{ marginRight: 8 }}></i> Consultar
                    </Button>
                </Grid>
            </Grid>

        </Paper>
    )
}
