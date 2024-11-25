import CartHeader from './CartHeader';
import Product from './Product';
import CartFooter from "./CartFooter.tsx";
import {useEffect, useState} from "react";

function CartBody() {

    const [cart, setCart] = useState<typeof products>(products)
    const [total, setTotal] = useState({
        price: cart.reduce((prev, cur) => prev + cur.priceTotal, 0),
        count: cart.reduce((prev, cur) => prev + cur.count, 0)
    })

    useEffect(() => {
        setTotal({
            price: cart.reduce((prev, cur) => prev + cur.priceTotal, 0),
            count: cart.reduce((prev, cur) => prev + cur.count, 0)
        })
    }, [cart])

    const deleteProduct = (id: number) => {
        setCart((cart) => cart.filter((product) => id !== product.id));
    }

    const increase = (id: number) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    const newCount = product.count + 1;
                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    };
                }
                return product;
            })
        })
    }

    const decrease = (id: number) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    };
                }
                return product;
            })
        })
    }

    const changeValue = (id: number, value: number) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id == id) {
                    const newCount = value > 1 ? value : 1;
                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    }
                }
                return product;
            })
        })
    }

    const cartProducts = cart.map((product) => {
        return <Product product={product} key={product.id} deleteProduct={deleteProduct} increase={increase}
                        decrease={decrease} changeValue={changeValue}/>
    })

    return (
        <section className="cart">
            <CartHeader/>
            {cartProducts}
            <CartFooter total={total}/>
        </section>
    )
}

export default CartBody;

const products = [
    {
        id: 1,
        img: 'https://static.tildacdn.com/tild3065-3438-4861-b639-626336353333/22__.jpg',
        title: 'Ароматическая свеча/Scented candle',
        count: 1,
        price: 11000,
        priceTotal: 11000
    },
    {
        id: 2,
        img: 'https://static.tildacdn.com/tild3863-3735-4262-b130-356264633430/20__.jpg',
        title: 'Бутылка для воды/Bottle for water',
        count: 2,
        price: 2000,
        priceTotal: 4000
    },
    {
        id: 3,
        img: 'https://static.tildacdn.com/tild3863-3735-4262-b130-356264633430/20__.jpg',
        title: 'Бутылка для воды/Bottle for water',
        count: 1,
        price: 2000,
        priceTotal: 2000
    }
]