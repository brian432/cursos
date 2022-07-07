import { Link } from "react-router-dom";
import Buscador from "./buscardor";
const Header =()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/listado'>Listado</Link>
                    </li>
                    <li>
                        <Link to='/contacto'>Contaco</Link>
                    </li>
                    <li>
                        <Link to='/detalle/89'>Detalle</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;