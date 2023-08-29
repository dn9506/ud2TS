import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
	MainScreen: NavigatorScreenParams<RootBottomTabParamList>
	Post: { postId: string; booked: boolean }
	Loading: undefined
	Drawer: NavigatorScreenParams<RootDrawerParamList>
}

export type RootBottomTabParamList = {
	AllPosts: undefined
	Booked: undefined
}

export type RootDrawerParamList = {
	MainScreenRef: undefined
	CreatePostScreen: undefined
	AboutScreen: undefined
}
