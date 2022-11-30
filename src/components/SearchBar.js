import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import tw, { styled } from 'twin.macro'
import { useTheme } from '../context/themeContext'

const SearchbarContainer = styled.div`
	background-color: ${(props) => props.bg};
	${tw`
      flex
      flex-row
      rounded-md
      items-center
      my-2
      md:m-0
  `}
`
const Label = styled.label`
	${tw`
        hidden
    `}
`
const InputContainer = styled.input.attrs({
	type: 'text',
	placeholder: 'Search for a country...',
})`
	background-color: ${(props) => props.bg};
	${tw`
      text-base
      md:text-2xl
      md:m-3
      w-min
      rounded-md
      m-3
  `};
`
const Input = ({ onChange, search, bg }) => {
	return (
		<InputContainer
			bg={bg}
			id={'search'}
			onChange={(e) => onChange(e.target.value)}
			value={search}
		/>
	)
}
const Icon = () => {
	return <MagnifyingGlassIcon className={`h-10 m-3 hidden md:block`} />
}

const Searchbar = ({ search = '', handleSearchChange }) => {
	const [theme] = useTheme()
	const { backgroundSd: bg } = theme

	return (
		<SearchbarContainer bg={bg}>
			<Icon />
			<Label htmlFor='search'>Search</Label>
			<Input
				bg={bg}
				search={search}
				onChange={handleSearchChange}
			/>
		</SearchbarContainer>
	)
}

export default Searchbar
