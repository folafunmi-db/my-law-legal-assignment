/*jshint esversion: 10 */
import "./input.style.css";

const InputField = (type, key) => {
	const atype = type.type;
	if (atype === "text") {
		return (
			<input
				className="form-input"
				key={key}
				placeholder={atype.toUpperCase()}
				type="text"
			/>
		);
	} else if (atype === "long-text") {
		return (
			<textarea
				defaultValue=""
				rows="10"
				cols="30"
				className="text-area"
			></textarea>
		);
	} else if (atype === "date") {
		return (
			<input
				className="form-input"
				key={key}
				placeholder={atype.toUpperCase()}
				type="date"
			/>
		);
	} else if (atype === "number") {
		return (
			<input
				className="form-input"
				key={key}
				placeholder={atype.toUpperCase()}
				type="number"
			/>
		);
	} else if (atype === "radio") {
		return <input className="radio" key={key} type="radio" name="option" />;
	} else {return null}
};

export default InputField;
