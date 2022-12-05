import { useEffect } from 'react'
import useFetchCountries from '../hooks/useFetchCountries'

/**
 * Gère l'appel d'API
 * @returns les données, erreurs et le status
 */
const useCountries = () => {
	const { data, status, error, execute } = useFetchCountries()

	useEffect(() => {
		if (!data) {
			execute()
		}
	}, [data, execute])
	return { data, error, status }
}

export default useCountries
