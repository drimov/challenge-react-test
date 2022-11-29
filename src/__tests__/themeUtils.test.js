import { textToTheme, themeToText } from '../utils/themeUtils'
import { themes } from '../context/themeContext'

describe('Test des fonctionnalitées du `themeUtils`', () => {
	test('converti un texte `light` on récupère le thème clair', () => {
		const text = 'light'

		const result = textToTheme(text)
		expect(result).toBe(themes.light)
	})
	test('converti un texte `dark` on récupère le thème sombre', () => {
		const text = 'dark'

		const result = textToTheme(text)
		expect(result).toBe(themes.dark)
	})
	test("si le texte n'est pas renseigner renvoie une erreur", () => {
		const text = undefined

		const result = () => textToTheme(text)
		expect(result).toThrowErrorMatchingSnapshot()
	})

	test('converti un thème sombre on récupère le texte `light`', () => {
		const theme = themes.light

		const result = themeToText(theme)
		expect(result).toBe('light')
	})
	test('converti un thème clair on récupère le texte `dark`', () => {
		const theme = themes.dark

		const result = themeToText(theme)
		expect(result).toBe('dark')
	})
	test("si le thème n'est pas renseigner renvoie une erreur`", () => {
		const theme = undefined

		const result = () => themeToText(theme)
		expect(result).toThrowErrorMatchingSnapshot()
	})
})
