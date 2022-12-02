import React from 'react'
import { useTheme, themes } from '../context/themeContext'
import { MoonIcon } from '@heroicons/react/24/solid'
import tw, { styled } from 'twin.macro'

const DarkModContainer = styled.div`
	${tw`
        w-64
        text-center
    `}
`
const Label = styled.label`
	${tw`
        hidden
    `}
`
const TextContainer = styled.p`
	${tw`
        text-base
				md:text-2xl
    `}
`
const Button = ({ onClick, children }) => {
	return (
		<button
			id='themeChange'
			onClick={onClick}>
			{children}
		</button>
	)
}
const Icon = () => {
	return <MoonIcon className={`h-16`} />
}
const Text = ({ theme }) => {
	return (
		<TextContainer>
			{theme === themes.light ? 'Light Mode' : 'Dark Mode'}
		</TextContainer>
	)
}

const DarMod = () => {
	const [theme, setTheme] = useTheme()

	const handleTheme = () => {
		theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
	}

	return (
		<DarkModContainer>
			<Label htmlFor='themeChange'>Theme</Label>
			<Button onClick={handleTheme}>
				<Icon />
			</Button>
			<Text theme={theme} />
		</DarkModContainer>
	)
}

export default DarMod
