import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IPost } from '../../model/IPost'

const PostScreen: FC<IPost> = post => {
	return (
		<View>
			<Image source={{ uri: post.img }} resizeMode='cover' style={styles.img} />
			<Text style={styles.text}>{post.text}</Text>
			<View style={styles.buttonsView}></View>
		</View>
	)
}

export default PostScreen

const styles = StyleSheet.create({
	img: { height: 200, marginVertical: 2 },
	text: {},
	buttonsView: { flexDirection: 'row', justifyContent: 'space-between' },
	btn: {},
})
