import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { AppNavigation } from './src/navigation/AppNavigation'
import store from './src/store/store'

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
		</Provider>
	)
}
