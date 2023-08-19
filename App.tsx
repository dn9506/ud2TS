import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { bootstrap } from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation'

export default function App() {
	useEffect(() => {
		bootstrap()
	}, [])
	return (
		<NavigationContainer>
			<AppNavigation />
		</NavigationContainer>
	)
}
