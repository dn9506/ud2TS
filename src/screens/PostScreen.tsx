import { StackScreenProps } from '@react-navigation/stack'
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcons } from '../components/AppHeaderIcons'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { RootStackParamList } from '../navigation/types'
import { postsStoreActions } from '../store/reducer/post'
import { THEME } from '../theme'

type PostScreenNavigationProps = StackScreenProps<RootStackParamList, 'Post'>

export const PostScreen = ({
	route,
	navigation,
}: PostScreenNavigationProps) => {
	const postId = route.params?.postId

	const { posts } = useAppSelector(state => state.postsReducer)
	const post = posts.find(p => p.id === postId)!
	const check = posts.find(postCheck => postCheck.id === post.id)!

	const removeHandler = () => {
		Alert.alert(
			`Delete post`,
			`Are you sure want to delete: ${post.id}?`,
			[
				{ text: 'Cancel', style: 'cancel' },
				{ text: 'Delete', onPress: () => {} },
			],
			{ cancelable: false }
		)
	}

	return (
		<View>
			<Image source={{ uri: post!.img }} style={styles.image} />
			<View style={styles.textWrapper}>
				<Text style={styles.title}>{post.text}</Text>
			</View>
			<Button
				title='Delete'
				color={THEME.DANGER_COLOR}
				onPress={removeHandler}
			/>
			<Text>{check.booked ? 'TRUE' : 'FALSE'}</Text>
		</View>
	)
}

PostScreen.navigationOptions = ({
	route,
	navigation,
}: PostScreenNavigationProps) => {
	const { posts } = useAppSelector(state => state.postsReducer)
	const booked = posts.find(
		postCheck => postCheck.id === route.params.postId
	)!.booked
	const iconName = booked ? 'ios-star' : 'ios-star-outline'
	const { toggleBooked } = postsStoreActions
	const dispatch = useAppDispatch()

	return {
		title: `Post ${route.params?.postId}`,
		headerStyle: {
			backgroundColor: 'red',
		},
		headerTintColor: 'black',
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
				<Item
					title='Take photo'
					iconName={iconName}
					onPress={() => {
						dispatch(toggleBooked({ id: route.params.postId }))
					}}
				/>
			</HeaderButtons>
		),
	}
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	textWrapper: {
		padding: 10,
	},
	title: {
		fontFamily: 'open-regular',
	},
})
