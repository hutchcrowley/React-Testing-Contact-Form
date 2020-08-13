import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('app renders successfully', async () => {
	const { getByTestId } = render(<App />)
	expect(getByTestId('app')).toBeInTheDocument()
})

test('app renders successfully', async () => {
	const { getByText } = render(<App />)
	expect(getByText('Unit-Testing React Apps')).toBeVisible()
})

test('this test should fail', () => {
	const { getByText } = render(<App />)
	expect(getByText('Unit-Testing React Apps')).not.toBeVisible()
})

test('snapshot is unchanged', async () => {
	const { getByTestId } = render(<App />)

	const tree = getByTestId('app')
	expect(tree).toMatchSnapshot()
})
