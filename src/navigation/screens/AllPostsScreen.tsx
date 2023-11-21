import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { IPost } from '../../model/IPost'
import { DATA } from '../../store/data'
import Post from './components/Post'
import {
	TBottomTabNavigation,
	TStackNavigation,
} from './components/types/navigationTypes'

type props = CompositeScreenProps<
	StackScreenProps<TStackNavigation, 'TabContainer'>,
	BottomTabScreenProps<TBottomTabNavigation, 'AllPostScreen'>
>

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

const styles = StyleSheet.create({
	container: { backgroundColor: '#fff' },
})
