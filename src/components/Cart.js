import '../styles/Cart.css';
function Cart({ cartItems }) {
        // Calculate total price of all items

    const totalPrice = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    return (
        <div className="cart">
            <h2>Votre Panier</h2>
            {cartItems.length === 0 ? (
                <p>Le panier est vide pour l'instant.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.price} MAD 
                               <span>{item.quantity > 1 && ` x${item.quantity}`}</span> 
                                <span className="cart-total">
                                    = {item.price * item.quantity} MAD
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <strong>Total: {totalPrice} MAD</strong>
                    </div>
                </>
            )}
        </div>
    );
}
export default Cart;