import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
	StackNavigationOptions,
	createStackNavigator,
} from '@react-navigation/stack'
import { FC } from 'react'
import AboutScreen from './screens/AboutScreen'
import AllPostsScreen from './screens/AllPostsScreen'
import BookedPostsScreen from './screens/BookedPostsScreen'
import CreatePostScreen from './screens/CreatePostScreen'
import PostScreen from './screens/PostScreen'
import { bottomTabScreenOptions } from './screens/components/bottomTabScreenOptions'
import mainScreenHeader from './screens/components/mainScreenHeader'
import {
	TBottomTabNavigation,
	TDrawerNavigation,
	TStackNavigation,
} from './screens/components/types/navigationTypes'

const RootScreenOptions: StackNavigationOptions = {
	headerTintColor: '#fff',
	headerStyle: {
		backgroundColor: '#3B6183',
	},
}

const Drawer = createDrawerNavigator<TDrawerNavigation>()
const Stack = createStackNavigator<TStackNavigation>()
const Tab = createBottomTabNavigator<TBottomTabNavigation>()

const BottomNavigate: FC = () => (
	<Tab.Navigator
		initialRouteName='AllPostScreen'
		screenOptions={bottomTabScreenOptions}
	>
		<Tab.Screen name='AllPostScreen' component={AllPostsScreen} />
		<Tab.Screen name='BookedScreen' component={BookedPostsScreen} />
	</Tab.Navigator>
)

const StackNavigate: FC = () => (
	<Stack.Navigator screenOptions={RootScreenOptions}>
		<Stack.Screen
			name='TabContainer'
			component={BottomNavigate}
			options={mainScreenHeader}
		/>
		<Stack.Screen name='PostScreen' component={PostScreen} />
	</Stack.Navigator>
)

const DrawerNavigate: FC = () => (
	<Drawer.Navigator screenOptions={{}}>
		<Drawer.Screen
			name='StackContainer'
			component={StackNavigate}
			options={{ headerShown: false }}
		/>
		<Drawer.Screen name='AboutScreen' component={AboutScreen} />
		<Drawer.Screen name='CreatePost' component={CreatePostScreen} />
	</Drawer.Navigator>
)

export const AppNavigation = DrawerNavigate
