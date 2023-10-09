import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Post from '../../components/Post'
import { DATA } from '../../data'
import { IPost } from '../../models/IPost'

const AllPostsScreen = () => {
	const posts: IPost[] = DATA

	return (
		<View>
			<Text>AllPostsScreen</Text>

			<FlatList
				data={posts}
				renderItem={post => <Post key={post.item.id} post={post.item} />}
			/>
		</View>
	)
}

AllPostsScreen.navigationOptions = {}

export default AllPostsScreen

const styles = StyleSheet.create({
	container: {},
})
