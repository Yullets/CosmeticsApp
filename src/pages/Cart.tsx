import './Cart.css'
import CartBody from '../common/components/CartBody.tsx'

function Cart() {
    return (
        <>
            <main className="sectionCart">
                <div className="header">
                    <div className="container">
                        <h2 className="title">
                            КОРЗИНА ТОВАРОВ
                        </h2>
                    </div>
                </div>
                <div className="cartBody">
                    <div className="cartContainer">
                        <CartBody />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cart;