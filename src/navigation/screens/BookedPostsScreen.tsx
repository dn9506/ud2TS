import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { postsApi } from '../../store/services/postsFetch'
import { TBottomTabNavigation, TStackNavigation } from '../AppNavigation.props'
import Post from './components/Post'

type props = CompositeScreenProps<
	BottomTabScreenProps<TBottomTabNavigation, 'BookedScreen'>,
	StackScreenProps<TStackNavigation, 'TabContainer'>
>

const BookedPostsScreen: FC<props> = ({ navigation }) => {
	const { isLoading, isError, isSuccess, error, data } =
		postsApi.useFetchAllPostsQuery()
	const posts = data!.filter(elem => elem.booked)

	const goToPost = (id: string) => {
		navigation.push('PostScreen', { post: posts.find(elem => elem.id === id)! })
	}
	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={elem => (
					<TouchableOpacity onPress={() => {}}>
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
