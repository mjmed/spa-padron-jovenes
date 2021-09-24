import { Grid } from '@mui/material';
import React, { useContext } from 'react';

import { ElectoresContext } from '../context/ElectoresContext';
import { useDataGrid } from '../hooks/useDataGrid';
import { Alerta } from './Alerta';
import { Resultados } from './Resultados';
import { Spinner } from './ui/Spinner';


export const Listado = () => {

    const { electores, cargando, error } = useContext( ElectoresContext );

    const getNombreCompleto = (params) => {
		return `${ params.row.apellido }, ${ params.row.nombre }`;
	}

    const columns = [
		{
			field: 'matricula',
			headerName: 'Matrícula',
            sortable: false,
            headerClassName: 'super-app-theme--header',
		},
		{
			field: 'clase',
			headerName: 'Clase',
            headerClassName: 'super-app-theme--header',
		},
        {
            field: 'nombreCompleto',
            headerName: 'Apellido y Nombre',
            flex: 1,
			minWidth: 300,   
            valueGetter: getNombreCompleto,
            headerClassName: 'super-app-theme--header',
        },
		{
			field: 'domicilio',
			headerName: 'Domicilio',
			width: 300,
            headerClassName: 'super-app-theme--header',
		},
        {
			field: 'barrio',
			headerName: 'Barrio',
			width: 250,
            sortable: false,
            headerClassName: 'super-app-theme--header',
		},
        {
			field: 'tipoDoc',
			headerName: 'Tipo Documento',
            width: 150,
            sortable: false,
            headerClassName: 'super-app-theme--header',
		},
        {
			field: 'sexo',
			headerName: 'Sexo',
            align: 'center',
            headerClassName: 'super-app-theme--header',
		},
        {
			field: 'circuito',
			headerName: 'Circuito',
            align: 'center',
            headerClassName: 'super-app-theme--header',
		},
        {
			field: 'mesa',
			headerName: 'Mesa',
            align: 'center',
            headerClassName: 'super-app-theme--header',
		},
        {
			field: 'orden',
			headerName: 'Orden',
            align: 'center',
            headerClassName: 'super-app-theme--header',
		},
	];
    
    const { DataGridCustom } = useDataGrid( columns, electores );
    
    return (

        <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
        >
            {
                (cargando)
                    ? <Grid item style={{ marginTop: 50 }}><Spinner /></Grid>
                    : (



                        ( error )
                            ? <Grid item style={{ width: '100%' }}><Alerta mensaje="No se encontraron resultados" /></Grid>
                            : (
                                (electores.length > 0)
                                    ? (
                                        <>
                                            <Grid item style={{ width: '100%' }}><Resultados /></Grid>
                                            <Grid item style={{ width: '100%' }}><DataGridCustom /></Grid>
                                        </>
                                    )
                                    : null
                            )
                            
                        
                    )
            }
        </Grid>
        
    )
}












