import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
	Home: NavigatorScreenParams<RootBottomTabParamList>
	Post: { postId: string; booked: boolean }
	Loading: undefined
}

export type RootBottomTabParamList = {
	AllPosts: undefined
	Booked: undefined
}

export type RootDrawerParamList = {
	MainNav: NavigatorScreenParams<RootStackParamList>
	CreatePost: undefined
	About: undefined
}
