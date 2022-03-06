import React, {useState} from 'react' 
import {  AppBar, Tab, Tabs, Typography, Box } from "@material-ui/core";
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";


function TabPostagem() {
        const [value, setValue] = useState('1')
        function handleChange(event: React.ChangeEvent<{}>, newValue: string){
            setValue(newValue);
}       

    return(
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered className='menu' onChange={handleChange}>
                        <Tab className='letra' label="Todas as postagens" value="1"/>
                        <Tab className='letra' label="Sobre nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" className="bgcolor">
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel className='titulo1' value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="center" className="titulo2"> 
                    Olá, eu sou a Mandy! 
                    <p>Eu sou uma carioca com o coração paulista. Tenho 30 anos e meu maior hobby é viajar! </p>
                    <p>Eu vim de uma família bem dividida geograficamente, e por isso raramente estamos todos no mesmo lugar, ou até mesmo na mesma cidade.</p>
                    <p>Minha vontade é passar para todos as experiências que eu já tive com viagens e dar dicas de como sair de algumas enrascadas.</p>
                    <p>Bem-vindos ao meu mundo! Espero que gostem! :)</p>

                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;


