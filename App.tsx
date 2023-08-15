import { MainScreen } from './src/MainScreen'
import { TodoState } from './src/context/TodoState'

export default function App() {
	return (
		<TodoState>
			<MainScreen />
		</TodoState>
	)
}
