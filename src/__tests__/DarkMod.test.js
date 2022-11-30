import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { render } from './test-utils'
import DarkMod from '../components/DarkMod'


describe('Test du thème', () => {
	test('Le thème change lors du clique sur le boutton', () => {
		render(<DarkMod />)

		const button = screen.getByLabelText('Theme')
		expect(screen.getByText(/Light Mode/i)).toBeInTheDocument()

		userEvent.click(button)
		expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument()
	})
})
