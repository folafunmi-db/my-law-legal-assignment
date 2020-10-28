/*jshint esversion: 10 */
import "./formfield.style.css";
import InputField from "../InputField/input.component";

const FormField = (form) => {
	const aform = Object.entries(form)[0][1];
	const bform = [aform];
	return (
		<>
			{bform.map((item, i) => (
				<label key={i} className="form-input-label">
					{item.label}
					<InputField className="input=field" type={item.type} key={i} />
				</label>
			))}
		</>
	);
};

export default FormField;
