import Logo from "./logo.png"
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <div  className="left-section">
            <img src={Logo} alt="logo"></img>

            <Link to="/">
                <a href="/shop">Home</a></Link>

            <Link to="/Products">
                <a href="/Products">Product</a></Link>

            <Link to="/Products">
                <a href="/blog">Blog</a></Link>
            <Link to="/Products">
                <a href="/contacts">Cart</a></Link></div>
                <div>
                <div className="right-section">
                <Link to="/Products">   <button className="searchButton">Search</button></Link>
        <button className="signInButton">Sign In</button>
      </div>
                </div>
        </nav>
    )
}
export default Navbar;