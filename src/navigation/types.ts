import type { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
	Main: undefined
	Post: { postId?: string; booked?: boolean }
	Loading: undefined
	Tab: undefined
}
export type topNavigationProps = StackScreenProps<RootStackParamList>

export type RootTabsParamList = {
	Booked: undefined
	Post: undefined
}
