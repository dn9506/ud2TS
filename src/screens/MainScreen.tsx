import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcons } from '../components/AppHeaderIcons'
import { Post } from '../components/Post'
import { TPost } from '../components/types'
import { DATA } from '../data'
import { topNavigationProps } from '../navigation/types'

export const MainScreen = ({ navigation }: topNavigationProps) => {
	const goToPost = (post: TPost) => {
		navigation.navigate('Post', { postId: post.id, booked: post.booked })
	}

	return (
		<>
			<View style={styles.wrapper}>
				<FlatList
					data={DATA}
					keyExtractor={post => post.id.toString()}
					renderItem={({ item }) => {
						return <Post post={item} onOpen={goToPost} />
					}}
				/>
			</View>
		</>
	)
}

MainScreen.navigationOptions = {
	title: 'First',
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
				onPress={() => console.log('Press photo')}
			/>
		</HeaderButtons>
	),
}

const styles = StyleSheet.create({
	wrapper: { padding: 10 },
})
