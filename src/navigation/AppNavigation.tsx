import { createDrawerNavigator } from '@react-navigation/drawer'
import { FC } from 'react'
import AboutScreen from './screens/AboutScreen'
import { AllPostsScreen, AllPostsScreenOptions } from './screens/AllPostsScreen'
import CreatePostScreen from './screens/CreatePostScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigate: FC = () => (
	<Drawer.Navigator>
		<Drawer.Screen
			name='Main Screen'
			component={AllPostsScreen}
			options={AllPostsScreenOptions}
		/>
		<Drawer.Screen
			name='About'
			component={AboutScreen}
			options={AboutScreen.screenOptions}
		/>
		<Drawer.Screen
			name='Create post'
			component={CreatePostScreen}
			options={CreatePostScreen.screenOptions}
		/>
	</Drawer.Navigator>
)

export const AppNavigation = DrawerNavigate
