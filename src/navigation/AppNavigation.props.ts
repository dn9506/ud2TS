import { NavigatorScreenParams } from '@react-navigation/native'
import { IPost } from '../model/IPost'

export type TDrawerNavigation = {
	StackContainer: NavigatorScreenParams<TStackNavigation>
	CreatePost: undefined
	AboutScreen: undefined
}
export type TStackNavigation = {
	TabContainer: NavigatorScreenParams<TBottomTabNavigation>
	PostScreen: { post: IPost }
	ModalScreen: { postId: string }
}

export type TBottomTabNavigation = {
	AllPostScreen: undefined
	BookedScreen: undefined
}
