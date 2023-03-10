import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { Container } from '@mui/material'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import '../style/Button.css'
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    container: {
        maxHeight: 440,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
});

export default function ConsulasApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user');
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    },);
    const url = 'http://appcomercial.iafap.local:4000/'
    //const url = 'http://localhost:4000/'
    const [arrayDatosConsultas, setArrayDatosConsultas] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const classes = useStyles();
    const [filter, setFilter] = useState('');
    const [filterCiudad, setFilterCiudad] = useState('');
    const [filterUltimaAccion, setFilterUltimaAccion] = useState('');
    const [filterCodigoPostal, setFilterCodigoPostal] = useState('');
    const [open, setOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const filtroDepartamento = event => {
        setFilter(event.target.value);
        let filtered = arrayDatosConsultas;

        if (filter !== '') {
            filtered = filtered.filter(item => {
                return item.departamento.toLowerCase().includes(filter.toLowerCase());
            });
        }

        if (filterCiudad !== '') {
            filtered = filtered.filter(item => {
                return item.ciudad.toLowerCase().includes(filterCiudad.toLowerCase());
            });
        }
        if (filterCodigoPostal !== '') {
            filtered = filtered.filter(item => {
                return item.codigoPostal === parseInt(filterCodigoPostal, 10);
            });
        }

        if (filterUltimaAccion !== '') {
            filtered = filtered.filter(item => {
                return item.respuesta.toLowerCase().includes(filterUltimaAccion.toLowerCase());
            });
        }
        setFilteredData(filtered);
    };

    const filtroCiudad = event => {
        setFilterCiudad(event.target.value);
        let filtered = arrayDatosConsultas;

        if (filter !== '') {
            filtered = filtered.filter(item => {
                return item.departamento.toLowerCase().includes(filter.toLowerCase());
            });
        }

        if (filterCiudad !== '') {
            filtered = filtered.filter(item => {
                return item.ciudad.toLowerCase().includes(filterCiudad.toLowerCase());
            });
        }
        if (filterCodigoPostal !== '') {
            filtered = filtered.filter(item => {
                return item.codigoPostal === parseInt(filterCodigoPostal, 10);
            });
        }

        if (filterUltimaAccion !== '') {
            filtered = filtered.filter(item => {
                return item.respuesta.toLowerCase().includes(filterUltimaAccion.toLowerCase());
            });
        }

        setFilteredData(filtered);
    };

    const filtroUltimaAccion = event => {
        setFilterUltimaAccion(event.target.value);
        let filtered = arrayDatosConsultas;

        if (filter !== '') {
            filtered = filtered.filter(item => {
                return item.departamento.toLowerCase().includes(filter.toLowerCase());
            });
        }

        if (filterCiudad !== '') {
            filtered = filtered.filter(item => {
                return item.ciudad.toLowerCase().includes(filterCiudad.toLowerCase());
            });
        }

        if (filterCodigoPostal !== '') {
            filtered = filtered.filter(item => {
                return item.codigoPostal === parseInt(filterCodigoPostal, 10);
            });
        }

        if (filterUltimaAccion !== '') {
            filtered = filtered.filter(item => {
                return item.respuesta.toLowerCase().includes(filterUltimaAccion.toLowerCase());
            });
        }

        setFilteredData(filtered);
    };

    const filtroCodigoPostal = event => {
        setFilterCodigoPostal(event.target.value);
        let filtered = arrayDatosConsultas;

        if (filter !== '') {
            filtered = filtered.filter(item => {
                return item.departamento.toLowerCase().includes(filter.toLowerCase());
            });
        }

        if (filterCiudad !== '') {
            filtered = filtered.filter(item => {
                return item.ciudad.toLowerCase().includes(filterCiudad.toLowerCase());
            });
        }

        if (filterUltimaAccion !== '') {
            filtered = filtered.filter(item => {
                return item.respuesta.toLowerCase().includes(filterUltimaAccion.toLowerCase());
            });
        }

        if (filterCodigoPostal !== '') {
            filtered = filtered.filter(item => {
                return item.codigoPostal === parseInt(filterCodigoPostal, 10);
            });
        }

        setFilteredData(filtered);
    };

    useEffect(() => {
        let filtered = arrayDatosConsultas;
        if (filter !== '') {
            filtered = filtered.filter(item => {
                return item.departamento.toLowerCase().includes(filter.toLowerCase());
            });
        }

        if (filterCiudad !== '') {
            filtered = filtered.filter(item => {

                return item.ciudad.toLowerCase().includes(filterCiudad.toLowerCase());
            });
        }

        if (filterUltimaAccion !== '') {
            filtered = filtered.filter(item => {
                return item.respuesta.toLowerCase().includes(filterUltimaAccion.toLowerCase());
            });
        }

        if (filterCodigoPostal !== '') {
            filtered = filtered.filter(item => {
                return item.codigoPostal === parseInt(filterCodigoPostal, 10);
            });
        }
        setFilteredData(filtered);
    }, [filterUltimaAccion, filter, filterCiudad, filterCodigoPostal, arrayDatosConsultas]);


    const fetchData = async () => {
        const res = await fetch(`${url}datosaApp`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        });
        const data = await res.json();
        setArrayDatosConsultas(data);
        setFilteredData(data);

    };

    useEffect(() => {
        fetchData();
    }, []);


    const cargarDatos = async () => {
        try {
            const datos = filteredData.map(item => {
                console.log(item.fechaN)
                return {
                    cedula: item.cedula,
                    fechaN: item.fechaN
                }
            });
            const response = await fetch(`${url}ultimaConsulta/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            })
            const json = await response.json();
            setResponseMessage(json.message);
            setOpenSnackbar(true);
            handleClose()
            fetchData();
        } catch (error) {
            setResponseMessage(error);
            setOpenSnackbar(true);
        }
    }

    return (
        <Container>
            <nav className="navbar d-flex justify-content-center">
                <h2 className="navbar-brand mx-auto text-center" style={{ color: "#B83E42" }}>Consultas APP</h2>
            </nav>
            <Box component="form" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <TextField
                    label="Filtro por Departamento"
                    onChange={filtroDepartamento}
                    value={filter}
                    style={{ marginRight: "1rem" }}
                />
                <TextField
                    label="Filtro por Ciudad"
                    onChange={filtroCiudad}
                    value={filterCiudad}
                    style={{ marginRight: "1rem" }}
                />
                <TextField
                    label="Filtro por Ultima Accion"
                    onChange={filtroUltimaAccion}
                    value={filterUltimaAccion}
                    style={{ marginRight: "1rem" }}
                />

                <TextField
                    label="Filtro CP"
                    onChange={filtroCodigoPostal}
                    value={filterCodigoPostal}
                    style={{ marginRight: "1rem" }}
                />


                <Button style={{ color: "#BE3A4A", marginTop: '1em', marginLeft: "10rem" }} onClick={handleClickOpen}>Consultar</Button>
            </Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirmar</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ??Est?? seguro de querer cargar los datos?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={cargarDatos} color="primary">
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={openSnackbar}
                onClose={() => setOpenSnackbar(false)}
                message={responseMessage}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            />
            <TableContainer className={classes.container} component={Paper} style={{ overflowX: 'auto', marginTop: '1em' }}>
                <Table className={classes.table} aria-label="data grid">
                    <TableHead >
                        <TableRow >
                            <TableCell >Cedula</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Departamento</TableCell>
                            <TableCell>Ciudad</TableCell>
                            <TableCell>Ultima Accion</TableCell>
                            <TableCell>Codigo Postal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.slice(0, 10).map(row => (
                            <TableRow key={row.cedula}>
                                <TableCell component="th" scope="row">
                                    {row.cedula}
                                </TableCell>
                                <TableCell>{row.fechaN}</TableCell>
                                <TableCell>{row.departamento}</TableCell>
                                <TableCell>{row.ciudad}</TableCell>
                                <TableCell>{row.respuesta}</TableCell>
                                <TableCell>{row.codigoPostal}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="h6" style={{ color: '#BE3A4A' }} >
                Cantidad de registros: {filteredData.length}
            </Typography>
        </Container>
    );
}