import {
	StackNavigationOptions,
	StackScreenProps,
} from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { IPost } from '../../model/IPost'
import { DATA } from '../../store/data'
import Post from './components/Post'
import { TStackNavigation } from './components/types/navigationTypes'

type props = StackScreenProps<TStackNavigation, 'TabContainer'>

const AllPostsScreen: FC<props> = ({ navigation }) => {
	const [posts, setPosts] = useState<IPost[]>(DATA)
	const goToPost = (id: string) => {
		navigation.push('PostScreen', { postId: id })
	}
	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={elem => <Post post={elem.item} goToPost={goToPost} />}
				keyExtractor={post => post.id}
			/>
		</View>
	)
}

export default AllPostsScreen

export const allPostsScreenOptions = (): StackNavigationOptions => {
	return {}
}

const styles = StyleSheet.create({
	container: { backgroundColor: '#fff' },
})
