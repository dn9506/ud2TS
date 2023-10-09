import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DATA } from '../../data'

interface IPostProps {
	postId: string
}

const PostScreen = ({ postId }: IPostProps) => {
	const post = DATA.find(post => post.id === postId)

	return (
		<View>
			<Text>PostScreen</Text>
			<Image source={{ uri: post?.img }} style={styles.img} />
			<Text>{post?.text}</Text>
		</View>
	)
}

export default PostScreen

const styles = StyleSheet.create({
	img: {},
})
