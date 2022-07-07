import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Navigate, useNavigate } from "react-router-dom"
const Login = () => {
    const [form, setForm] = useLocalStorage("form", "");
    const history = useNavigate();

    let token = localStorage.getItem('token');

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email !== "challenge@alkemy.org" || form.password !== "react") {
            alert("Usuario y/o contraseña invalida")
            return;
        }
        const email = form.email;
        const password = form.password;
        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                const token = res.data.token;
                localStorage.setItem('token', token);
                history('/listado?movieID')
            })
    }
    return (
        <>
            {token ? <Navigate to="/listado" /> : <>
                <h2>Formulario</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Correo electronico:</span><br />
                        <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        <span>Contraseña:</span><br />
                        <input type="password" name="password" onChange={handleChange} required />
                    </label>
                    <br />
                    <button type="submit">Loguearse</button>
                </form>
            </>}

        </>
    )
}

export default Login;