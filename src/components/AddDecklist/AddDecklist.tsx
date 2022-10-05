import "./AddDecklist.scss";
import InputBox from "../InputBox/InputBox";
import { useState } from "react";
import PhyrexianPlus from '../../images/phyrexian-plus.png';

const AddDeckList = () => {
	const [feedback, setFeedback] = useState();
	const [inputFields, setInputFields] = useState([{
		"url": "", "commander": "", "color": "#000000"
	}])

	let handleSubmit = async (e: any) => {
		e.preventDefault();
		console.log(inputFields);
	}

	/**
	 * We would aabstract this out if we wanted to make it more verbose allowing a naming
	 * pattern to be passed in for the newElement instead of hard-coding #deckInfo and have
	 * the calling method pass an entire element ID into the function so we could use it.
	 * But since this app is one page, I don't think we need to do that.
	 * @param newestElement
	 */
	const scrollToNewElement = (newestElement: any) => {
		if (newestElement !== null) {
			const newElement = "#deckinfo-" + newestElement;
			const mostRecentElementAdded = document.querySelector(newElement);
			mostRecentElementAdded!.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	const handleFormChange = (index: any, event: any) => {
		let data: any = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	}

	const addNewDeckFields = () => {
		let newDeckFields = { "url": "", "commander": "", "color": "#000000" }
		setInputFields([...inputFields, newDeckFields]);
		scrollToNewElement(inputFields.length - 1);
	}

	return (
		<div id="deckSubmissionForm">
			<form onSubmit={handleSubmit} autoComplete="off">
				{inputFields.map((input, index) => {
					return (
						<div id={"deckinfo-" + index} key={"deckinfo-" + index}>
							<InputBox
								customClass={"decklistUrl"}
								feedback={feedback}
								labelValue="Decklist"
								name="url"
								onChange={(event: any) => handleFormChange(index, event)}
								placeholder="Decklist URL"
								required="required"
								title={"Decklist URL"}
								type="text"
								value={input.url}
							/>
							<div className="subfields">
								<InputBox
									customClass={"commanderString"}
									labelValue="Deck Name"
									name="commander"
									onChange={(event: any) => handleFormChange(index, event)}
									placeholder="i.e. Yawgmoth, Thran Physician"
									title={"Deck Name"}
									type="text"
									value={input.commander}
								/>
								<InputBox
									customClass={"colorString"}
									labelValue="Color"
									name="color"
									onChange={(event: any) => handleFormChange(index, event)}
									title={"Print Color"}
									type="color"
									value={input.color}
								/>
							</div>
						</div>
					)
				})}
				<span className="buttonContainer">
					<button onClick={addNewDeckFields} title="Add another deck"><img height="25" width="25" alt="Add Another Deck" src={PhyrexianPlus} />Add Deck</button>
					<button onClick={handleSubmit} title="Print QR Codes">Generate QR Codes</button>
				</span>
			</form>
		</div>
	)
}

export default AddDeckList