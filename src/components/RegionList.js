import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { useTheme } from '../context/themeContext'
import { regionsList } from '../commons/constants'

const RegionContainer = styled.div`
	background-color: ${(props) => props.bg};
	${tw`
      relative
      flex
      flex-col
      w-72
      rounded-md
  `}
`
const MenuContainer = styled.div`
	${tw`
    flex
    flex-row
    items-center
    rounded-md
    px-2
    m-2
    md:m-0
  `}
`
const Button = styled.button`
	${tw`
      text-sm
      my-4
      mx-2
      md:text-xl
  `}
`
const Icon = ({ open }) => (
	<ChevronRightIcon className={`h-5 ${open ? 'arrow-down' : 'arrow-init'}`} />
)

const Regions = styled.div`
	background-color: ${(props) => props.bg};
	${tw`
      flex
      my-2
      rounded-md
  `}
`
const Region = styled.li`
	cursor: pointer;
	${tw`
      m-1
      mx-3
  `}
`
const ListContainer = styled.ul`
	${tw`
      mt-4
  `}
`
const Label = styled.label`
	${tw`
		hidden
	`}
`

const List = ({ children, open }) => {
	const [theme] = useTheme()
	const { backgroundSd: bg } = theme

	if (open) {
		return (
			<Regions bg={bg}>
				<ListContainer>{children}</ListContainer>
			</Regions>
		)
	}
}
const filterList = (region) => {
	return regionsList.filter((name) => name !== region)
}

const RegionList = ({ region, handleRegion }) => {
	const [open, setOpen] = useState(false)
	const [theme] = useTheme()

	const { backgroundSd: bg } = theme
	const handleOpen = () => {
		setOpen(!open)
	}
	const listRegions = filterList(region)
	return (
		<RegionContainer bg={bg}>
			<MenuContainer>
				<Label htmlFor='buttonRegion'>Region List</Label>
				<Button
					id='buttonRegion'
					onClick={(e) =>
						handleOpen(e)
					}>{`Filter by Region : ${region}`}</Button>
				<Icon open={open} />
			</MenuContainer>
			<List open={open}>
				{listRegions.map((item, index) => (
					<Region
						key={index}
						onClick={(e) => handleRegion(item, e)}>
						{item}
					</Region>
				))}
			</List>
		</RegionContainer>
	)
}

export default RegionList
