import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
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
import { TBottomTabNavigation, TStackNavigation } from '../AppNavigation.props'
import Post from './components/Post'

type props = CompositeScreenProps<
	BottomTabScreenProps<TBottomTabNavigation, 'BookedScreen'>,
	StackScreenProps<TStackNavigation, 'TabContainer'>
>

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
