import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { BookedScreen } from '../screens/BookedScreen'
import { LoadingScreen } from '../screens/LoadingScreen'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'
import { RootStackParamList } from './types'

const BottomNavigation = createBottomTabNavigator()
const PostNavigator = createStackNavigator<RootStackParamList>()

const StackNavigator = () => (
	<PostNavigator.Navigator
		initialRouteName='Loading'
		screenOptions={{
			headerStyle: { backgroundColor: THEME.MAIN_COLOR },
			headerTintColor: 'white',
		}}
	>
		<PostNavigator.Screen name='Tab' component={BottomTabNavigator} />
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
		<PostNavigator.Screen
			name='Loading'
			component={LoadingScreen}
			options={LoadingScreen.navigationOptions}
		/>
	</PostNavigator.Navigator>
)

const BottomTabNavigator = () => (
	<BottomNavigation.Navigator
		initialRouteName='Booked'
		screenOptions={{
			headerStyle: { backgroundColor: THEME.MAIN_COLOR },
			headerTintColor: 'white',
		}}
	>
		<BottomNavigation.Screen name='Booked' component={BookedScreen} />
		<BottomNavigation.Screen
			name='Post'
			component={PostScreen}
			options={PostScreen.navigationOptions}
		/>
	</BottomNavigation.Navigator>
)

export const AppNavigation = StackNavigator
