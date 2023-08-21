import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcons } from '../components/AppHeaderIcons'
import { PostList } from '../components/PostList'
import { TPost } from '../components/types'
import { DATA } from '../data'
import { TNavigationProps } from '../navigation/types'

export const MainScreen = ({ navigation }: TNavigationProps) => {
	const goToPost = (post: TPost) => {
		navigation.navigate('Post', { postId: post.id, booked: post.booked })
	}

	return <PostList data={DATA} goToPost={goToPost} />
}

MainScreen.navigationOptions = ({ navigation }: TNavigationProps) => ({
	title: 'Home',
	headerRight: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
			<Item
				title='Take photo'
				iconName='ios-camera'
				onPress={() => console.log('Press photo')}
			/>
		</HeaderButtons>
	),
	headerLeft: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
			<Item
				title='Toggle Drawer'
				iconName='ios-menu'
				onPress={() => navigation.navigate('Drawer')}
			/>
		</HeaderButtons>
	),
})
