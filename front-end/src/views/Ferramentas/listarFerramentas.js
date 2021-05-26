import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../../components/Navbar/Navbar'
import ListaFerramentas from '../../components/Ferramentas/listaFerramentas'

function ListarFerramentas() {
  return (
    <div>
      <Navbar />
      <ListaFerramentas />
    </div>
  );
}

export default ListarFerramentas;