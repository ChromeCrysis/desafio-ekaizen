import React from 'react';
import * as S from './styles'

import logo from '../../assets/img/ekaizen-logo.png'

function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img style={{
                        "maxWidth": "50%"
                    }} src={logo}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav">
                                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                                        <a class="nav-link" href="/ferramenta">Ferramentas</a>
                                        <a class="nav-link" href="#">Orçamentos</a>
                                    </div>
                                </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar