import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import { LoadingScreen } from '../screens/LoadingScreen'
import { MainScreen } from '../screens/MainScreen'
import { THEME } from '../theme'
import {
	RootBottomTabParamList,
	RootDrawerParamList,
	RootStackParamList,
} from './types'

const screenOptions = {
	headerStyle: { backgroundColor: THEME.MAIN_COLOR },
	headerTintColor: 'white',
}

const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<RootBottomTabParamList>()
const Drawer = createDrawerNavigator<RootDrawerParamList>()

const DrawerNavigation = () => (
	<Drawer.Navigator
		screenOptions={{
			...screenOptions,
			headerShown: false,
		}}
	>
		<Drawer.Screen name='MainScreenRef' component={() => <View></View>} />
		<Drawer.Screen
			name='CreatePostScreen'
			component={() => <View></View>}
			options={{ headerShown: true }}
		/>
		<Drawer.Screen
			name='AboutScreen'
			component={() => <View></View>}
			options={{ headerShown: true }}
		/>
	</Drawer.Navigator>
)

const TabNavigation = () => (
	<Tab.Navigator
		screenOptions={{
			...screenOptions,
			headerShown: false,
		}}
	>
		<Tab.Screen
			name='AllPosts'
			component={() => MainScreen}
			options={{
				...MainScreen.navigationOptions,
				tabBarIcon: info => (
					<Ionicons name='ios-albums' size={25} color={info.color} />
				),
				title: 'All Posts',
			}}
		/>
		<Tab.Screen
			name='Booked'
			component={() => <View></View>}
			options={{
				tabBarIcon: info => (
					<Ionicons name='ios-star' size={25} color={info.color} />
				),
			}}
		/>
	</Tab.Navigator>
)

const StackNavigation = () => (
	<Stack.Navigator screenOptions={screenOptions} initialRouteName='Loading'>
		<Stack.Screen name='MainScreen' component={() => <View></View>} />
		<Stack.Screen name='Post' component={() => <View></View>} />
		<Stack.Screen
			name='Loading'
			component={LoadingScreen}
			options={LoadingScreen.navigationOptions}
		/>
		<Stack.Screen name='Drawer' component={() => <View></View>} />
	</Stack.Navigator>
)

export const AppNavigation = StackNavigation

/*
const DrawerNavigation = () => (
	<Drawer.Navigator
		screenOptions={{
			...screenOptions,
			headerShown: false,
		}}
		initialRouteName='MainScreenRef'
	>
		<Drawer.Screen name='MainScreenRef' component={StackNavigation} />
		<Drawer.Screen
			name='CreatePostScreen'
			component={CreateScreen}
			options={{ headerShown: true }}
		/>
		<Drawer.Screen
			name='AboutScreen'
			component={AboutScreen}
			options={{ headerShown: true }}
		/>
	</Drawer.Navigator>
)

const StackNavigation = () => (
	<Stack.Navigator screenOptions={screenOptions} initialRouteName='Loading'>
		<Stack.Screen name='MainScreen' component={TabNavigation} />
		<Stack.Screen
			name='Loading'
			component={LoadingScreen}
			options={LoadingScreen.navigationOptions}
		/>
		<Stack.Screen
			name='Post'
			component={PostScreen}
			options={PostScreen.navigationOptions}
		/>
	</Stack.Navigator>
)

const TabNavigation = () => (
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
				...MainScreen.navigationOptions,
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

*/
