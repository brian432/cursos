import { Link, Navigate } from "react-router-dom";
const Listado = () => {
    let token = localStorage.getItem('token');
    return (
        <>
            {!token && <Navigate to="/" />}
            <div>
                <Link to="/detalle">Hola </Link>
            </div>
        </>

    )
}

export default Listado;