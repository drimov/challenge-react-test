import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegionList from '../components/RegionList'
import { renderTheme } from '../test/test-utils'

describe('Test de la liste de région', () => {
	test("Si on clique sur le menu déroulant s'ouvre et affiche les régions", () => {
		const region = 'All'
		const handleRegion = jest.fn()
		renderTheme(
			<RegionList
				region={region}
				handleRegion={handleRegion}
			/>
		)

		const button = screen.getByRole('button')
		expect(screen.queryByText(/Europe/i)).not.toBeInTheDocument()
		userEvent.click(button)
		expect(screen.getByText(/Europe/i)).toBeInTheDocument()
	})
	test('Si on clique sur un menu de la liste on récupère la région', () => {
		const region = 'All'
		const handleRegionMock = jest.fn((choice) => choice)
		renderTheme(
			<RegionList
				region={region}
				handleRegion={handleRegionMock}
			/>
		)

		const button = screen.getByLabelText(/Region List/i)
		userEvent.click(button)
		userEvent.click(screen.queryByText(/Europe/i))
		expect(handleRegionMock).toHaveBeenCalled()
		expect(handleRegionMock.mock.results[0].value).toBe('Europe')
	})
})
