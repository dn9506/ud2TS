import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { AboutScreen } from '../screens/AboutScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { LoadingScreen } from '../screens/LoadingScreen'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
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
			drawerActiveTintColor: THEME.MAIN_COLOR,
			drawerLabelStyle: {
				fontFamily: 'open-bolt',
				fontSize: 20,
			},
		}}
	>
		<Drawer.Screen
			name='MainScreen'
			component={StackNavigation}
			options={{ title: 'Main' }}
		/>
		<Drawer.Screen
			name='CreatePostScreen'
			component={CreateScreen}
			options={{ title: 'Create new post', headerShown: true }}
		/>
		<Drawer.Screen
			name='AboutScreen'
			component={AboutScreen}
			options={{ title: 'About', headerShown: true }}
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

const StackNavigation = () => (
	<Stack.Navigator screenOptions={screenOptions} initialRouteName='Loading'>
		<Stack.Screen
			name='Loading'
			component={LoadingScreen}
			options={LoadingScreen.navigationOptions}
		/>
		<Stack.Screen
			name='MainScreenTab'
			component={TabNavigation}
			options={MainScreen.navigationOptions}
		/>
		<Stack.Screen
			name='Post'
			component={PostScreen}
			options={PostScreen.navigationOptions}
		/>
	</Stack.Navigator>
)

export const AppNavigation = DrawerNavigation
