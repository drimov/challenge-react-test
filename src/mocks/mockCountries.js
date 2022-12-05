import useFetchCountries from '../hooks/useFetchCountries'

const MockCountries = () => {
	const { data, error, status, execute } = useFetchCountries()

	const handleFetch = () => {
		execute()
	}

	let textStatus = null
	switch (status) {
		case 'idle':
			textStatus = 'Initialization...'
			break
		case 'fetching':
			textStatus = 'Loading...'
			break
		case 'fail':
			textStatus = `Error occured : ${error}`
			break
		case 'done':
			textStatus = `Done`
			break
		default:
			throw new Error('Status is null or undefined')
	}

	return (
		<div>
			<label htmlFor='buttonFetch'>Test fetch</label>
			<div role={status === 'fail' ? 'alert' : null}>
				<p>{textStatus}</p>
			</div>
			<input
				type={'button'}
				id='buttonFetch'
				onClick={handleFetch}
				value='Update'
			/>
			<div>{data ?? null}</div>
		</div>
	)
}

export default MockCountries
