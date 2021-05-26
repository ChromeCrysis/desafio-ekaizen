import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../../components/Navbar/Navbar'
import AtualizaClientes from '../../components/Clientes/atualizarClientes'

import api from '../../services/api'

function AtualizarClientes() {
  return (
    <div>
      <Navbar />
      <AtualizaClientes />
    </div>
  );
}

export default AtualizarClientes;