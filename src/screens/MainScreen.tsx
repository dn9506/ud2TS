import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcons } from '../components/AppHeaderIcons'
import { PostList } from '../components/PostList'
import { TPost } from '../components/types'
import { DATA } from '../data'
import {
	RootBottomTabParamList,
	RootDrawerParamList,
	RootStackParamList,
} from '../navigation/types'

type MainScreenNavigationProps = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabParamList, 'AllPosts'>,
	DrawerScreenProps<RootDrawerParamList>
>

export const MainScreen = ({ navigation }: MainScreenNavigationProps) => {
	const goToPost = (post: TPost) => {
		navigation.navigate('MainNav', {
			screen: 'Post',
			params: { postId: post.id, booked: post.booked },
		})
	}

	return <PostList data={DATA} goToPost={goToPost} />
}

MainScreen.navigationOptions = ({
	navigation,
}: CompositeScreenProps<
	StackScreenProps<RootStackParamList, 'Home'>,
	DrawerScreenProps<RootDrawerParamList>
>) => ({
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
				onPress={() => navigation.openDrawer()}
				style={{ paddingLeft: 15 }}
			/>
		</HeaderButtons>
	),
})
