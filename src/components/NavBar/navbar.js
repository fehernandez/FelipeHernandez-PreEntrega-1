import "./navbar.scss"
import CartWidget from "./CartWidget"
import Dropdown from 'react-bootstrap/Dropdown';

export const Header = () => {
    return (
        <header>
            <div className="who">WhoClothes</div>
            <nav className="navbar sticky-top navbar-expand-lg bg-light p-0">
                <div className="container-fluid bg-white">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa-solid fa-bars text-black"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio
                                </a>
                            </li>
                            <li className="nav-item prod-mobile">
                                <a className="nav-link" href="#">Guia de talles</a>
                            </li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    Productos
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Buzos</Dropdown.Item>
                                    <Dropdown.Item href="#">Pantalones</Dropdown.Item>
                                    <Dropdown.Item href="#">Remeras</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <li className="nav-item preg-mobile">
                                <a className="nav-link" href="#">Preguntas Frecuentes</a>
                            </li>
                            <div className="iconos">
                                <CartWidget />
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>



    )
}


export default Header