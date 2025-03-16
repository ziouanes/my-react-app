import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the newsletter subscription logic here
        console.log('Subscribed with email:', email);
        setEmail('');
    };

    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
        </footer>
    );
};

export default Footer;