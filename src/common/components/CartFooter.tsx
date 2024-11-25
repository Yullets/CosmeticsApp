import './CartFooter.css'

function CartFooter({total} : FooterProps){
    const priceFormatter = new Intl.NumberFormat()

    return (
        <footer className="cartFooter">
            <div className={"footerCount"}>{total.count} ед.</div>
            <div className={"footerPrice"}>{priceFormatter.format(total.price)} руб.</div>
        </footer>
    )
}

export default CartFooter;

interface FooterProps {
    total: {
        price: number,
        count: number
    }
}