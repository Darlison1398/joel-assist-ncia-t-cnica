import { useState } from 'react';
import Home from './Home';
import Main from './Main';
import Text from './Text';

function Sessao() {

    const style = { gap: '1em' };

    const sess = { height: '200px' };

    const stbtn = { width: '200px'};

    const [sessaoSelecionada, setSessaoSelecionada] = useState(null);

    const abrirSessao = (sessao) => {
        setSessaoSelecionada(sessao);
    };

    return ( 
        <div className="container mt-5">
            <div className="d-flex justify-content-center" style={style}>
                <div>
                    <button className="btn btn-primary" onClick={() => abrirSessao(<Home />)} style={stbtn}>Marcas de Teclados</button>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => abrirSessao(<Main />)} style={stbtn}>Nosa Localização</button>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => abrirSessao(<Text />)} style={stbtn}>Clientes</button>
                </div>
            </div>

            <div className="container mt-4" style={sess}>
                {sessaoSelecionada}
            </div>
        </div>
    );
}

export default Sessao;
