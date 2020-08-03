import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const ContactForm = () => {
	const [ data, setData ] = useState({})

	const [ response, setResponse ] = useState(null)

	const { register, errors, handleSubmit, reset } = useForm({
		mode: 'onBlur',
	})

	const onSubmit = values => {
		setData(values)
		axios
			.post('https://reqres.in/api/users', data)
			.then(console.log(`data in useEffect: ${data}`))
			.then(res => {
				setResponse(res.data)
			})
			.catch(err => {
				setResponse(err.message)
			})
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
							minLength: { value: 4, message: 'ERROR: first name shoud be at least 4 chars.' },
						})}
					/>
					{errors.firstName && <p> {errors.firstName.message}</p>}
				</div>
				<div data-testid='lnInput'>
					<label htmlFor='lastName'>Last Name*</label>
					<input
						name='lastName'
						placeholder='Last Name'
						ref={register({
							required: true,
							minLength: { value: 4, message: 'ERROR: last name should be at least 4 chars.' },
						})}
					/>
					{errors.lastName && <p>{errors.lastName.message}</p>}
				</div>
				<div data-testid='emailInput'>
					<label htmlFor='email'>Email*</label>
					<input
						name='email'
						placeholder='email@somesite.com'
						type='email'
						ref={register({
							required: true,
							minLength: {
								value: 15,
								message: 'Entered value does not match email pattern',
							},
						})}
					/>
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div data-testid='mInput'>
					<label htmlFor='message'>Message</label>
					<textarea name='message' ref={register({ required: false })} />
				</div>
				{response && (
					<pre className='data-display'>
						{JSON.stringify(data, null, 2)}
						<h3>Here is the submitted data:</h3>
						{JSON.stringify(response, null, 2)}
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
