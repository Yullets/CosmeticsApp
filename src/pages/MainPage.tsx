import '../App.css'

function MainPage () {
    return (
        <main className="mainPage">
            <div className="brandHeader">
                <h2>О БРЕНДЕ</h2>
            </div>
            <div className="container">
                <div className="imgGrid">
                    <img src="https://static.tildacdn.com/tild3531-6366-4662-b862-626464646437/DSC_8102.jpg"/>
                    <img
                        src="https://optim.tildacdn.com/tild6434-3661-4566-b836-303134373065/-/cover/540x540/center/center/-/format/webp/photo_2022-05-11_18-.jpg"/>
                    <img
                        src="https://optim.tildacdn.com/tild6438-3266-4663-b532-303432313230/-/cover/540x540/center/center/-/format/webp/DSCF6476.jpg"/>
                    <img
                        src="https://optim.tildacdn.com/tild6265-6231-4230-a365-373964323838/-/cover/540x540/center/center/-/format/webp/photo_2022-05-11_18-.jpg"/>
                </div>
                <div className="text">
                    <h2>Unité cosmetics by Anastasia Volkova</h2>
                    <p>Бренд создан в 2021 году врачом-косметологом, дерматовенерологом, трихологом Анастасией
                        Волковой.</p>
                    <p>Состав каждого средства разрабатывается Анастасией Волковой лично, дорабатывается командой
                        лучших
                        химиков-технологов, проходит тщательное тестирование и только потом выходит в свет.</p>
                    <p>Для косметики используется качественное сырье и удобная упаковка.</p>
                    <p>Каждое средство представляет из себя микс знаний, качественных ингредиентов и любви к каждому
                        пользователю.</p>
                </div>
            </div>
        </main>
    )
}

export default MainPage;