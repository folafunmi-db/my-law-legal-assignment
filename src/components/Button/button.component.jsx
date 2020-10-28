/*jshint esversion: 10 */
import './button.style.css'

const Button = ({ children }) => {
	return <button className="button">{children}</button>;
};

export default Button;
