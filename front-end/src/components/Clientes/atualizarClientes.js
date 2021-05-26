import React from 'react';
import * as S from './styles'
import {Redirect} from 'react-router-dom'
import { useEffect, useState } from 'react'

import api from '../../services/api'

function AtualizaClientes({match}){

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [telefone, setTelefone] = useState()
    const [nome_fantasia, setNomeFantasia] = useState()
    const [email_empresa, setEmailEmpresa] = useState()
    const [telefone_comercial, setTelefoneComercial] = useState()
    const [cnpj, setCnpj] = useState()
    const [cep, setCep] = useState()
    const [endereco, setEndereco] = useState()
    const [bairro, setBairro] = useState()
    const [cidade, setCidade] = useState() 
    const [estado, setEstado] = useState()
    const [porte_empresa, setPorteEmpresa] = useState()
    const [qtd_funcionarios, setQtdFuncionarios] = useState()   

    async function visualizaClientes(){
        await api.get(`/clientes/listar/${match.params.id_cliente}`)  
        .then(response => {
            setNome(response.data.nome)
            setEmail(response.data.email)
            setTelefone(response.data.telefone)
            setNomeFantasia(response.data.nome_fantasia)
            setEmailEmpresa(response.data.email_empresa)
            setTelefoneComercial(response.data.telefone_comercial)
            setCnpj(response.data.cnpj)
            setCep(response.data.cep)
            setEndereco(response.data.endereco)
            setBairro(response.data.bairro)
            setCidade(response.data.cidade)
            setEstado(response.data.estado)
            setPorteEmpresa(response.data.porte_empresa)
            setQtdFuncionarios(response.data.qtd_funcionarios)
          })
          .catch(() => {
              alert('Não foi possível listar o cliente, tente novamente!')
          })
    }

    useEffect(() => {
        visualizaClientes()
      }, [visualizaClientes])

    return (
        <div className="container">
            <div className="card">
                <div className="container">
                    <form className="form">
                        <h4>Cadastro de Clientes</h4>
                        <div className="row">
                            <div className="col">
                                <label className="form-label" for="#nome">Nome</label>
                                <input className="form-control col-md" id="nome"
                                onChange={e => setNome(e.target.value)} value={nome}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#email-contato">E-mail(Contato)</label>
                                <input className="form-control col-md" id="email-contato" type="e-mail"
                                onChange={e => setEmail(e.target.value)} value={email}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#telefone">Telefone(Contato)</label>
                                <input className="form-control col-md" id="telefone"
                                onChange={e => setTelefone(e.target.value)} value={telefone}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="form-label" for="#nome-fantasia">Nome Fantasia</label>
                                <input className="form-control col-md" id="nome-fantasia"
                                onChange={e => setNomeFantasia(e.target.value)} value={nome_fantasia}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#email">E-mail</label>
                                <input className="form-control col-md" id="email" type="e-mail"
                                onChange={e => setEmailEmpresa(e.target.value)} value={email_empresa}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#telefone-comercial">Telefone(Comercial)</label>
                                <input className="form-control col-md" id="telefone-comercial"
                                onChange={e => setTelefoneComercial(e.target.value)} value={telefone_comercial}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="form-label" for="#cnpj">CNPJ</label>
                                <input className="form-control col-md" id="cnpj"
                                onChange={e => setCnpj(e.target.value)} value={cnpj}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#cep">CEP</label>
                                <input className="form-control col-md" id="cep"
                                onChange={e => setCep(e.target.value)} value={cep}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#endereco">Endereço</label>
                                <input className="form-control col-md" id="endereco"
                                onChange={e => setEndereco(e.target.value)} value={endereco}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="form-label" for="#bairro">Bairro</label>
                                <input className="form-control col-md" id="bairro"
                                onChange={e => setBairro(e.target.value)} value={bairro}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#cidade">Cidade</label>
                                <input className="form-control col-md" id="cidade"
                                onChange={e => setCidade(e.target.value)} value={cidade}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="#estado">Estado</label>
                                <input className="form-control col-md" id="estado"
                                onChange={e => setEstado(e.target.value)} value={estado}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="form-label" for="#porte-empresa">Porte Empresa</label>
                                <select className="form-select" id="porte-empresa"
                                onChange={e => setPorteEmpresa(e.target.value)} value={porte_empresa}
                                >
                                    <option selected>-</option>
                                    <option>Porte Pequeno</option>
                                    <option>Porte Médio</option>
                                    <option>Porte Grande</option>
                                </select>
                                
                            </div>
                            <div className="col">
                                <label className="form-label" for="#qtd-funcionarios">Qtd. Funcionários</label>
                                <input className="form-control col-md" id="qtd-funcionarios"
                                onChange={e => setQtdFuncionarios(e.target.value)} value={qtd_funcionarios}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <button className="btn btn-primary">Cadastrar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AtualizaClientes