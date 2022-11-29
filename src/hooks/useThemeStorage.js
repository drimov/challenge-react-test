import { useState } from 'react'

const THEME_KEY = 'theme'

/**
 *
 * @param {*} theme prend un theme en paramètre
 * @returns retourne la valeur stocké en local
 */
const useThemeStorage = () => {
	const [local, setLocal] = useState(
		window.localStorage.getItem(THEME_KEY) || null
	)

	if (!local) {
		setLocal('light')
		window.localStorage.setItem(THEME_KEY, 'light')
	}
	const setStorage = (text) => {
		if (text !== null) {
			setLocal(text)
			window.localStorage.setItem(THEME_KEY, text)
		}
	}

	return { local, setStorage }
}

export default useThemeStorage
