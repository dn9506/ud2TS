import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Post from '../../components/Post'
import { DATA } from '../../data'
import { IPost } from '../../models/IPost'

const BookedScreen = () => {
	const posts: IPost[] = DATA.filter(post => post.booked)
	return (
		<View>
			<Text>BookedScreen</Text>
			<FlatList
				data={posts}
				renderItem={post => <Post key={post.item.id} post={post.item} />}
			/>
		</View>
	)
}

BookedScreen.navigationOptions = {}

export default BookedScreen

const styles = StyleSheet.create({})
