import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <Link to="/">Home</Link> |
        <Link to="/Product">Product</Link> |
        <Link to="/Customer">Customer</Link> |
       
    </nav>
);

export default Navbar;
