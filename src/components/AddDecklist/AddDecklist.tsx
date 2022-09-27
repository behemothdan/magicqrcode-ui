import "./AddDecklist.scss";
import InputBox from "../InputBox/InputBox";
import { useState } from "react";

const AddDeckList = () => {
	const [feedback, setFeedback] = useState();
	return (
		<div>
			<InputBox
				name="url"
				labelValue="Deck list"
				placeholder="Deck list URL"
				feedback={feedback}
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
				placeholder="Yawgmoth, Thran Physician"
				type="text"
			/>
		</div>
	)
}

export default AddDeckList