import './Login.css'

function Registration() {
    return (
        <main>
            <div className="form-container">
                <h2 className={"authorization"}>Регистрация</h2>
                <form action="/register" method="post">
                    <label htmlFor="username">Имя пользователя:</label>
                    <input type="text" id="username" name="username" required/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>

                    <label htmlFor="password">Пароль:</label>
                    <input type="password" id="password" name="password" required/>

                    <label htmlFor="confirm-password">Подтверждение пароля:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required/>

                    <button className="enterButton" type="submit">Зарегистрироваться</button>
                </form>
                <p>Уже есть аккаунт? <a href="/login">Авторизуйтесь здесь</a></p>
            </div>
        </main>
    )
}

export default Registration;