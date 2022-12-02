import * as React from 'react'
import { render as renderReactTestingLib } from '@testing-library/react'
import { ThemeProvider } from '../context/themeContext'
import { CacheProvider } from '../context/cacheContext'

const renderTheme = (ui) => {
	const Wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

	return renderReactTestingLib(ui, { wrapper: Wrapper })
}
const renderCache = (ui) => {
	const Wrapper = ({ children }) => <CacheProvider>{children}</CacheProvider>

	return renderReactTestingLib(ui, { wrapper: Wrapper })
}

export * from '@testing-library/react'
export { renderTheme, renderCache }
