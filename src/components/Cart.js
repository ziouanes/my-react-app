import '../styles/Cart.css';
function Cart({ cartItems }) {
    return (
        <div className="cart">
            <h2>Votre Panier</h2>
            {cartItems.length === 0 ? (
                <p>Le panier est vide pour l'instant.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item.name} - {item.price}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default Cart;