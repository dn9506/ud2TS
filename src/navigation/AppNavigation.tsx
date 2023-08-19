import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'
import { RootStackParamList } from './types'

const PostNavigator = createStackNavigator<RootStackParamList>()

export const AppNavigation = () => {
	return (
		<PostNavigator.Navigator
			initialRouteName='Main'
			screenOptions={{
				headerStyle: { backgroundColor: THEME.MAIN_COLOR },
				headerTintColor: 'white',
			}}
		>
			<PostNavigator.Screen
				name='Main'
				component={MainScreen}
				options={MainScreen.navigationOptions}
			/>
			<PostNavigator.Screen
				name='Post'
				component={PostScreen}
				options={PostScreen.navigationOptions}
			/>
		</PostNavigator.Navigator>
	)
}
