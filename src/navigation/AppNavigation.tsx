import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { Alert } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AboutScreen } from './screens/AboutScreen'
import { AllPostsScreen } from './screens/AllPostsScreen'
import { BookedScreen } from './screens/BookedScreen'
import { CreatePostScreen } from './screens/CreatePostScreen'
import { PostScreen, postScreenNavigationOptions } from './screens/PostScreen'
import {
	RootDrawerParamList,
	RootStackParamList,
	RootTabParamList,
} from './screens/types/types'

const RootScreenOptions = {
	headerTintColor: '#fff',
	headerStyle: {
		backgroundColor: '#3B6183',
	},
}

const RootTabHeaderOptions = {
	headerRight: () => (
		<HeaderButtons
			HeaderButtonComponent={() => (
				<MaterialIcons name='photo-camera' size={24} color='white' />
			)}
		>
			<Item
				title='createPost'
				iconName='newPost'
				onPress={() => Alert.alert('settings')}
			/>
		</HeaderButtons>
	),
	headerLeft: () => (
		<HeaderButtons
			HeaderButtonComponent={() => (
				<MaterialIcons name='menu' size={24} color='white' />
			)}
		>
			<Item
				title='toggleDrawer'
				iconName='drawer'
				onPress={() => navigation.toggleDrawer()}
			/>
		</HeaderButtons>
	),
	tabBarStyle: {
		backgroundColor: '#3B6183',
	},
	tabBarActiveTintColor: 'white',
	tabBarLabelStyle: { paddingBottom: 5 },
	headerLeftContainerStyle: { paddingLeft: 10 },
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
	<Stack.Navigator
		screenOptions={RootScreenOptions}
		initialRouteName='MainScreen'
	>
		<Stack.Screen
			name='MainScreen'
			component={TabNavigation}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name='PostScreen'
			component={PostScreen}
			options={postScreenNavigationOptions}
		/>
	</Stack.Navigator>
)

const TabNavigation = () => (
	<Tab.Navigator
		screenOptions={{
			...RootScreenOptions,
			...RootTabHeaderOptions,
		}}
	>
		<Tab.Screen
			name='AllPosts'
			component={AllPostsScreen}
			options={{
				tabBarIcon: ({ focused }) => (
					<MaterialIcons
						name='list'
						size={24}
						color={focused ? 'white' : 'grey'}
					/>
				),
			}}
		/>
		<Tab.Screen
			name='Booked'
			component={BookedScreen}
			options={{
				tabBarIcon: ({ focused }) => (
					<MaterialIcons
						name='playlist-add-check'
						size={24}
						color={focused ? 'white' : 'grey'}
					/>
				),
			}}
		/>
	</Tab.Navigator>
)

export const AppNavigation = DrawerNavigation
