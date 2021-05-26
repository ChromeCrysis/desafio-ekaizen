import React from 'react';
import * as S from './styles'
import { useEffect, useState } from 'react'

import api from '../../services/api'

function CadastraFerramentas(){

    const [nome_produto, setNomeProduto] = useState()
    const [base_pequeno, setBasePequeno] = useState()
    const [base_medio, setBaseMedio] = useState()
    const [base_grande, setBaseGrande] = useState()   

    async function cadastrarFerramentas(){
        await api.post(`/ferramentas/cadastro`, {
            nome_produto,
            base_pequeno,
            base_medio,
            base_grande
        })  
        .then(() => {
            alert('Ferramenta Cadastrada com sucesso!')
          })
          .catch(() => {
              alert('Não foi possível cadastrar a ferramenta, tente novamente!')
          })
    }
    return (
        <div className="container">
            <div className="card" style={{
                "padding": "2vh",
                "display": "flex",
                "position": "relative",
                "top": "3vh"
            }}>
                <div className="container">
                    <form className="form">
                        <h4>Cadastro de Ferramentas</h4>
                        <div className="row">
                            <div className="col">
                                <label className="form-label" for="#nome_produto">Nome Produto</label>
                                <input className="form-control col-md" id="nome_produto"
                                onChange={e => setNomeProduto(e.target.value)} value={nome_produto}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#base_pequeno">Base - Pequeno Porte</label>
                                <input className="form-control col-md" id="base_pequeno"
                                onChange={e => setBasePequeno(e.target.value)} value={base_pequeno}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#base_medio">Base - Medio Porte</label>
                                <input className="form-control col-md" id="base_medio"
                                onChange={e => setBaseMedio(e.target.value)} value={base_medio}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#base_grande">Base - Grande Porte</label>
                                <input className="form-control col-md" id="base_grande"
                                onChange={e => setBaseGrande(e.target.value)} value={base_grande}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <button className="btn btn-primary" onClick={cadastrarFerramentas}>Cadastrar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CadastraFerramentas