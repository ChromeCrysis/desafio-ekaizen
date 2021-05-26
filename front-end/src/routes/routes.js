import React from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom';

import Home from '../views/Home';
import CadastrarClientes from '../views/Clientes/cadastrarClientes';
import AtualizarClientes from '../views/Clientes/atualizarClientes';
import ListarCliente from '../views/Clientes/listarClientes'

import CadastrarFerramentas from '../views/Ferramentas/cadastrarFerramentas';
import ListarFerramentas from '../views/Ferramentas/listarFerramentas';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cliente" exact component={ListarCliente}/>
        <Route path="/cliente/cadastrocliente" exact component={CadastrarClientes}/>
        <Route path="/cliente/:id_cliente" exact component={AtualizarClientes}/>
        <Route path="/ferramenta" exact component={ListarFerramentas}/>
        <Route path="/ferramenta/cadastroferramenta" exact component={CadastrarFerramentas}/>
      </Switch>
    </BrowserRouter>
  )
}