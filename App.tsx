import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { AppNavigation } from './old_2/src/navigation/AppNavigation'
import { store } from './old_2/src/store/store'

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
		</Provider>
	)
}
