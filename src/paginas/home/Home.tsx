import React from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import "./Home.css";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className="home2"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              component="h5"
              align="center"
              className="titulo"
            >
              Olá!
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              Wanderlust "(s.)";
              <p>Forte desejo ou impulso de viajar e explorar o mundo para entender sua própria existência.</p>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button variant="outlined" className="botao">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid xs={12} className="postagens">
        <TabPostagem />
      </Grid>
    </>
  );
}

export default Home;
