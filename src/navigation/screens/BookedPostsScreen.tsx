import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import {
	Alert,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native'
import { DATA } from '../../store/data'
import Post from './components/Post'
import { TStackNavigation } from './components/types/navigationTypes'

type props = StackScreenProps<TStackNavigation, 'TabContainer'>

const BookedPostsScreen: FC<props> = ({ navigation }) => {
	const posts = DATA.filter(elem => elem.booked)
	const goToPost = (id: string) => {
		navigation.push('PostScreen', { postId: id })
	}
	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={elem => (
					<TouchableOpacity onPress={() => Alert.alert(elem.item.id)}>
						<Post post={elem.item} goToPost={goToPost} />
					</TouchableOpacity>
				)}
				keyExtractor={post => post.id}
			/>
		</View>
	)
}

export default BookedPostsScreen

const styles = StyleSheet.create({ container: {} })
