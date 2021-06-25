## Desafio Buscar Repositórios do GitHub e agrupar por linguagens.

### passo a passo para desenvolvimento:
 1 - Ao criar um novo projeto React, excluimos todos os arquivos desnecessarios.  
    Ficamos somente com a pasta public, src e os arquivos App.js e index.js criados por padrão no React.

 2 - Foi criada uma pasta chamada 'Components' para os componentes de Pesquisa e exibição dos resultados. 

 3 - Para facilitar a estilização css foi utilizado a biblioteca do Material-UI (Site:https://material-ui.com/pt/)
     instalando com o NPM: npm install @material-ui/core

     - Dentro do arquivo App.js o elementro 'Container' foi importado do material-ui

 4 - O primeiro componente desenvolvido foi o Pesquisa.js. 
      - TextField -> campo onde vai ser informado o nome do repositorio. 
      a variável 'usuario' captura o valor do campo com o evento 'Campturacampo'
      - Button -> no evento 'onClick' é feito a consulta do repositorio chamando o evento 'getPesquisa'. 
      Para fazer a requisição HTTP a Api do Github foi utilizado o axios. 
      Na API do GitHub é feita uma requisição Get passando o nome do usario. Ela retorna todos os repositorios do usuario.   
        Exemplo: 'https://api.github.com/users/' + usuario + '/repos' 
      Esse resultado é armazenado no array repositórios.

5 - O array repositorios é enviado para o componente CardComponet.js como parametro através da props.  

6 - Dentro do componente CardComponet.js o resultado é preparado para ser exibido na tela. 
    - Primeiro temos um array que recebe o campo 'language' com as linguagens dos repositorios.
      É retirado os valores nulos e também os elementos repetidos.
    - Ao imprimir esse array de linguagens, é feito um filter() comparando com o array recebido pela props, para saber em qual repositorio 
    a linguagem que está sendo listada está presente. E assim já listado os nomes dos repositorios.

### Testes: 
- Para realizar os testes primeiro foi definido o Resultado final esperado e depois 
comparando com o resultado obtido. 
    Exemplo:
    - Utilizando a consulta https://api.github.com/users/Facebook/repos 
    - A linguagem Ruby tem 4 resultados e a Python 3 resultados. 
    - Logo é esperado que o resultado obtido seja encontrar 4 repositorios listados para Ruby e 3 para Python.
    - O mesmo teste foi feito utilizando o repositorio https://api.github.com/users/Instagram/repos e o meu repositorio pessoal https://api.github.com/users/BrunoMMaia/repos.
    
    
    
    
<img src="https://github.com/BrunoMMaia/consulta_github/blob/master/apresentacao.gif?raw=true">


