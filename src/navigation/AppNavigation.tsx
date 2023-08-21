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
import { TDrawer, TStack, TTab } from './types'

const Stack = createStackNavigator<TStack>()
const StackNavigator = () => (
	<Stack.Navigator initialRouteName='Loading' screenOptions={screenOptions}>
		<Stack.Screen name='Home' component={TabNavigation} />
		<Stack.Screen name='Post' component={PostScreen} />
		<Stack.Screen name='Loading' component={LoadingScreen} />
		<Stack.Screen name='Drawer' component={DrawerNavigation} />
	</Stack.Navigator>
)

const Tab = createBottomTabNavigator<TTab>()
const TabNavigation = () => (
	<Tab.Navigator
		screenOptions={{
			...screenOptions,
			headerShown: false,
		}}
	>
		<Tab.Screen name='All posts' component={MainScreen} />
		<Tab.Screen name='Booked' component={BookedScreen} />
	</Tab.Navigator>
)

const Drawer = createDrawerNavigator<TDrawer>()
const DrawerNavigation = () => (
	<Drawer.Navigator
		screenOptions={{
			...screenOptions,
			headerShown: false,
		}}
	>
		<Drawer.Screen name='Posts' component={TabNavigation} />
		<Drawer.Screen name='Create post' component={CreateScreen} />
		<Drawer.Screen name='About' component={AboutScreen} />
	</Drawer.Navigator>
)

export const AppNavigation = StackNavigator

const screenOptions = {
	headerStyle: { backgroundColor: THEME.MAIN_COLOR },
	headerTintColor: 'white',
}

/*

const screenOptions = {
	headerStyle: { backgroundColor: THEME.MAIN_COLOR },
	headerTintColor: 'white',
}

const StackNavigator = () => (
	<PostNavigator.Navigator
		initialRouteName='Loading'
		screenOptions={screenOptions}
	>
		<PostNavigator.Screen
			name='Drawer'
			component={DrawerNavigator}
			options={{ headerShown: false }}
		/>
		<PostNavigator.Screen
			name='Main'
			component={BottomTabNavigator}
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
		screenOptions={{
			...screenOptions,
			headerShown: false,
		}}
	>
		<BottomNavigation.Screen
			name='Home'
			component={MainScreen}
			options={{
				tabBarIcon: info => (
					<Ionicons name='ios-albums' size={25} color={info.color} />
				),
			}}
		/>
		<BottomNavigation.Screen
			name='Booked'
			component={BookedScreen}
			options={{
				tabBarIcon: info => (
					<Ionicons name='ios-star' size={25} color={info.color} />
				),
			}}
		/>
	</BottomNavigation.Navigator>
)

const DrawerNavigator = () => (
	<MainNavigator.Navigator>
		<MainNavigator.Screen name='PostTabs' component={BottomTabNavigator} />
		<MainNavigator.Screen name='About' component={AboutScreen} />
		<MainNavigator.Screen name='Create' component={CreateScreen} />
	</MainNavigator.Navigator>
)

*/
