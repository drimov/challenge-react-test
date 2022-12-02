import { useReducer, useCallback } from 'react'
import { apiCountries } from '../commons/api/routes'

/**
 *
 * @param {*} state ensemble des états
 * @param {*} action actions à effectuées
 * @returns retourne les nouveaux états
 */
const reducerCountries = (state, action) => {
	switch (action.type) {
		case 'fetching':
			return { status: 'fetching', data: null, error: null }
		case 'done':
			return { status: 'done', data: action.payload, error: null }
		case 'fail':
			return { status: 'fail', data: null, error: action.error }
		default:
			throw new Error("L'action sur le reducerCountries n'est pas supportée.")
	}
}

/**
 *
 * @returns state et la fonctions execute
 */
const useFetchCountries = () => {
	const [state, dispatch] = useReducer(reducerCountries, {
		data: null,
		error: null,
		status: 'idle',
	})

	/**
	 * callback execute une promise
	 */
	const execute = useCallback(() => {
		dispatch({ type: 'fetching' })

		fetch(apiCountries)
			.then((response) => response.json())
			.then((countries) => dispatch({ type: 'done', payload: countries }))
			.catch((err) => dispatch({ type: 'fail', error: err }))
	}, [])

	const setData = useCallback((countries) => {
		dispatch({ type: 'done', payload: countries })
	}, [])

	return { ...state, execute, setData }
}

export default useFetchCountries
