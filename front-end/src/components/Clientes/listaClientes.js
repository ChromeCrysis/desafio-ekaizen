import React from 'react';
import * as S from './styles'
import { useEffect, useState } from 'react'

import api from '../../services/api'

function ListaClientes(){

    const [clientes, setClientes] = useState([])

  async function loadClientes(){
    await api.get(`/clientes/listar`)
    .then(response => {
      setClientes(response.data)
      console.log(response.data)
    })
  }

  useEffect(() => {
    loadClientes()
  }, [])

    return(
        <div className="container">
          <h3 style={{
            "padding": "2vh",
            "display": "flex",
            "justifyContent": "center"
          }}>Clientes</h3>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome do Cliente</th>
                <th scope="col">CNPJ</th>
                <th scope="col">Porte</th>
                <th scope="col">QTD Funcionarios</th>
                <th scope="col">Telefone(Contato)</th>
                </tr>
            </thead>
            <tbody>
                {
                    clientes.map(c => (
                        <tr>
                            <th scope="row">{c.id_cliente}</th>
                            <td>{c.nome}</td>
                            <td>{c.cnpj}</td>
                            <td>{c.porte_empresa}</td>
                            <td>{c.qtd_funcionarios}</td>
                            <td>{c.telefone}</td>
                        </tr>
                    ))
                }
                
            </tbody>
            </table>
        <a className="btn btn-primary" type="button" href="/cliente/cadastrocliente">Cadastrar Clientes</a>
        </div>
    )
}

export default ListaClientes