import { StackNavigationOptions } from '@react-navigation/stack'
import React, { FC } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Post from '../../components/Post'
import { DATA } from '../../data'
import { IPost } from '../../models/IPost'
import { AllPostsScreenProps } from './types/types'

export const AllPostsScreen: FC<AllPostsScreenProps> = ({ navigation }) => {
	const posts: IPost[] = DATA

	return (
		<View>
			<Text>AllPostsScreen</Text>

			<FlatList
				data={posts}
				renderItem={post => (
					<Post
						key={post.item.id}
						post={post.item}
						goToPost={() =>
							navigation.navigate('PostScreen', { postId: post.item.id })
						}
					/>
				)}
			/>
		</View>
	)
}

export const allPostsScreenNavigationOptions = (): StackNavigationOptions => {
	return { headerRight: () => <Text></Text> }
}

const styles = StyleSheet.create({
	container: {},
})
