import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
	Home: undefined
	Post: { postId: string; booked: boolean }
	Loading: undefined
}

export type TNavigationProps = StackScreenProps<RootStackParamList>

export type TTab = {
	AllPosts: undefined
	Booked: undefined
}

export type TDrawer = {
	DrawerHome: undefined
	CreatePost: undefined
	About: undefined
}
