import React from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";

const Navbar = () => {
    const cartCount = useProductStore((state) => state.cart.length);

    return (
        <nav>
            <Link to="/">My Store</Link>
            <Link to="/cart">Cart ({cartCount})</Link>
            <Link to="/admin">Admin</Link>
        </nav>
    );
};

export default Navbar;