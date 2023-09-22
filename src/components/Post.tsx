import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IPost } from '../models/IPost'

const Post = (post: IPost) => {
	return (
		<View style={styles.container}>
			<Text>{post.date}</Text>
			<Image source={require(`${post.img}`)} />
		</View>
	)
}

export default Post

const styles = StyleSheet.create({
	container: {
		borderBlockColor: '#fff',
	},
})
