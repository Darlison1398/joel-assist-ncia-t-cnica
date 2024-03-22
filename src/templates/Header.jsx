import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Header() {

    const st = { color: 'rgb(81, 143, 235)'};
    const i = { 
        color: 'rgb(105, 201, 240)',
        fontSize: '22pt', 
        gap: '.5em',
    };

    return (
        <div className="container">
            <h1 style={st}>Joel Assistência Técnica</h1>

            <div className="container mt-3 d-flex justify-content-center" style={i}>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>
            </div>
        </div>
    )
}

export default Header;