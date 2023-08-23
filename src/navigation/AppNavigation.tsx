import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AboutScreen } from '../screens/AboutScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { LoadingScreen } from '../screens/LoadingScreen'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'
import { RootStackParamList, TDrawer, TTab } from './types'

const screenOptions = {
	headerStyle: { backgroundColor: THEME.MAIN_COLOR },
	headerTintColor: 'white',
}

const Stack = createStackNavigator<RootStackParamList>()
const StackNavigator = () => (
	<Stack.Navigator initialRouteName='Loading' screenOptions={screenOptions}>
		<Stack.Screen
			name='Home'
			component={TabNavigator}
			options={MainScreen.navigationOptions}
		/>
		<Stack.Screen
			name='Post'
			component={PostScreen}
			options={PostScreen.navigationOptions}
		/>
		<Stack.Screen
			name='Loading'
			component={LoadingScreen}
			options={LoadingScreen.navigationOptions}
		/>
	</Stack.Navigator>
)

const Tab = createBottomTabNavigator<TTab>()
const TabNavigator = () => (
	<Tab.Navigator
		screenOptions={{
			...screenOptions,
			headerShown: false,
		}}
	>
		<Tab.Screen
			name='AllPosts'
			component={MainScreen}
			options={{
				tabBarIcon: info => (
					<Ionicons name='ios-albums' size={25} color={info.color} />
				),
				title: 'All Posts',
			}}
		/>
		<Tab.Screen
			name='Booked'
			component={BookedScreen}
			options={{
				tabBarIcon: info => (
					<Ionicons name='ios-star' size={25} color={info.color} />
				),
			}}
		/>
	</Tab.Navigator>
)

const Drawer = createDrawerNavigator<TDrawer>()
const DrawerNavigator = () => (
	<Drawer.Navigator
		initialRouteName='DrawerHome'
		screenOptions={{ ...screenOptions, headerShown: false }}
	>
		<Drawer.Screen name='DrawerHome' component={StackNavigator} />
		<Drawer.Screen
			name='CreatePost'
			component={CreateScreen}
			options={{ headerShown: true }}
		/>
		<Drawer.Screen
			name='About'
			component={AboutScreen}
			options={{ headerShown: true }}
		/>
	</Drawer.Navigator>
)

export const AppNavigation = DrawerNavigator
