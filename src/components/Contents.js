import { useState, useEffect } from 'react'
import tw, { styled } from 'twin.macro'
import useCountries from '../hooks/useCountries'
import { useTheme } from '../context/themeContext'

const StatusContainer = styled.div``
const StatusText = styled.p`
	${tw`
      text-center
      h-screen
  `}
`
const FilterContainer = styled.div`
	${tw`
      flex
      flex-wrap
      justify-center
  `}
`
const DisplayContainer = styled.div`
	background-color: ${(props) => props.bg};
	${tw`
      w-64
      m-4
      rounded-md
  `}
`

const DisplayInfos = styled.div`
	${tw`
      m-4
  `}
`
const Status = ({ text, value = null }) => {
	return (
		<StatusContainer>
			<StatusText>
				{text} {value ? `: ${value}` : ''}
			</StatusText>
		</StatusContainer>
	)
}

const Contents = ({ search, region }) => {
	const [component, setComponant] = useState(null)
	const state = useCountries()
	const { data, error, status } = state

	useEffect(() => {
		if (search !== '' && search !== undefined && search !== null) {
			setComponant('search')
		}
	}, [search])
	useEffect(() => {
		region === 'All' ? setComponant(null) : setComponant('region')
	}, [region])

	switch (status) {
		case 'idle':
			return <Status text={`Initialization...`} />
		case 'fetching':
			return <Status text={`Loading...`} />
		case 'fail':
			return <Status text={`Error occured : ${error}`} />
		case 'done':
			return (
				<Filters
					component={component}
					data={data}
					search={search}
					region={region}
				/>
			)

		default:
			throw new Error(`Status is null`)
	}
}
const Filters = ({ component, data, search, region }) => {
	let choice = null

	switch (component) {
		case null:
			choice = <ContentDisplay dataFilter={data} />
			break
		case 'region':
			choice = (
				<FilterByRegion
					world={data}
					region={region}
				/>
			)
			break
		case 'search':
			choice = (
				<FilterBySearch
					world={data}
					search={search}
				/>
			)
			break
		default:
			throw new Error(`No component choose in Filters`)
	}
	return <FilterContainer>{choice}</FilterContainer>
}

const ContentDisplay = ({ dataFilter }) => {
	const [theme] = useTheme()
	const { backgroundSd: bg } = theme
	return dataFilter.map((item, index) => (
		<DisplayContainer
			key={index}
			bg={bg}>
			<DisplayImg img={item.flags.svg} />
			<DisplayInfos>
				<p>Name: {item.name.official}</p>
				<p>Capital: {item.capital}</p>
				<p>Region: {item.region}</p>
				<p>Population: {item.population}</p>
				<p>
					Currencies :{' '}
					{Object.values(item.currencies).map((currency, index) => (
						<span key={index}>
							{currency.name} <br />
							Symbol : {currency.symbol}
						</span>
					))}
				</p>
			</DisplayInfos>
		</DisplayContainer>
	))
}

const FilterBySearch = ({ world, search }) => {
	const dataFilter = world.filter((item) =>
		item.name.official.toLowerCase().includes(search.toLowerCase())
	)

	return <ContentDisplay dataFilter={dataFilter} />
}
const FilterByRegion = ({ world, region }) => {
	const dataFilter = world.filter((item) => item.region.includes(region))

	return <ContentDisplay dataFilter={dataFilter} />
}

export default Contents

// Issue highlight && change color =>1.6.3
// => https://github.com/styled-components/vscode-styled-components/issues/292
const DisplayImg = styled.img.attrs((props) => ({
	src: props.img,
}))`
	${tw`
      h-40
      mx-auto
      p-2
  `}
`
