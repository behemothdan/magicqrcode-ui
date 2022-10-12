import "./AddDecklist.scss";
import { useState } from "react";
import InputBox from "../InputBox/InputBox";
import PhyrexianPlus from '../../images/phyrexian-plus.png';

const AddDeckList = () => {
	const [feedback, setFeedback] = useState<any | null>(null);

	/**
	 * By adding in new objects into the state array and then iterating over
	 * the array, we use that to dynamically create form elements whenever
	 * the user clicks the 'Add Deck' button.
	 */
	const [inputFields, setInputFields] = useState([{
		"url": "", "commander": "", "color": "#000000"
	}])

	let handleSubmit = async (e: any) => {
		e.preventDefault();
		setFeedback(null);

		/**
		 * We had to do a couple things to get here.
		 * First of all, the 'Accept' value matches a Binary Media Type
		 * configured in the Settings of our API Gateway exactly.
		 * You can't have one as a wildcard and one of them not. In fact, most
		 * say you can't have them both wildcarded either. When we set up
		 * our original Lambda Proxy integration in the API Gateway, it created
		 * an OPTIONS method for us. For some reason it was creating errors we
		 * didn't care about since this project is using any user credentials
		 * or anything like that. We completely deleted the OPTIONS method to
		 * remove a number of weird CORS errors and 502 errors. We got to this
		 * point because we could see a malformed PDF coming back from the browser
		 * and the GET request working fine..
		 */
		await fetch(process.env.REACT_APP_API_URL + "/api/v1/generateqr", {
			method: "POST",
			headers: { 'Content-Type': 'application/json', 'Accept': 'application/pdf' },
			body: `{"decklists":` + JSON.stringify(inputFields) + `}`,
		}).then(async response => {
			if (response.status === 200 && response.statusText !== "No QR codes generated") {
				/**
				 * This is turning the ReadableStream that is being returned from
				 * the API into a viewable PDF and loaded into a new window in the browser.
				 */
				const qrBlob = await response.blob();
				const newQrBlob = new Blob([qrBlob], { type: 'application/pdf' });
				const blobUrl = window.URL.createObjectURL(newQrBlob);
				window.open(blobUrl);
			} else if (response.statusText === "No QR codes generated") {
				const feedbackMessage = await response.json();
				setFeedback(feedbackMessage.feedback);
			}
		})
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

	const addNewDeckFields = (e: any) => {
		/**
		 * This prevents the Add Deck button from submitting the form when we add it.
		 */
		e.preventDefault();
		if(inputFields.length <= 15) {
			let newDeckFields = { "url": "", "commander": "", "color": "#000000" }
			setInputFields([...inputFields, newDeckFields]);
			scrollToNewElement(inputFields.length - 1);
		} else {
			setFeedback("Max deck limit of 16 reached. Print and start a new form to print more.");
		}
	}

	return (
		<div id="deckSubmissionForm">
			<form onSubmit={handleSubmit} autoComplete="off">
				{inputFields.map((input, index) => {
					return (
						<div id={"deckinfo-" + index} key={"deckinfo-" + index}>
							<InputBox
								customClass={"decklistUrl"}
								labelValue={(index + 1) + ". Decklist"}
								name="url"
								onChange={(event: any) => handleFormChange(index, event)}
								placeholder="Decklist URL (Moxfield, Archidekt, and TappedOut)"
								required="required"
								title={"Decklist URL"}
								type="text"
								value={input.url}
							/>
							<div className="subfields">
								<InputBox
									customClass={"commanderString"}
									labelValue="Deck Name"
									maxlength={50}
									name="commander"
									onChange={(event: any) => handleFormChange(index, event)}
									placeholder="i.e. Yawgmoth, Thran Physician (Optional - 50 characters max)"
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
				<div id={'error'} className="error" role="alert">{feedback}</div>
			</form>
		</div>
	)
}

export default AddDeckList