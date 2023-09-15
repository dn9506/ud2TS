import { NavigatorScreenParams } from '@react-navigation/native'

export type RootDrawerParamList = {
	DrawerMainScreen: NavigatorScreenParams<RootStackParamList>
	CreatePost: undefined
	About: undefined
}
export type RootStackParamList = {
	MainScreen: NavigatorScreenParams<RootTabParamList>
	PostScreen: { postId: string }
}
export type RootTabParamList = {
	AllPosts: undefined
	Booked: undefined
}
