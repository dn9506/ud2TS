import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { FC } from 'react'
import AboutScreen from './screens/AboutScreen'
import AllPostsScreen, { allPostsScreenOptions } from './screens/AllPostsScreen'
import BookedPostsScreen from './screens/BookedPostsScreen'
import CreatePostScreen from './screens/CreatePostScreen'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const BottomNavigate: FC = () => (
	<Tab.Navigator>
		<Tab.Screen name='All Posts' component={AllPostsScreen} />
		<Tab.Screen name='Booked' component={BookedPostsScreen} />
	</Tab.Navigator>
)

const DrawerNavigate: FC = () => (
	<Drawer.Navigator>
		<Drawer.Screen
			name='Main Screen'
			component={AllPostsScreen}
			options={allPostsScreenOptions}
		/>
		<Drawer.Screen
			name='About'
			component={AboutScreen}
			/*options={aboutScreenNavigationOptions}*/
		/>
		<Drawer.Screen
			name='Create post'
			component={CreatePostScreen}
			/*options={CreatePostScreenOptions}*/
		/>
	</Drawer.Navigator>
)

export const AppNavigation = DrawerNavigate
