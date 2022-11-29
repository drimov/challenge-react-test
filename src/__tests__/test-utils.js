import * as React from 'react'
import { render as renderReactTestingLib } from '@testing-library/react'
import { ThemeProvider } from '../context/themeContext'

const render = (ui) => {
	const Wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

	return renderReactTestingLib(ui, { wrapper: Wrapper })
}

export * from '@testing-library/react'
export { render }
