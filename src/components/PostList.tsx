import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { IPost } from '../models/IPost'
import { Post } from './Post'

interface IPostList {
	data: IPost[]
	goToPost: (post: IPost) => void
}

export const PostList: React.FC<IPostList> = ({ data, goToPost }) => {
	return (
		<View style={styles.wrapper}>
			<FlatList
				data={data}
				keyExtractor={post => post.id.toString()}
				renderItem={({ item }) => {
					return <Post post={item} onOpen={goToPost} />
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: { padding: 10 },
})
