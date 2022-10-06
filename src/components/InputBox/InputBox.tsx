import PropTypes from 'prop-types';
import "./InputBox.scss";

const InputBox = ({
	customClass, labelValue, name, placeholder, title, type, value, onChange = () => {} }:
	{ customClass?: string, labelValue: string, name: string, placeholder?: string, required?: string, title?: string, type: string, value: string, onChange?: any }) => {

	return (
		<span className={"input " + (customClass ? customClass : '')}>
			{labelValue &&
				<label htmlFor={name}>{labelValue}</label>
			}
			<input
				name={name}
				placeholder={placeholder}
				title={title ? title : ''}
				type={type}
				value={value}
				onChange={onChange}
			/>
		</span>
	)
}

InputBox.propTypes = {
	feedback: PropTypes.string,
	labelValue: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired
}

export default InputBox;