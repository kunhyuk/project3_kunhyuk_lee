import { Link } from "react-router-dom";
import "../App.css"

function Header(props) {
    return (
        <div className="head">
        <nav className="nav">
            <Link to="/">
                <div>Food App</div>
            </Link>
        </nav>
        <h1>Recipe and Nutrition App</h1>
        <hr/>
        </div>
    );
}

export default Header;