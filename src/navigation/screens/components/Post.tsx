import React, { FC } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IPost } from '../../../model/IPost'

const Post: FC<{ post: IPost }> = ({ post }) => {
	return (
		<TouchableOpacity>
			<ImageBackground source={{ uri: post.img }} style={styles.img}>
				<Text style={styles.time}>{post.date}</Text>
			</ImageBackground>
		</TouchableOpacity>
	)
}

export default Post

const styles = StyleSheet.create({
	img: { width: '100%', height: 200 },
	time: {},
})
