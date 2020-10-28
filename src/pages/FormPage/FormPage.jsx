/*jshint esversion: 10 */
import FormGenerator from "../../components/FormGenerator/formgenerator.component";

const form = [
	{
		label: "What is the name of the officer in question?",
		type: "text",
	},
	{
		label: "When was the date of the incident?",
		type: "date",
	},
	{
		label: "How much is the bribe that was paid? (optional)",
		type: "number",
	},
	{
		label: "Option A",
		type: "radio",
	},
	{
		label: "Option B",
		type: "radio",
	},
	{
		label: "Option C",
		type: "radio",
	},
	{
		label: "Tell Your Story.",
		type: "long-text",
	},
];

const FormPage = () => {
	// const handleSubmission = useCallback((inputFields) => {
	// 	// Logic to handle submission of form fields
	// }, []);

	return <FormGenerator className="form-gen" forms={form} />;
};

export default FormPage;
