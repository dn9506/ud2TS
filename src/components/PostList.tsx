import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Post } from './Post'
import { TPost } from './types'

interface IPostList {
	data: TPost[]
	goToPost: (post: TPost) => void
}

export const PostList = ({ data, goToPost }: IPostList) => {
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
