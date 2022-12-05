import tw, { styled } from 'twin.macro'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { useTheme } from './context/themeContext'
import { useState } from 'react'
import Contents from './components/Contents'
import RegionList from './components/RegionList'
import { regionsList } from './commons/constants'

const AppContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundP};
	color: ${(props) => props.theme.foreground};

	${tw`
			min-h-screen
	`}
`
const FiltersContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundP};

	${tw`
			flex
			flex-row
			sm:flex-row
			justify-between
			px-10
			h-16
			my-24
			md:my-10
	`}
`
function App() {
	const [theme] = useTheme()
	const [search, setSearch] = useState('')
	const [region, setRegion] = useState(regionsList[0])

	const handleSearchChange = (value) => {
		setSearch(value)
	}
	const handleRegion = (value) => {
		setRegion(value)
	}

	return (
		<AppContainer theme={theme}>
			<Header />
			<FiltersContainer theme={theme}>
				<SearchBar
					search={search}
					handleSearchChange={handleSearchChange}
				/>
				<RegionList
					region={region}
					handleRegion={handleRegion}
				/>
			</FiltersContainer>
			<Contents
				search={search}
				region={region}
			/>
		</AppContainer>
	)
}

export default App
