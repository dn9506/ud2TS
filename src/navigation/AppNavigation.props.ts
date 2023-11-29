import { NavigatorScreenParams } from '@react-navigation/native'

export type TDrawerNavigation = {
	StackContainer: NavigatorScreenParams<TStackNavigation>
	CreatePost: undefined
	AboutScreen: undefined
}
export type TStackNavigation = {
	TabContainer: NavigatorScreenParams<TBottomTabNavigation>
	PostScreen: { postId: string }
	ModalScreen: { postId: string }
}

export type TBottomTabNavigation = {
	AllPostScreen: undefined
	BookedScreen: undefined
}
