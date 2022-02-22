import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <>

            <Box className="bkColor" >
                <Grid className='style'>
                    <img src='https://i.imgur.com/UBnOQzy.png'/>
                </Grid>
            </Box>
            <AppBar position="static" className="backColor">
                <Toolbar variant="dense">
                   

                    <Box className='backColor'>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" className='neon'>
                                Home
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" className='neon'>
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" className='neon'>
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" className='neon'>
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box className='bColor'>
                                <Typography variant="h6" className='neon'>
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;