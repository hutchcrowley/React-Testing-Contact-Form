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

	return (
		<div className='App'>
			<form className='contact-form' data-testid='contactForm' onSubmit={handleSubmit(onSubmit)}>
				<div data-testid='FNInput'>
					<label htmlFor='firstName'>First Name*</label>
					<input
						name='firstName'
						placeholder='First Name'
						ref={register({
							required: true,
							minLength: 4,
						})}
					/>
					{errors.firstName && errors.firstName.type === 'required' && <p>This is required</p>}
					{errors.firstName &&
					errors.firstName.type === 'minLength' && <p>first name shoud be at least 4 chars</p>}
				</div>
				<div data-testid='lnInput'>
					<label htmlFor='lastName'>Last Name*</label>
					<input
						name='lastName'
						placeholder='Last Name'
						ref={register({
							required: true,
							minLength: 6,
						})}
					/>
					{errors.lastName && errors.lastName.type === 'required' && <p>This is required</p>}
					{errors.lastName &&
					errors.lastName.type === 'minLength' && <p>last name shoud be at least 6 chars</p>}
				</div>
				<div data-testid='emailInput'>
					<label htmlFor='email'>Email*</label>
					<input
						name='email'
						placeholder='email@somesite.com'
						type='email'
						ref={register({
							required: true,
							pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
						})}
					/>
					{errors.email && errors.email.type === 'required' && <p>This is required</p>}
					{errors.email && errors.email.type === 'pattern' && <p>email does not match email pattern</p>}
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
