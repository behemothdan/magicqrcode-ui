import "./AddDecklist.scss";
import InputBox from "../InputBox/InputBox";
import { useState } from "react";

const AddDeckList = () => {
	const [feedback, setFeedback] = useState();
	const [inputFields, setInputFields] = useState([{
		"url": "", "commander": "", "color": "#000000"
	}])

	let handleSubmit = async (e: any) => {
		e.preventDefault();
		console.log(inputFields);
	}

	const handleFormChange = (index: any, event: any) => {
		let data: any = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	}

	const addNewDeckFields = () => {
		let newDeckFields = { "url": "", "commander": "", "color": "#000000" }
		setInputFields([...inputFields, newDeckFields]);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				{inputFields.map((input, index) => {
					return (
						<div id={"deckinfo-" + index} key={"deckinfo-" + index}>
							<InputBox
								feedback={feedback}
								labelValue="Decklist"
								name="url"
								onChange={(event: any) => handleFormChange(index, event)}
								placeholder="Decklist URL"
								required="required"
								type="text"
								value={input.url}
							/>
							<InputBox
								labelValue="Label Color"
								name="color"
								onChange={(event: any) => handleFormChange(index, event)}
								type="color"
								value={input.color}
							/>
							<InputBox
								labelValue="Commander/Deck Name"
								name="commander"
								onChange={(event: any) => handleFormChange(index, event)}
								placeholder="Yawgmoth, Thran Physician"
								type="text"
								value={input.commander}
							/>
						</div>
					)
				})}
				<button onClick={handleSubmit}>Compleat</button>
			</form>
			<button onClick={addNewDeckFields}>Add another deck</button>
		</>
	)
}

export default AddDeckList