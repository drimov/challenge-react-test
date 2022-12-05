import { setupServer } from 'msw/node'
import { rest } from 'msw'

import handlers from '../mocks/handlers'
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MockCountries from '../mocks/mockCountries'

const server = setupServer(...handlers)

beforeAll(() => {
	server.listen()
})
afterAll(() => {
	server.close()
})
afterEach(() => {
	server.resetHandlers()
})

describe("Test du de récupération des données de l'api", () => {
	test('Le status en idle est `Initialization...`', async () => {
		render(<MockCountries />)
		expect(screen.getByText(/Initialization.../i)).toBeInTheDocument()
	})
	test('Les données sont null en idle', async () => {
		render(<MockCountries />)
		expect(screen.getByText(/Initialization../i)).toBeInTheDocument()

		expect(screen.queryByText(/test1/i)).not.toBeInTheDocument()
		expect(screen.queryByText(/test2/i)).not.toBeInTheDocument()
	})

	test('Le status en fetching est `Loading...`', async () => {
		render(<MockCountries />)
		const button = screen.getByRole('button', { name: 'Update' })
		expect(screen.getByText(/Initialization../i)).toBeInTheDocument()

		userEvent.click(button)
		await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))
	})
	test('Le status en done renvoie les données', async () => {
		render(<MockCountries />)
		const button = screen.getByRole('button', { name: 'Update' })
		expect(screen.getByText(/Initialization../i)).toBeInTheDocument()

		userEvent.click(button)
		await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))
		expect(screen.getByText(/Done/i)).toBeInTheDocument()
		expect(screen.getByText(/test1/i)).toBeInTheDocument()
		expect(screen.getByText(/test2/i)).toBeInTheDocument()
	})
	test('Le status fail nous renvoie une erreur', async () => {
		server.use(
			rest.get(`https://restcountries.com/v3.1/all`, async (req, res, ctx) => {
				return res(ctx.status(500))

			})
		)
		render(<MockCountries />)

		const button = screen.getByRole('button', { name: 'Update' })
		expect(screen.getByText(/Initialization../i)).toBeInTheDocument()

		userEvent.click(button)
		const error = await screen.findByText(/Error/i)
		expect(error).toBeInTheDocument()

	})

})
