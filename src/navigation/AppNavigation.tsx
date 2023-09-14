import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigatorScreenParams } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AboutScreen from './screens/AboutScreen'
import AllPostsScreen from './screens/AllPostsScreen'
import BookedScreen from './screens/BookedScreen'
import CreatePostScreen from './screens/CreatePostScreen'
import PostScreen from './screens/PostScreen'

type RootDrawerParamList = {
	DrawerMainScreen: NavigatorScreenParams<RootStackParamList>
	CreatePost: undefined
	About: undefined
}
type RootStackParamList = {
	MainScreen: NavigatorScreenParams<RootTabParamList>
	PostScreen: { postId: string }
}
type RootTabParamList = {
	AllPosts: undefined
	Booked: undefined
}

const RootScreenOptions = {
	headerTintColor: '#fff',
	headerStyle: {
		backgroundColor: '#3B6183',
	},
}

const Drawer = createDrawerNavigator<RootDrawerParamList>()
const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<RootTabParamList>()

const DrawerNavigation = () => (
	<Drawer.Navigator screenOptions={{ headerShown: false }}>
		<Drawer.Screen name='DrawerMainScreen' component={StackNavigation} />
		<Drawer.Screen name='CreatePost' component={CreatePostScreen} />
		<Drawer.Screen name='About' component={AboutScreen} />
	</Drawer.Navigator>
)

const StackNavigation = () => (
	<Stack.Navigator screenOptions={RootScreenOptions}>
		<Stack.Screen
			name='MainScreen'
			component={TabNavigation}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name='PostScreen' component={PostScreen} />
	</Stack.Navigator>
)

const TabNavigation = () => (
	<Tab.Navigator
		screenOptions={{
			...RootScreenOptions,
			tabBarStyle: {
				backgroundColor: '#3B6183',
			},
			tabBarActiveTintColor: '#55d4ff',
		}}
	>
		<Tab.Screen name='AllPosts' component={AllPostsScreen} />
		<Tab.Screen name='Booked' component={BookedScreen} />
	</Tab.Navigator>
)

export const AppNavigation = DrawerNavigation
