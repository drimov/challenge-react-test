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
const Button = ({ onClick, children }) => {
	return (
		<button
			id='themeChange'
			onClick={onClick}>
			{children}
		</button>
	)
}
const Icon = ({ iconColor }) => {
	return <MoonIcon className={`${iconColor} h-16`} />
}
const Text = ({ theme }) => {
	const { foreground: fg } = theme
	return (
		<p className={`color:${fg}`}>
			{theme === themes.light ? 'Light Mode' : 'Dark Mode'}
		</p>
	)
}

const DarMod = () => {
	const [theme, setTheme] = useTheme()
	const { iconColor: ic } = theme

	const handleTheme = () => {
		theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
	}

	return (
		<DarkModContainer>
			<Label htmlFor='themeChange'>Theme</Label>
			<Button onClick={handleTheme}>
				<Icon iconColor={ic} />
			</Button>
			<Text theme={theme} />
		</DarkModContainer>
	)
}

export default DarMod
