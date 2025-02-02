import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './templates/Header';
import AbouteMe from './templates/AboutMe';
import CustomModal from './templates/Modal';
import Sessao from './templates/Sessao';
import Whatsapp from './templates/Whatsapp';
import Description from './templates/Description';

function App() {

  return (
    <>
      <div>

      <Header />
      <AbouteMe />
      <CustomModal />
      <Description />
      <Sessao />
      <Whatsapp />

      </div>
</>
  )
}

export default App
