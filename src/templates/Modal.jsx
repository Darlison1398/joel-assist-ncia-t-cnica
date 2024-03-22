import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faUserCheck } from '@fortawesome/free-solid-svg-icons';

//import { faMugHot } from '@fortawesome/free-solid-svg-icons';
//<FontAwesomeIcon icon={faMugHot} />

function CustomModal () {

    const stbtn = { width: '200px'};

    const [ showModal, setShowModal ] = useState(false);
    const [ msg, setMsg ] = useState('');
    const [ modTitle, setMdTitle ] = useState('');

    const abrirModal1 = function () {
        setShowModal(true);
        setMdTitle('O que fazemos?')
        setMsg('Concertamos teclados musicais, fazemos limpeza nas teclas, limpamos o teclado, consertamos o áudio, trocamos peças, consertamos displays, pintamos o seu teclado e fazemos muitas outras manutenções que você precisar.');
    }

    const abrirModal2 = function () {
        setShowModal(true);
        setMdTitle('Somos autorizados')
        setMsg('KORG, YAMAHA, HOLAND, NORD');
    }

    const handleClose = () => {
        setShowModal(false);
    }


    return (
        <div className="container mt-5">

            <div className="container">
                <div>
                    <button className='btn btn-secondary' onClick={abrirModal1} style={stbtn}>Serviços &nbsp; <FontAwesomeIcon icon={faGears} /> </button> 
                </div>
                <div className='mt-3'>
                    <button className='btn btn-secondary' onClick={abrirModal2} style={stbtn}>Autorizados &nbsp; <FontAwesomeIcon icon={faUserCheck} /></button>    
                </div>
            </div>
            <Modal show = {showModal} onHide = {handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title> {modTitle} </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p> {msg} </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
       
        </div>
    )
}

export default CustomModal;