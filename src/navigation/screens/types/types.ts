import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

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

export type AllPostsScreenProps = CompositeScreenProps<
	BottomTabScreenProps<RootTabParamList, 'AllPosts'>,
	StackScreenProps<RootStackParamList, 'MainScreen'>
>

export type BookedScreenProps = CompositeScreenProps<
	BottomTabScreenProps<RootTabParamList, 'Booked'>,
	StackScreenProps<RootStackParamList>
>
export type PostScreenProps = StackScreenProps<RootStackParamList, 'PostScreen'>
export type AboutScreenProps = StackScreenProps<
	RootStackParamList,
	'MainScreen'
>
export type CreateScreenProps = StackScreenProps<
	RootStackParamList,
	'MainScreen'
>
