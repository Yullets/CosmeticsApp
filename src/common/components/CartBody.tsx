import CartHeader from './CartHeader';
import Product from './Product';
import CartFooter from "./CartFooter.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

function CartBody() {

    const [cart, setCart] = useState<CartDto>({ id: 0, cartItems: [] });
    const [total, setTotal] = useState({ price: 0, count: 0 })

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await axios.get<CartDto>('http://localhost:8080/cart', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setCart(response.data);
            } catch (err) {
                console.error('Ошибка при загрузке корзины:', err);
            }
        };

        fetchCart();
    }, [])

    useEffect(() => {
        if (cart) {
            const totalPrice = cart.cartItems.reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
            );
            const totalCount = cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);
            setTotal({ price: totalPrice, count: totalCount });
        }
    }, [cart]);

    const deleteProduct = async (id: number) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.delete('http://localhost:8080/cart-item', {
                params: {
                    cartId: id,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCart((prevCart) => {
                if (!prevCart) return prevCart;
                return {
                    ...prevCart,
                    cartItems: prevCart.cartItems.filter((item) => item.id !== id),
                };
            });
        } catch (err) {
            console.error('Ошибка при удалении товара:', err);
        }
    }

    const increase = async (id: number) => {
        setCart((prevCart) => {
            if (!prevCart) return prevCart;
            return {
                ...prevCart,
                cartItems: prevCart.cartItems.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                ),
            };
        });
    };

    const decrease = (id: number) => {
        setCart((prevCart) => {
            if (!prevCart) return prevCart;
            return {
                ...prevCart,
                cartItems: prevCart.cartItems.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                        }
                        : item
                ),
            };
        });
    }

    const changeValue = (id: number, value: number) => {
        setCart((prevCart) => {
            if (!prevCart) return prevCart;
            return {
                ...prevCart,
                cartItems: prevCart.cartItems.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: value > 1 ? value : 1,
                        }
                        : item
                ),
            };
        })
    }

    if (!cart) {
        return <p>Загрузка корзины...</p>;
    }

    const cartProducts = cart.cartItems.map((item) => (
         <Product product={item.product}
                  quantity={item.quantity}
                  key={item.id}
                  deleteProduct={() => deleteProduct(item.id)}
                  increase={() => increase(item.id)}
                  decrease={() => decrease(item.id)}
                  changeValue={(value: number) => changeValue(item.id, value)}/>
    ))

    return (
        <section className="cart">
            <CartHeader/>
            {cartProducts}
            <CartFooter total={total}/>
        </section>
    )
}

export default CartBody;

// const products = [
//     {
//         id: 1,
//         img: 'https://static.tildacdn.com/tild3065-3438-4861-b639-626336353333/22__.jpg',
//         title: 'Ароматическая свеча/Scented candle',
//         count: 1,
//         price: 11000,
//         priceTotal: 11000
//     },
//     {
//         id: 2,
//         img: 'https://static.tildacdn.com/tild3863-3735-4262-b130-356264633430/20__.jpg',
//         title: 'Бутылка для воды/Bottle for water',
//         count: 2,
//         price: 2000,
//         priceTotal: 4000
//     },
//     {
//         id: 3,
//         img: 'https://static.tildacdn.com/tild3863-3735-4262-b130-356264633430/20__.jpg',
//         title: 'Бутылка для воды/Bottle for water',
//         count: 1,
//         price: 2000,
//         priceTotal: 2000
//     }
// ]

interface ProductDto {
    id: number;
    name: string;
    price: number;
    photoUrl: string;
    stock: number;
}

interface CartItemDto {
    id: number;
    quantity: number;
    product: ProductDto;
}

interface CartDto {
    id: number;
    cartItems: CartItemDto[];
}