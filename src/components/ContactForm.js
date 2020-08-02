import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
	const [ data, setData ] = useState()
	const { register, errors, handleSubmit, reset } = useForm({
		mode: 'onBlur',
	})
	const onSubmit = data => {
		setData(data)
		register(data)
	}

	const logger = e => {
		let data = e.target
		console.log(`data in ContactForm: ${data}`)
	}

	return (
		<div className='App'>
			<form
				className='contact-form'
				data-testid='contactForm'
				onChange={logger}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div data-testid='FNInput'>
					<label htmlFor='firstName'>First Name*</label>
					<input name='firstName' placeholder='First Name' ref={register({ required: true })} />
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
				{data && (
					<pre className='data-display'>
						<h3>Here is the submitted data:</h3>
						{JSON.stringify(data, null, 2)}
					</pre>
				)}
				<button type='submit' data-testid='sBtn' className='btn'>
					SUBMIT FORM
				</button>
				<button data-testid='rBtn' className='btn' onClick={reset}>
					RESET FORM
				</button>
			</form>
		</div>
	)
}

export default ContactForm
