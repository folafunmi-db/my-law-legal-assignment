/*jshint esversion: 10 */
import FormField from "../FormField/formfield.component";
import Button from "../Button/button.component";
import './formgenerator.style.css'

const FormGenerator = ({ forms }) => {
	return (
		<>
		<form className="form">
		<h1>Police Brutality Report Form</h1>
			{forms.map((form, i) => (
				<FormField key ={ i}form={form} />
			))}
		<Button children="Submit"/>
		</form>
		</>
	);
};

export default FormGenerator;
