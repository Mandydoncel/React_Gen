import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Navbar.css";

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  function goLogout() {
    setToken('');
    alert("Usuário deslogado");
    history.push('/login');
  }

  return (
    <>
      <Box className="bkColor">
        <Grid className="style">
          <img src="https://i.imgur.com/UBnOQzy.png" />
        </Grid>
      </Box>
      <AppBar position="static" className="backColor">
        <Toolbar variant="dense">
          <Box className="backColor">
            <Link to="/home" className="text-decorator-none">
              <Box mx={3} className="cursor">
                <Typography variant="h6" className="neon">
                  Home
                </Typography>
              </Box>
            </Link>

            <Link to="/posts" className="text-decorator-none">
              <Box mx={3} className="cursor">
                <Typography variant="h6" className="neon">
                  Postagens
                </Typography>
              </Box>
            </Link>

            <Link to="/tema" className="text-decorator-none">
              <Box mx={3} className="cursor">
                <Typography variant="h6" className="neon">
                  Tema
                </Typography>
              </Box>
            </Link>

            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={3} className="cursor">
                <Typography variant="h6" className="neon">
                  Cadastrar Tema
                </Typography>
              </Box>
            </Link>

            <Box className="bColor" onClick={goLogout}>
              <Typography variant="h6" className="neon">
                Logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
