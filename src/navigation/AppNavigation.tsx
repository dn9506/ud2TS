import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	DrawerNavigationOptions,
	createDrawerNavigator,
} from '@react-navigation/drawer'
import {
	StackNavigationOptions,
	createStackNavigator,
} from '@react-navigation/stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {
	TBottomTabNavigation,
	TDrawerNavigation,
	TStackNavigation,
} from './AppNavigation.props'
import AboutScreen from './screens/AboutScreen'
import AllPostsScreen from './screens/AllPostsScreen'
import BookedPostsScreen from './screens/BookedPostsScreen'
import CreatePostScreen from './screens/CreatePostScreen'
import ModalScreen from './screens/ModalScreen'
import PostScreen from './screens/PostScreen'
import AppBottomIcon, {
	bottomIconNames,
} from './screens/components/AppBottomIcon'
import AppHeaderIcon from './screens/components/AppHeaderIcon'
import { bottomTabScreenOptions } from './screens/components/bottomTabScreenOptions'

const RootScreenOptions: StackNavigationOptions = {
	headerTintColor: '#fff',
	headerStyle: {
		backgroundColor: '#3B6183',
	},
}

const Drawer = createDrawerNavigator<TDrawerNavigation>()
const Stack = createStackNavigator<TStackNavigation>()
const Tab = createBottomTabNavigator<TBottomTabNavigation>()

const TabNavigate = () => (
	<Tab.Navigator
		screenOptions={{
			...bottomTabScreenOptions,
			headerShown: false,
			tabBarActiveTintColor: 'white',
			tabBarInactiveTintColor: 'gray',
		}}
		initialRouteName='AllPostScreen'
	>
		<Tab.Screen
			name='AllPostScreen'
			component={AllPostsScreen}
			options={{
				tabBarIcon: ({ color }) => (
					<AppBottomIcon icon={bottomIconNames.allPosts} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name='BookedScreen'
			component={BookedPostsScreen}
			options={{
				tabBarIcon: ({ color }) => (
					<AppBottomIcon icon={bottomIconNames.bookedPosts} color={color} />
				),
			}}
		/>
	</Tab.Navigator>
)
const StackNavigate = () => (
	<Stack.Navigator screenOptions={RootScreenOptions}>
		<Stack.Screen
			name='TabContainer'
			component={TabNavigate}
			options={({ navigation }) => {
				return {
					headerLeft: () => (
						<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
							<Item
								style={{ marginLeft: 10 }}
								title='menu'
								iconName='menu'
								onPress={() => navigation.toggleDrawer()}
							/>
						</HeaderButtons>
					),
					headerRight: () => (
						<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
							<Item
								title='Create post'
								iconName='add-a-photo'
								onPress={() => navigation.jumpTo('CreatePost')}
							/>
						</HeaderButtons>
					),
				}
			}}
		/>
		<Stack.Screen
			name='PostScreen'
			component={PostScreen}
			options={({ navigation }) => ({
				headerRight: () => (
					<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
						<Item
							title='Booked'
							iconName='star'
							color={'#4AFAA2'}
							onPress={() => navigation.jumpTo('CreatePost')}
						/>
					</HeaderButtons>
				),
			})}
		/>
		<Stack.Screen
			name='ModalScreen'
			component={ModalScreen}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
)
const DrawerNavigate = () => (
	<Drawer.Navigator
		initialRouteName='StackContainer'
		screenOptions={RootScreenOptions as DrawerNavigationOptions}
	>
		<Drawer.Screen
			name='StackContainer'
			component={StackNavigate}
			options={{ headerShown: false }}
		/>
		<Drawer.Screen name='CreatePost' component={CreatePostScreen} />
		<Drawer.Screen name='AboutScreen' component={AboutScreen} />
	</Drawer.Navigator>
)

export const AppNavigation = DrawerNavigate
