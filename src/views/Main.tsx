import "../style/Main.scss";
import AddDeckList from "../components/AddDecklist/AddDecklist";
import { useState } from "react";

const Home = () => {
	const [decklistInputs, setDecklistInputs] = useState([] as any[]);

	const onAddDecklist = () => {
		setDecklistInputs(decklistInputs.concat(<AddDeckList key={decklistInputs.length} />));
	}

	return (
		<main role="main">
			{decklistInputs}
			<button onClick={onAddDecklist}>Add Deck list</button>
		</main>
	)
}

export default Home;