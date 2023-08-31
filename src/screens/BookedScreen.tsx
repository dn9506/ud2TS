import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import { PostList } from '../components/PostList'
import { TPost } from '../components/types'
import { DATA } from '../data'
import { RootBottomTabParamList, RootStackParamList } from '../navigation/types'

type BookedScreenNavigationProps = CompositeScreenProps<
	BottomTabScreenProps<RootBottomTabParamList, 'Booked'>,
	StackScreenProps<RootStackParamList>
>
export const BookedScreen = ({ navigation }: BookedScreenNavigationProps) => {
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
