import "./AddDecklist.scss";
import InputBox from "../InputBox/InputBox";

const AddDeckList = () => (
	<div>
		<InputBox
			name="url"
			labelValue="Deck list"
			placeholder="Deck list URL"
			feedback="Feedback placeholder"
			required="required"
			type="text"
		/>
		<InputBox
			name="Label Color"
			labelValue="Label Color"
			type="color"
		/>
		<InputBox
			name="QR Label"
			labelValue="Commander/Deck Name"
			placeholder="Commander/Deck Name"
			type="text"
		/>
	</div>
)

export default AddDeckList