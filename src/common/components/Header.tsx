import './Header.css'

function Header() {
    return (
        <header>
            <div className="headerLogo">
                <img className="logo"
                     src="https://static.tildacdn.com/tild6634-3263-4438-b432-643335623834/Unite_cosmetics_full.png"/>
            </div>
            <div>
                <h1>Cosmetics</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/catalog">Каталог</a></li>
                    <li><a href="/login">Аккаунт</a></li>
                    <li><a href="#">Корзина</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;