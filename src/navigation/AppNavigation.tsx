import { createDrawerNavigator } from '@react-navigation/drawer'
import { FC } from 'react'
import AboutScreen from './screens/AboutScreen'
import AllPostsScreen from './screens/AllPostsScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigate: FC = () => (
	<Drawer.Navigator>
		<Drawer.Screen
			name='Main Screen'
			component={AllPostsScreen}
			options={AllPostsScreen.screenOptions}
		/>
		<Drawer.Screen
			name='About'
			component={AboutScreen}
			options={AboutScreen.screenOptions}
		/>
	</Drawer.Navigator>
)

export const AppNavigation = DrawerNavigate
