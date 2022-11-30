import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import useCountries from '../hooks/useCountries'

describe('Test de récupération de données dans les cas normaux', () => {
	beforeEach(() => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve({ data: 'region' }),
			})
		)
	})

	test('Le status par défaut est `idle est les données sont null`', async () => {
		const { result } = renderHook(useCountries)
		expect(result.current.state.status).toBe('idle')
		expect(result.current.state.data).toBe(null)
	})
	test('Lorsque les données sont prêtes, le status est `done` et les données ne sont pas null', async () => {
		const { result } = renderHook(useCountries)
		await act(() => {
			result.current.execute()
		})
		expect(result.current.state.status).toBe('done')
		expect(result.current.state.data).toEqual({ data: 'region' })
	})
})
describe(`Test d'erreur lors d'appel d'api`, () => {
	beforeEach(() => {
		global.fetch = jest.fn(() =>
			Promise.reject({ error: "Impossible d'appelée l'api" })
		)
	})
	test("Le status lors d'une erreur est `fail` et retourne une erreur", async () => {
		const { result } = renderHook(useCountries)
		await act(() => {
			result.current.execute()
		})
		expect(result.current.state.status).toBe('fail')
		expect(result.current.state.error).toMatchInlineSnapshot(`
Object {
  "error": "Impossible d'appelée l'api",
}
`)
	})
})
