import React from 'react';
import * as S from './styles'
import { useEffect, useState } from 'react'

import api from '../../services/api'

function ListaFerramentas(){

    const [ferramentas, setFerramentas] = useState([])

  async function loadFerramentas(){
    await api.get(`/ferramentas/listar`)
    .then(response => {
      setFerramentas(response.data)
      console.log(response.data)
    })
  }

  useEffect(() => {
    loadFerramentas()
  }, [])

    return(
        <div className="container">
          <h3 style={{
            "padding": "2vh",
            "display": "flex",
            "justifyContent": "center"
          }}>Ferramentas</h3>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Base - Pequena</th>
                <th scope="col">Base - Média</th>
                <th scope="col">Base - Grande</th>
                </tr>
            </thead>
            <tbody>
                {
                    ferramentas.map(f => (
                        <tr>
                            <th scope="row">{f.id_ferramenta}</th>
                            <td>{f.nome_produto}</td>
                            <td>R$:{f.base_pequeno}</td>
                            <td>R$:{f.base_medio}</td>
                            <td>R$:{f.base_grande}</td>
                        </tr>
                    ))
                }
                
            </tbody>
            </table>
        <a className="btn btn-primary" type="button" href="/ferramenta/cadastroferramenta">Cadastrar Ferramentas</a>
        </div>
    )
}

export default ListaFerramentas