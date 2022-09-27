import PropTypes from 'prop-types';
import { useState } from 'react';

const InputBox = ({
	feedback, labelValue, name, placeholder, type }:
	{ feedback?: string, labelValue: string, name: string, placeholder?: string, required?: string, type: string }) => {

	return (
		<div className="input">
			{labelValue &&
				<label htmlFor={name}>{labelValue}</label>
			}
			<input
				name={name}
				placeholder={placeholder}
				type={type}
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