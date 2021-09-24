import { padronJovenes } from '../data/padron-jovenes';

export const obtenerElectoresPorDomicilio = ( domicilio ) => {

    const electores = padronJovenes.filter( joven => joven.domicilio.toLowerCase().includes( domicilio.toLowerCase() ) );

    return electores;
}

export const obtenerElectoresPorBarrio = ( barrio ) => {

    const electores = padronJovenes.filter( joven => joven.barrio.toLowerCase().includes( barrio.toLowerCase() ) );

    return electores;
}