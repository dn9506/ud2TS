import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { postsApi } from '../../store/services/postsFetch'
import { TBottomTabNavigation, TStackNavigation } from '../AppNavigation.props'
import Post from './components/Post'

type props = CompositeScreenProps<
	BottomTabScreenProps<TBottomTabNavigation, 'AllPostScreen'>,
	StackScreenProps<TStackNavigation, 'TabContainer'>
>

const AllPostsScreen: FC<props> = ({ navigation }) => {
	const {
		isLoading,
		isError,
		isSuccess,
		error,
		data: posts,
	} = postsApi.useFetchAllPostsQuery()

	const goToPost = (id: string) => {
		navigation.push('PostScreen', {
			post: posts!.find(elem => elem.id === id)!,
		})
	}
	return (
		<View style={styles.container}>
			{isLoading && <Text>Loading Data...</Text>}
			{isError && <Text>Error... </Text>}
			{isSuccess && (
				<FlatList
					data={posts}
					renderItem={elem => <Post post={elem.item} goToPost={goToPost} />}
					keyExtractor={post => post.id}
				/>
			)}
		</View>
	)
}

export default AllPostsScreen

const styles = StyleSheet.create({
	container: { backgroundColor: '#fff' },
})
