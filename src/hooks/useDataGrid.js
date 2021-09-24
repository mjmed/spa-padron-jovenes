import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
        height: 400,

        '& .super-app-theme--header': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',

            '& .MuiDataGrid-sortIcon': {
                color:'#fff'
            }
        },
	},
}));

export const useDataGrid = ( columns, rows ) => {

    const classes = useStyles();

    const DataGridCustom = () => {

        return (
            <div
                className={ classes.root }
                style={ (rows.length > 0) ? { height: 440 } : { height: 280 }}
            >
                <DataGrid
                    autoHeight     
                    rows={ rows }
                    columns={ columns }
                    disableColumnMenu
                    disableSelectionOnClick
                    autoPageSize
                    pagination
                    hideFooterPagination
                />
            </div>
        )
    }

    return {
        DataGridCustom
    }
}

useDataGrid.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
}
