import tw, { styled } from 'twin.macro'
import './App.css'

const AppContainer = styled.h1`
	${tw`
		text-3xl
		font-bold
		underline
	`}
`
function App() {
	return <AppContainer>Hello world!</AppContainer>
}

export default App
