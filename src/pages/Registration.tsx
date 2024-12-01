import './Login.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Registration() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        try {
            await axios.post(`http://localhost:8080/auth/sign-up`, {
                fullName,
                email,
                password
            });
            navigate('/login');
        } catch (err) {
            setError('Произошла ошибка при регистрации');
            console.error(err);
        }
    }

    return (
        <main>
            <div className="form-container">
                <h2 className={"authorization"}>Регистрация</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullName">Имя пользователя:</label>
                    <input type="text"
                           id="fullName"
                           name="fullName"
                           value={fullName}
                           onChange={(e) => setFullName(e.target.value)}
                           required/>

                    <label htmlFor="email">Email:</label>
                    <input type="email"
                           id="email"
                           name="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required/>

                    <label htmlFor="password">Пароль:</label>
                    <input type="password"
                           id="password"
                           name="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required/>

                    <label htmlFor="confirm-password">Подтверждение пароля:</label>
                    <input type="password"
                           id="confirm-password"
                           name="confirm-password"
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           required/>

                    {error && <p className="error-message">{error}</p>}

                    <button className="enterButton" type="submit">Зарегистрироваться</button>
                </form>
                <p>Уже есть аккаунт? <a href="/login">Авторизуйтесь здесь</a></p>
            </div>
        </main>
    )
}

export default Registration;