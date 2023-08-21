import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
	Home: typeof createBottomTabNavigator
	Post: { postId: string; booked: boolean }
	Loading: undefined
	Drawer: undefined
	'All posts': undefined
	Booked: undefined
}
export type TStack = {
	Loading: undefined
	Home: undefined
	Post: undefined
	Drawer: undefined
}
export type TDrawer = {
	Posts: undefined
	'Create post': undefined
	About: undefined
}
export type TTab = {
	'All posts': undefined
	Booked: undefined
}

export type TNavigationProps = StackScreenProps<RootStackParamList>
