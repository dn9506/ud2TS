import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

export const bottomTabScreenOptions: BottomTabNavigationOptions = {
	headerShown: false,
	tabBarStyle: {
		backgroundColor: '#3B6183',
	},
	tabBarActiveTintColor: 'white',
	tabBarLabelStyle: { paddingBottom: 5 },
	headerLeftContainerStyle: { paddingLeft: 10 },
}
