import React from 'react';

import { CssBaseline, Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { Encabezado } from './components/Encabezado';
// import { Footer } from './components/Footer';

import theme from './themeConfig';
import ElectoresProvider from './context/ElectoresContext';


const App = () => {
    return (
        <ThemeProvider theme={ theme }>
            <ElectoresProvider>

                <Header />

                <Encabezado />

                <Container maxWidth="md" style={{ marginTop: 50 }}>

                    <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item style={{ width: '100%', }}>
                            <Formulario />
                        </Grid>

                        <Grid item style={{ width: '100%', }}>
                            <Listado />
                        </Grid>
                    </Grid>

                </Container>

                {/* <Footer /> */}

                <CssBaseline />

            </ElectoresProvider>
        </ThemeProvider>
    );
}

export default App;
