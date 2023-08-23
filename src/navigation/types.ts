import { NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
	Home: NavigatorScreenParams<TTab>
	Post: { postId: string; booked: boolean }
	Loading: undefined
}

export type TNavigationProps = StackScreenProps<RootStackParamList>

export type TTab = {
	AllPosts: undefined
	Booked: undefined
}

export type TDrawer = {
	DrawerHome: NavigatorScreenParams<RootStackParamList>
	CreatePost: undefined
	About: undefined
}
