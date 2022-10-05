import "./Footer.scss";

/**
 * The most basic of things to make sure your Copyright is never out of date
 * when the New Year comes around. :D
 */
let currentYear = new Date().getFullYear();

const Footer = () => (
	<footer role="contentinfo">
		<span className="left">&copy; {currentYear} <a target="_blank" rel="noreferrer" href="http://twitter.com/behemothdan">BehemothDan</a></span>
		<span className="right">Wizards of the Coast, Magic: The Gathering, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries.
			<br />© 1993-{currentYear} Wizards. All Rights Reserved.
			<br />
			The site may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under Wizards' Fan Site Policy.
			<br />MAGIC: THE GATHERING® is a trademark of Wizards of the Coast.
			<br />For more information about Wizards of the Coast or any of Wizards' trademarks or other intellectual property, please visit their website at https://company.wizards.com/.
		</span>
	</footer>
)

export default Footer