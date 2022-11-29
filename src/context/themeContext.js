import React, { useContext, useState, useEffect } from 'react'
import { dark, light } from '../theme/index'
import useThemeStorage from '../hooks/useThemeStorage'
import { textToTheme, themeToText } from '../utils/themeUtils'

/**
 * Liste de thème
 */
const themes = {
	light,
	dark,
}

const ThemeContext = React.createContext(themes.light)

/**
 *
 * @param {*} props prend des props en paramètre
 * @returns renvoie un provider pour le thème
 */
const ThemeProvider = (props) => {
	const { local, setStorage } = useThemeStorage()
	const [theme, setTheme] = useState(
		local !== null ? textToTheme(local) : themes.light
	)

	useEffect(() => {
		const result = themeToText(theme)
		setStorage(result)
	}, [theme, setStorage])

	return (
		<ThemeContext.Provider
			value={[theme, setTheme]}
			{...props}
		/>
	)
}

/**
 *
 * @returns renvoie le thème
 */
const useTheme = () => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error('useTheme doit être utiliser dans ThemeProvider')
	}
	return context
}

export { themes, useTheme, ThemeProvider }
