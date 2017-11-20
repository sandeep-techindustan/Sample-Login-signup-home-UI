import React from 'react'
import { FormControl, Col, FormGroup } from 'react-bootstrap'


const InputField = (props) => {
	let {
		type,
		placeholder,
		name,
		value,
		error,
		onChange,
		xs,
		sm,
		md,
		label,
		className,
		id,
		required,
	} = props;

	return (
		<Col xs={xs} sm={sm} md={md} className={className}>
			<FormGroup>
				{label?
					<span><label htmlFor={id}>{label}</label>{required?<sup>*</sup>:null}</span>
					:
					null
				}
				{type !== 'textarea'?<FormControl
					type={type}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					className={className}
					id={id}
				/>:
				<FormControl
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					className={className}
					id={id}
					componentClass="textarea"
				>
				</FormControl>
				}
				{error && <span style={{'color':'#7c0404'}}>{error}</span>}
			</FormGroup>
		</Col>
		)
}

export default InputField