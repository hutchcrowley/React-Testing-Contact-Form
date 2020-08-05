import React from 'react'
import App from './App'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

// Describe block contains all test for the App component
describe('App', () => {
	beforeEach(() => {
		// Arrange - this is where you set up all the data you need to run the test
		const App = render(<App />)
	})

	it('renders without crashing', () => {
		// Act - actually run the test
		expect(App.toBeVisible)
		// Assert
	})
})
