/*jshint esversion: 10 */
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./header.style.css";

const Header = () => {
	return (
		<div className="header">
			<Router>
				<Link to="/" className="heading">MyLawLegal</Link>
			</Router>
		</div>
	);
};

export default Header;
