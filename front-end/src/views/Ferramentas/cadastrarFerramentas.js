import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../../components/Navbar/Navbar'
import CadastraFerramentas from '../../components/Ferramentas/cadastrarFerramentas'

import api from '../../services/api'

function CadastrarFerramentas() {
  return (
    <div>
      <Navbar />
      <CadastraFerramentas />
    </div>
  );
}

export default CadastrarFerramentas;