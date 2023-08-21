import { StyleSheet } from 'react-native'
import { PostList } from '../components/PostList'
import { TPost } from '../components/types'
import { DATA } from '../data'
import { TNavigationProps } from '../navigation/types'

export const BookedScreen = ({ navigation }: TNavigationProps) => {
	const goToPost = (post: TPost) => {
		navigation.navigate('Post', { postId: post.id, booked: post.booked })
	}

	return (
		<PostList data={DATA.filter(item => item.booked)} goToPost={goToPost} />
	)
}
const styles = StyleSheet.create({
	wrapper: { padding: 10 },
})
