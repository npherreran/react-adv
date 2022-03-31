import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components/";
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    onChange={(evento) => onProductCountChange(evento)}
                    value={shoppingCart[product.id]?.count || 0}
                >
                    <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.5)' }} />
                    <ProductTitle className="text-white text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
            ))}
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.5)' }} />
                            <ProductButtons
                                className="custom-buttons"
                                style={{ display: 'flex', justifyContent: 'center' }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    </div >;
};
