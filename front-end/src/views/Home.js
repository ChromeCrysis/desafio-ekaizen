import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'

//Components
import Navbar from '../components/Navbar/Navbar'
import ListaClientes from '../components/Clientes/listaClientes'

import api from '../services/api'

function Home() {

  
  return (
    <div>
      <Navbar />
      <ListaClientes />
    </div>

  );
}

export default Home;