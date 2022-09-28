import PropTypes from 'prop-types';

const InputBox = ({
	feedback, labelValue, name, placeholder, type, value, onChange = () => {} }:
	{ feedback?: string, labelValue: string, name: string, placeholder?: string, required?: string, type: string, value: string, onChange?: any }) => {

	return (
		<div className="input">
			{labelValue &&
				<label htmlFor={name}>{labelValue}</label>
			}
			<input
				name={name}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
			/>
			<span id={name + '_error'} className="error" role="alert">{feedback}</span>
		</div>
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