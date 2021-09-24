import React, { createContext, useEffect, useState } from 'react';

import { obtenerElectoresPorBarrio, obtenerElectoresPorDomicilio } from '../selectors/obtenerElectores';


export const ElectoresContext = createContext();

const ElectoresProvider = props => {

    const [ electores, setElectores ] = useState([]);
    const [ busqueda, buscarElectores ] = useState({
        domicilio: '',
        barrio: ''
    });
    const [ consultar, setConsultar ] = useState( false );
    const [ cargando, setCargando ] = useState( false );
    const [ error, setError ] = useState( false );

    const { domicilio, barrio } = busqueda;

    useEffect(() => {
        
        if ( consultar ) {

            let electores = [];

            if ( domicilio !== '') {

                electores = obtenerElectoresPorDomicilio( domicilio );
            }

            if ( barrio !== '') {
                electores = obtenerElectoresPorBarrio( barrio );
            }

            if ( electores.length === 0 ) {
                

                setTimeout(() => {
                    setError( true );
                    return;
                }, 1000);
            }

            setTimeout(() => {
                setElectores( electores );
                setCargando( false );     
            }, 1000);
        }

        // eslint-disable-next-line
    }, [busqueda]);

    return (
        <ElectoresContext.Provider
            value={{
                busqueda,
                electores,
                cargando,
                error,
                buscarElectores,
                setConsultar,
                setCargando,
            }}
        >
            { props.children }
        </ElectoresContext.Provider>
    )


}

export default ElectoresProvider;