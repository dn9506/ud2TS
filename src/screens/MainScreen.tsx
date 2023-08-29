import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcons } from '../components/AppHeaderIcons'
import { PostList } from '../components/PostList'
import { TPost } from '../components/types'
import { DATA } from '../data'

type MainScreenNavigationProps = 

export const MainScreen = ({ navigation }: MainScreenNavigationProps) => {
	const goToPost = (post: TPost) => {
		navigation.navigate('Post', { postId: post.id, booked: post.booked })
	}
	return <PostList data={DATA} goToPost={goToPost} />
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
