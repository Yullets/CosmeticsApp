import './Login.css'

function Login() {
    return (
        <>
            <main>
                <div className="form-container">
                    <h2 className={"authorization"}>Авторизация</h2>
                    <form action="/login" method="post">
                        <label htmlFor="username">Имя пользователя или Email:</label>
                        <input type="text" id="username" name="username" required/>

                        <label htmlFor="password">Пароль:</label>
                        <input type="password" id="password" name="password" required/>

                        <button className="enterButton" type="submit">Войти</button>
                    </form>
                    <p className={"login"}>Нет аккаунта? <a href="/registration">Зарегистрируйтесь здесь</a></p>
                </div>
            </main>
        </>
    )
}

export default Login;