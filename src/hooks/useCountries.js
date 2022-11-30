import { useReducer, useCallback } from 'react'
import { apiCountries } from '../commons/api/routes'

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
const useCountries = () => {
	const [state, dispatch] = useReducer(reducerCountries, {
		data: null,
		error: null,
		status: 'idle',
	})

	const execute = useCallback(() => {
		dispatch({ type: 'fetching' })

		fetch(apiCountries)
			.then((response) => response.json())
			.then((countries) => dispatch({ type: 'done', payload: countries }))
			.catch((err) => dispatch({ type: 'fail', error: err }))
	}, [])

	return { state, execute }
}

export default useCountries
