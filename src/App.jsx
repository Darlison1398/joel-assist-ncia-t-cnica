import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './templates/Header';
import AbouteMe from './templates/AboutMe';
import CustomModal from './templates/Modal';
import Sessao from './templates/Sessao';


function App() {

  return (
    <div>

      <Header />
      <AbouteMe />
      <CustomModal />
      <Sessao />

    </div>
  )
}

export default App
