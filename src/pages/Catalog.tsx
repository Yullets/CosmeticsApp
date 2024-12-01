import './Catalog.css'
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('http://localhost:8080/product')
                setProducts(response.data);
            } catch (err) {
                console.error(err);
                setError('Произошла ошибка при загрузке данных');
            }
        };
        fetchProducts();
    }, []);

    const handleAddTocart = async (productId: number) => {
        const token = localStorage.getItem('authToken');

        if (!token) {
            navigate('/login');
            return;
        }

        try {
            await axios.get('http://localhost:8080/cart', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            await axios.post(`http://localhost:8080/cart-item`, null, {
                params: {
                    productId,
                    quantity: 1,
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('Товар добавлен в корзину');
        } catch (err) {
            console.error(err);
            alert('Произошла ошибка при добавлении товара в корзину');
        }
    };

    if (error) {
        return <p>{error}</p>;
    }

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
                                    <img src={product.photoUrl}/>
                                </div>
                                <div className="catalogText">{product.name}</div>
                                <p>{`${product.price} руб.`}</p>
                                <div onClick={() => handleAddTocart(product.id)} className="buyButton">
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

interface Product {
    id: number;
    name: string;
    price: number;
    photoUrl: string;
    stock: number;
}

export default Catalog;