import "./Header.scss";
import PhyrexianSymbol from "../../images/phyrexian-symbol.png";

const Header = () => (
	<header role="heading" aria-level={1}>
		<h1><img src={PhyrexianSymbol} /><a href="/" title="MQR">MQR</a></h1>
		<div>Easily generate printable sheets of QR codes to share your Magic decks in real life!</div>
	</header>
)

export default Header