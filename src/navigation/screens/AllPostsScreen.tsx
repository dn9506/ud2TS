import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Post from '../../components/Post'
import { DATA } from '../../data'
import { IPost } from '../../models/IPost'

const AllPostsScreen = () => {
	const posts: IPost[] = DATA

	return (
		<View>
			<Text>AllPostsScreen</Text>
			{posts.map(post => (
				<Post key={post.id} post={post} />
			))}
		</View>
	)
}

AllPostsScreen.navigationOptions = {}

export default AllPostsScreen

const styles = StyleSheet.create({})
