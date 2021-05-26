import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../../components/Navbar/Navbar'
import ListaClientes from '../../components/Clientes/listaClientes'

import api from '../../services/api'

function ListarClientes() {
  return (
    <div>
      <Navbar />
      <ListaClientes />
    </div>
    
  );
}

export default ListarClientes;