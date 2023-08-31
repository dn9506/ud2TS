import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
	MainScreenTab: NavigatorScreenParams<RootBottomTabParamList>
	Post: { postId: string; booked: boolean }
	Loading: undefined
}

export type RootBottomTabParamList = {
	AllPosts: undefined
	Booked: undefined
}

export type RootDrawerParamList = {
	MainScreen: undefined
	CreatePostScreen: undefined
	AboutScreen: undefined
}
