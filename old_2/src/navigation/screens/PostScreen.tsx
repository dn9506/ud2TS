import { MaterialIcons } from '@expo/vector-icons'
import { StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { DATA } from '../../data'
import { PostScreenProps } from './types/types'

export const PostScreen = ({ route, navigation }: PostScreenProps) => {
	const post = DATA.find(post => post.id === route.params.postId)

	return (
		<View>
			<Text>PostScreen</Text>
			<Image source={{ uri: post?.img }} style={styles.img} />
			<Text>{post?.text}</Text>
			<View style={styles.buttons}>
				<Button title='Delete' />
				<Button title='Change' />
			</View>
		</View>
	)
}

export const postScreenNavigationOptions = (): StackNavigationOptions => ({
	headerRight: () => (
		<MaterialIcons
			name='star'
			size={24}
			style={{ marginRight: 5 }}
			color='#74CEB7'
		/>
	),
})

const styles = StyleSheet.create({
	img: {
		width: '100%',
		height: 200,
	},
	buttons: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
	},
})
