import './Product.css'
import ProductCount from "./ProductCount.tsx";

function Product({product, deleteProduct, increase, decrease, changeValue} : ProductProps) {
    const priceFormatter = new Intl.NumberFormat()

    return (
        <section className="product">
            <div className={"productImg"}>
                <img src={product.img} alt={product.title}/>
            </div>
            <div className={"productTitle"}>{product.title}</div>
            <div className={"productCount"}><ProductCount count={product.count} increase={increase} decrease={decrease} changeValue={changeValue} id={product.id}/></div>
            <div className={"productPrice"}>{priceFormatter.format(product.priceTotal)} руб.</div>
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
        title: string;
        img: string;
        count: number;
        price: number;
        priceTotal: number;
    };
    deleteProduct: (id: number) => void;
    increase: (id: number) => void;
    decrease: (id: number) => void;
    changeValue: (id: number, value:number) => void;
}