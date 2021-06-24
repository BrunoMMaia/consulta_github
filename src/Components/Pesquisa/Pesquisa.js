import React, { useState, Fragment } from 'react';
import { TextField, Button} from '@material-ui/core';
import CardComponet from '../Card/CardComponet';
import axios from 'axios';

function Pesquisa(){
    const [usuario, setUsuario] = useState([]);
    const [repositorios, setRepositorios, ] = useState([]);
 
    const getPesquisa = () => {
      axios.get('https://api.github.com/users/' + usuario + '/repos')
          .then(response => {
            setRepositorios(response.data);
          })
    }
  
    const Campturacampo = (e) => {
      setUsuario(e.target.value);
    }

    return(
        <Fragment>
            <TextField variant="outlined" size='small' onChange={(e) => {Campturacampo(e)}} placeholder="Digite o usuario" />
            <Button variant="contained" color="primary" onClick={getPesquisa}>
            Pesquisar
            </Button>
            <CardComponet repositorios ={repositorios} /> 
        </Fragment>
    );
}

export default Pesquisa;