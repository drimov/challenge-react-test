import { themes } from '../context/themeContext'

/**
 *
 * @param {string} text prend un texte en paramètre
 * @returns {themes} renvoie le thème correspondant
 */
const textToTheme = (text) => {
	if (!text) {
		throw new Error(`le texte n'est pas renseigner pour \`textToTheme\``)
	}
	return text === 'light' ? themes.light : themes.dark
}

/**
 *
 * @param {themes} theme prend un theme en paramètre
 * @returns renvoie le texte correspondant
 */
const themeToText = (theme) => {
	if (!theme) {
		throw new Error(`le thème n'est pas renseigner pour \`textToTheme\``)
	}
	return theme === themes.light ? 'light' : 'dark'
}

export { textToTheme, themeToText }
