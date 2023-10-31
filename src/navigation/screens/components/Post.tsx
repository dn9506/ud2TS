import React, { FC } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IPost } from '../../../model/IPost'

interface IPostComponent {
	post: IPost
}
const Post: FC<IPostComponent> = ({ post }) => {
	return (
		<TouchableOpacity>
			<ImageBackground
				source={{ uri: post.img }}
				resizeMode='cover'
				style={styles.img}
			>
				<Text style={styles.time}>{post.date.toLocaleString()}</Text>
			</ImageBackground>
		</TouchableOpacity>
	)
}

export default Post

const styles = StyleSheet.create({
	img: { height: 200, marginVertical: 5 },
	time: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		color: '#fff',
		textAlign: 'center',
	},
})
