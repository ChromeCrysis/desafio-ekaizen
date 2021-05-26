import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../../components/Navbar/Navbar'
import CadastraClientes from '../../components/Clientes/cadastrarClientes'

import api from '../../services/api'

function CadastrarClientes() {
  return (
    <div>
      <Navbar />
      <CadastraClientes />
    </div>
  );
}

export default CadastrarClientes;