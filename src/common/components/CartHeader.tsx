import './CartHeader.css'

function CartHeader() {
    return (
        <header className="cartHeader">
            <div className="headerTitle">Наименование</div>
            <div className="headerCount">Количество</div>
            <div className="headerCost">Стоимость</div>
        </header>
    )
}

export default CartHeader;