import { StackNavigationOptions } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { IPost } from '../../model/IPost'
import { DATA } from '../../store/data'
import Post from './components/Post'

const AllPostsScreen: FC = () => {
	const [posts, setPosts] = useState<IPost[]>(DATA)

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={elem => <Post post={elem.item} />}
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
