import { NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
	Loading: undefined
	MainPage: NavigatorScreenParams<BottomTabType>
	Post: { postId: string; booked: boolean }
	DrawerPage: NavigatorScreenParams<DrawerType>
}

export type BottomTabType = {
	AllPosts: undefined
	Booked: undefined
}

export type DrawerType = {
	MainScreenRef: undefined
	CreatePost: undefined
	About: undefined
}

export type TNavigationProps = StackScreenProps<RootStackParamList>
