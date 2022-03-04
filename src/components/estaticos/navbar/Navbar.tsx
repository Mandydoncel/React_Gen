import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import {toast} from 'react-toastify';

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    history.push('/login');
  }

  var navbarComponent;

  if(token != ""){
    navbarComponent =  <><Box className="bkColor">
      <Grid className="style">
        <img src="https://i.imgur.com/UBnOQzy.png" />
      </Grid>
    </Box><AppBar position="static" className="backColor">
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
      </AppBar></>

  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
