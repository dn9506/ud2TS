import React from 'react'
import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native'
import { IPost } from '../models/IPost'

const Post = ({ post }: { post: IPost }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={goToPost}>
			<ImageBackground source={{ uri: post.img }} style={styles.img}>
				<Text style={styles.textDate}>{Date.parse(post.date)}</Text>
			</ImageBackground>
		</TouchableOpacity>
	)
}

export default Post

const styles = StyleSheet.create({
	container: {
		borderBlockColor: '#fff',
	},
	img: {
		height: 200,
		width: '100%',
		marginVertical: 5,
	},
	textDate: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',

		color: 'white',
	},
})
