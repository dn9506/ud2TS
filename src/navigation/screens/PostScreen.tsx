import { StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DATA } from '../../data'
import { PostScreenProps } from './types/types'

export const PostScreen = ({ route, navigation }: PostScreenProps) => {
	const post = DATA.find(post => post.id === route.params.postId)

	return (
		<View>
			<Text>PostScreen</Text>
			<Image source={{ uri: post?.img }} style={styles.img} />
			<Text>{post?.text}</Text>
		</View>
	)
}

export const postScreenNavigationOptions = (): StackNavigationOptions => ({})

const styles = StyleSheet.create({
	img: {},
})
