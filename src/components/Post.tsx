import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { TPost } from './types'

export const Post = ({ post, onOpen }: IPost) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
			<View style={styles.post}>
				<ImageBackground source={{ uri: post.img }} style={styles.image}>
					<View style={styles.textWrap}>
						<Text style={styles.title}>
							{new Date(post.date).toLocaleDateString()}
						</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	post: {
		marginBottom: 12,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
	},
	textWrap: {
		backgroundColor: 'black',
		opacity: 0.5,
		paddingVertical: 5,
		alignItems: 'center',
		width: '100%',
	},
	title: {
		color: 'white',
		fontFamily: 'open-regular',
	},
})

interface IPost {
	post: TPost
	onOpen: (post: TPost) => void
}
