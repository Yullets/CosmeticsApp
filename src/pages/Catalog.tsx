import './Catalog.css'

function Catalog() {
    return (
        <>
            <main className={"catalog"}>
                <div className="headClass">
                    <h2 className={"color"}>ПРОДУКЦИЯ</h2>
                </div>
                <section className="productGrid">
                    {products.map((product) => {
                        return (
                            <div key={product.id} className="productItem">
                                <div>
                                    <img src={product.imageUrl}/>
                                </div>
                                <div className="catalogText">{product.name}</div>
                                <p>{`${product.price} руб.`}</p>
                                <div className="buyButton">
                                    <button>Купить</button>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </main>
        </>
    )
}

const products = [
    {
        id: 1,
        name: 'Ароматическая свеча/Scented candle',
        price: 2500,
        imageUrl: 'https://static.tildacdn.com/tild3065-3438-4861-b639-626336353333/22__.jpg'
    },
    {
        id: 2,
        name: 'Бутылка для воды/Bottle for water',
        price: 2000,
        imageUrl: 'https://static.tildacdn.com/tild3863-3735-4262-b130-356264633430/20__.jpg'
    },
    {
        id: 3,
        name: 'Мицеллярная вода с гидролатом алтайских трав/Micellar water, 200 мл',
        price: 2500,
        imageUrl: 'https://static.tildacdn.com/tild3235-3138-4630-b666-306134386566/17__.jpg'
    },
    {
        id: 4,
        name: 'Дневной крем с фактором защиты SPF20/ Day cream SPF20',
        price: 2500,
        imageUrl: 'https://static.tildacdn.com/tild3064-6138-4361-b736-303361336639/12__.jpg'
    },
    {
        id: 5,
        name: 'Безсульфатный шампунь для волос/Shampoo sulfate free',
        price: 1400,
        imageUrl: 'https://static.tildacdn.com/tild3936-3439-4861-a263-656630343234/15__.jpg'
    },
    {
        id: 6,
        name: 'Маска-бальзам с коллагеном для восстановления волос/Mask-balm collagen',
        price: 1500,
        imageUrl: 'https://static.tildacdn.com/tild3533-3932-4463-a337-396261383262/16__.jpg'
    },
    {
        id: 7,
        name: 'Очищающий гель для умывания с АНА-кислотами/ AHA cleansing gel',
        price: 1650,
        imageUrl: 'https://static.tildacdn.com/tild3430-6132-4330-b939-663966643331/4__.jpg'
    },
    {
        id: 8,
        name: 'Увлажняющий тоник для лица с аминокислотами/ NMF Toner',
        price: 1800,
        imageUrl: 'https://static.tildacdn.com/tild3631-3634-4335-b139-363865333739/3__.jpg'
    },
    {
        id: 9,
        name: 'Крем для век с кофеином/ Eye care cream',
        price: 2200,
        imageUrl: 'https://static.tildacdn.com/tild3831-6564-4230-b566-356166613436/photo_2024-02-13_17-.jpg'
    }
]

export default Catalog;