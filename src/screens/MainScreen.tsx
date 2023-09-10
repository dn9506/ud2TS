import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcons } from '../components/AppHeaderIcons'
import { PostList } from '../components/PostList'
import { TPost } from '../components/types'
import { useAppSelector } from '../hooks/redux'
import {
	RootBottomTabParamList,
	RootDrawerParamList,
	RootStackParamList,
} from '../navigation/types'

type MainScreenNavigationProps = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabParamList, 'AllPosts'>,
	CompositeScreenProps<
		StackScreenProps<RootStackParamList, 'MainScreenTab'>,
		DrawerScreenProps<RootDrawerParamList>
	>
>

export const MainScreen = ({ navigation }: MainScreenNavigationProps) => {
	const goToPost = (post: TPost) => {
		navigation.navigate('Post', { postId: post.id, booked: post.booked })
	}
	const { posts } = useAppSelector(state => state.posts)
	return <PostList data={posts} goToPost={goToPost} />
}

MainScreen.navigationOptions = ({ navigation }: MainScreenNavigationProps) => ({
	title: 'Home',
	headerRight: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
			<Item
				title='Take photo'
				iconName='ios-camera'
				onPress={() => navigation.navigate('CreatePostScreen')}
			/>
		</HeaderButtons>
	),
	headerLeft: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
			<Item
				title='Toggle Drawer'
				iconName='ios-menu'
				onPress={() => navigation.toggleDrawer()}
				style={{ paddingLeft: 15 }}
			/>
		</HeaderButtons>
	),
})
