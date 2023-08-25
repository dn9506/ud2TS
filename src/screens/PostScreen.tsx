import { StackScreenProps } from '@react-navigation/stack'
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcons } from '../components/AppHeaderIcons'
import { DATA } from '../data'
import { RootStackParamList } from '../navigation/types'
import { THEME } from '../theme'

type PostScreenNavigationProps = StackScreenProps<RootStackParamList, 'Post'>

export const PostScreen = ({
	route,
	navigation,
}: PostScreenNavigationProps) => {
	const postId = route.params?.postId
	const post = DATA.find(p => p.id === postId)!

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
		</View>
	)
}

PostScreen.navigationOptions = ({
	route,
	navigation,
}: PostScreenNavigationProps) => {
	const booked = route.params?.booked
	const iconName = booked ? 'ios-star' : 'ios-star-outline'
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
					onPress={() => console.log('Press photo')}
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
