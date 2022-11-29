import React from 'react'
import tw, { styled } from 'twin.macro'
import { useTheme } from '../context/themeContext'
import DarkMod from './DarkMod'

const HeaderContainer = styled.header`
	background-color: ${(props) => props.bg};
	${tw`
    w-full
    flex
    flex-row
    justify-between
    items-center
    p-6
  `}
`

const Title = styled.h1`
	${tw`
      text-5xl
  `}
`
export const Header = () => {
	const [theme] = useTheme()
	const { backgroundSd: bg} = theme

	return (
		<HeaderContainer bg={bg}>
			<div>
				<Title>Where in the world?</Title>
			</div>
			<DarkMod />
		</HeaderContainer>
	)
}
