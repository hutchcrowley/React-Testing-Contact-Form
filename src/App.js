import React from 'react'

import ContactForm from './components/ContactForm'

export default function App() {
	return (
		<div className='App' data-testid='app'>
			<h1 className='app-h1' data-testid='app-h1'>
				Unit-Testing React Apps
			</h1>
			<ContactForm />
		</div>
	)
}
