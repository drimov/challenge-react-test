import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { renderTheme } from '../test/test-utils'
import DarkMod from '../components/DarkMod'

describe('Test du composant chargé de changer le thème', () => {
	test('Le thème change lors du clique sur le boutton', () => {
		renderTheme(<DarkMod />)
		const button = screen.getByLabelText('Theme')
		expect(screen.getByText(/Light Mode/i)).toBeInTheDocument()
		expect(screen.queryByText(/Dark Mode/i)).not.toBeInTheDocument()
		userEvent.click(button)
		expect(screen.queryByText(/Light Mode/i)).not.toBeInTheDocument()
		expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument()
	})
})
