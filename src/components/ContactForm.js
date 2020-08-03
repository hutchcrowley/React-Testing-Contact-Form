import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
	const [ data, setData ] = useState(null)

	const { register, errors, handleSubmit, reset } = useForm({
		mode: 'onBlur',
	})

	const onSubmit = values => {
		setData(values)
	}

	const handleReset = values => {
		reset(values)
		setData(null)
	}

	return (
		<div className='App'>
			<form className='contact-form' data-testid='contactForm' onSubmit={handleSubmit(onSubmit)}>
				<div data-testid='FNInput'>
					<label htmlFor='firstName'>First Name*</label>
					<input
						type='text'
						name='firstName'
						placeholder='First Name'
						ref={register({
							required: true,
							minLength: 4,
						})}
					/>
					{errors.firstName &&
					errors.firstName.type === 'required' && (
						<span role='alert' className='errors'>
							<p>This is required</p>
						</span>
					)}
					{errors.firstName &&
					errors.firstName.type === 'minLength' && (
						<span role='alert' className='errors'>
							<p>first name shoud be at least 4 chars</p>
						</span>
					)}
				</div>
				<div data-testid='lnInput'>
					<label htmlFor='lastName'>Last Name*</label>
					<input
						type='text'
						name='lastName'
						placeholder='Last Name'
						ref={register({
							required: true,
							minLength: 6,
						})}
					/>
					{errors.lastName &&
					errors.lastName.type === 'required' && (
						<span role='alert' className='errors'>
							<p>This is required</p>
						</span>
					)}
					{errors.lastName &&
					errors.lastName.type === 'minLength' && (
						<span role='alert' className='errors'>
							<p>last name shoud be at least 6 chars</p>
						</span>
					)}
				</div>
				<div data-testid='emailInput'>
					<label htmlFor='email'>Email*</label>
					<input
						type='email'
						name='email'
						placeholder='email@somesite.com'
						ref={register({
							required: true,
							pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
						})}
					/>
					{errors.email &&
					errors.email.type === 'required' && (
						<span role='alert' className='errors'>
							<p>This is required</p>
						</span>
					)}
					{errors.email &&
					errors.email.type === 'pattern' && (
						<span role='alert' className='errors'>
							<p>email does not match email pattern</p>
						</span>
					)}
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
				<input type='submit' data-testid='sBtn' className='btn' />
				{/* SUBMIT FORM
				</input> */}
				<input type='reset' data-testid='rBtn' className='btn' onClick={handleReset} />
				{/* RESET FORM
				</input> */}
			</form>
		</div>
	)
}

export default ContactForm
