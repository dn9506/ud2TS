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

const BookedPostsScreen: FC = () => {
	const posts = DATA.filter(elem => elem.booked)
	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={elem => (
					<TouchableOpacity onPress={() => Alert.alert(elem.item.id)}>
						<Post post={elem.item} />
					</TouchableOpacity>
				)}
				keyExtractor={post => post.id}
			/>
		</View>
	)
}

export default BookedPostsScreen

const styles = StyleSheet.create({ container: {} })
