import tw, { styled } from 'twin.macro'
import './App.css'
import { Header } from './components/Header'
import { useTheme } from './context/themeContext'

const AppContainer = styled.div`
	background-color: ${(props) => props.bg};
	color: ${(props) => props.fg};

	${tw`
			min-h-screen
	`}
`
function App() {
	const [theme] = useTheme()
	const { backgroundP: bg, foreground: fg } = theme

	return (
		<AppContainer
			bg={bg}
			fg={fg}>
			<Header />
		</AppContainer>
	)
}

export default App
