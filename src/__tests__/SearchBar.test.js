import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import Searchbar from '../components/Searchbar'
import { renderTheme } from '../test/test-utils'

const text = 'ceci est un test'
let handleSearchChange

beforeEach(() => {
	handleSearchChange = jest.fn()
})

describe('Test du champs de recherche', () => {
	test('Le champs est vide par défaut', () => {
		renderTheme(
			<Searchbar
				handleSearchChange={handleSearchChange}
			/>
		)

		expect(screen.getByRole('textbox')).toHaveValue('')
	})
	test('Si on écrit dans le champs la méthode handleSearchChange doit être appelée', () => {
		renderTheme(
			<Searchbar
				handleSearchChange={handleSearchChange}
			/>
		)
		const inputSearch = screen.getByText(/Search/i)

		userEvent.type(inputSearch, text)
		expect(handleSearchChange).toHaveBeenCalled()
	})
	test('Le mot clé tapé dans le champs de recherche doit être le même que celui recherché', () => {
		renderTheme(
			<Searchbar
				search={text}
				handleSearchChange={handleSearchChange}
			/>
		)
		const inputSearch = screen.getByRole('textbox')

		expect(inputSearch).toHaveValue(text)
	})
})
