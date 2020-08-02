import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
	const [ data, setData ] = useState()
	const { register, errors, handleSubmit, reset } = useForm({
		mode: 'onBlur',
	})
	const onSubmit = data => {
		setData(data)
	}

	return (
		<div className='App'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div data-testid='FNInput'>
					<label htmlFor='firstName'>First Name*</label>
					<input name='firstName' placeholder='First Name' ref={register({ required: true, maxLength: 3 })} />
					{errors.firstName && <p>Looks like there was an error. Error Type: {errors.firstName.type}</p>}
				</div>

				<div data-testid='lnInput'>
					<label htmlFor='lastName'>Last Name*</label>
					<input name='lastName' placeholder='Last Name' ref={register({ required: true })} />
					{errors.lastName && <p>Looks like there was an error. Error Type: {errors.lastName.type}</p>}
				</div>

				<div data-testid='eInput'>
					<label htmlFor='email'>Email*</label>
					<input name='email' placeholder='email@somesite.com' ref={register({ required: true })} />
					{errors.email && <p>Looks like there was an error. Error Type: {errors.email.type}</p>}
				</div>
				<div data-testid='mInput'>
					<label htmlFor='message'>Message</label>
					<textarea name='message' ref={register({ required: false })} />
				</div>
				{data && <pre style={{ textAlign: 'left', color: 'white' }}>{JSON.stringify(data, null, 2)}</pre>}
				<input type='submit' data-testid='sBtn' />
			</form>
		</div>
	)
}

export default ContactForm
