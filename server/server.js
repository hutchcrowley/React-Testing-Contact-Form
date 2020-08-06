const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 5000

let nextId = 2

let contacts = [
	{
		firstname: 'Hutch',
		lastname: 'Crowley',
		email: 'rachel@contacts.com',
		message: 'suck it',
	},
]

app.use(bodyParser.json())

app.get('/api/contacts', (req, res) => {
	setTimeout(() => {
		res.send(contacts)
	}, 1000)
})

app.get('/api/contacts/:id', (req, res) => {
	const friend = contacts.find(f => f.id === req.params.id)

	if (friend) {
		res.status(200).json(friend)
	} else {
		res.status(404).send({ msg: 'Friend not found' })
	}
})

app.post('/api/contacts', (req, res) => {
	const friend = { id: getNextId(), ...req.body }

	contacts = [ ...contacts, friend ]

	res.send(contacts)
})

app.put('/api/contacts/:id', (req, res) => {
	const { id } = req.params

	const friendIndex = contacts.findIndex(f => f.id == id)

	if (friendIndex > -1) {
		const friend = { ...contacts[friendIndex], ...req.body }

		contacts = [ ...contacts.slice(0, friendIndex), friend, ...contacts.slice(friendIndex + 1) ]
		res.send(contacts)
	} else {
		res.status(404).send({ msg: 'Contact not found' })
	}
})

app.delete('/api/contacts/:id', (req, res) => {
	const { id } = req.params

	contacts = contacts.filter(f => f.id !== Number(id))

	res.send(contacts)
})

function getNextId() {
	return nextId++
}

app.listen(port, () => {
	console.log(`server listening on port ${port}`)
})
