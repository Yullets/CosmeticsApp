import './Login.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.post(`http://localhost:8080/auth/sign-in`, {
                login,
                password
            });

            const { accessToken, refreshToken } = response.data;
            localStorage.setItem('authToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            navigate('/catalog')
        } catch (err) {
            setError('Неверный логин или пароль');
            console.error(err);
        }
    }

    return (
        <>
            <main>
                <div className="form-container">
                    <h2 className={"authorization"}>Авторизация</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Имя пользователя или Email:</label>
                        <input type="text"
                               id="login"
                               name="login"
                               value={login}
                               onChange={(e) => setLogin(e.target.value)}
                               required/>

                        <label htmlFor="password">Пароль:</label>
                        <input type="password"
                               id="password"
                               name="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               required/>

                        {error && <p className="error-message">{error}</p>}

                        <button className="enterButton" type="submit">Войти</button>
                    </form>
                    <p className={"login"}>Нет аккаунта? <a href="/registration">Зарегистрируйтесь здесь</a></p>
                </div>
            </main>
        </>
    )
}

export default Login;