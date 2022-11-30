import { renderHook } from '@testing-library/react'
import useThemeStorage from '../hooks/useThemeStorage'
import { act } from 'react-dom/test-utils'

beforeEach(() => {
	window.localStorage.clear()
})

describe('Test du cache local', () => {
	test('Le cache local change lors du changement de thème', () => {
		const { result } = renderHook(useThemeStorage)
		expect(result.current.local).toBe('light')
		act(() => {
			result.current.setStorage('dark')
		})
		expect(result.current.local).toBe('dark')
	})

	test('Un thème null ne change pas le cache (rechargement de la page)', () => {
		const { result } = renderHook(useThemeStorage)
		expect(result.current.local).toBe('light')
		act(() => {
			result.current.setStorage(null)
		})
		expect(result.current.local).toBe('light')
	})
	test('Si le cache est null, le thème clair est appliqué par défaut', () => {
		const { result } = renderHook(useThemeStorage)
		expect(result.current.local).toBe('light')
	})
})
