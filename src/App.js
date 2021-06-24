import React from 'react';
import Pesquisa from './Components/Pesquisa/Pesquisa';
import { Container } from '@material-ui/core';

export default function Lista () {

  return (
      <Container component="article">
        <h1>Busca de repositórios do GitHub</h1>
        <Pesquisa/>
      </Container>
  );
}