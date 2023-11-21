import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
	StackNavigationOptions,
	createStackNavigator,
} from '@react-navigation/stack'
import AllPostsScreen from './screens/AllPostsScreen'
import BookedPostsScreen from './screens/BookedPostsScreen'
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

const TabNavigate = () =>
{return(<Tab.Navigator>
	<Tab.Screen name='AllPostScreen' component={AllPostsScreen}/>
	<Tab.Screen name='BookedScreen' component={BookedPostsScreen}/>
	</Tab.Navigator>)}
const StackNavigate = () => ()
const DrawerNavigate = () => ()


export const AppNavigation = DrawerNavigate
