import './Product.css'
import ProductCount from "./ProductCount.tsx";

function Product({product, quantity, deleteProduct, increase, decrease, changeValue} : ProductProps) {
    const priceFormatter = new Intl.NumberFormat()

    return (
        <section className="product">
            <div className={"productImg"}>
                <img src={product.photoUrl} alt={product.name}/>
            </div>
            <div className={"productTitle"}>{product.name}</div>
            <div className={"productCount"}><ProductCount count={quantity} increase={increase} decrease={decrease} changeValue={changeValue} id={product.id}/></div>
            <div className={"productPrice"}>{priceFormatter.format(product.price * quantity)} руб.</div>
            <div className={"productButton"}>
                <button type={"button"} className="deleteButton" onClick={()=>deleteProduct(product.id)}>
                    <img src="img/x.svg" alt="Delete"/>
                </button>
            </div>
        </section>
    )
}

export default Product;

interface ProductProps {
    product: {
        id: number;
        name: string;
        price: number;
        photoUrl: string;
    };
    quantity: number;
    deleteProduct: (id: number) => void;
    increase: () => void;
    decrease: () => void;
    changeValue: (value: number) => void;
}