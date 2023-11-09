import { DrawerNavigationOptions } from '@react-navigation/drawer'
import React, { FC, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { IPost } from '../../model/IPost'

const CreatePostScreen: FC = () => {
	const [post, setPost] = useState<IPost>()

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Text>Add full link to picture:</Text>
				<TextInput value={post?.img} />
			</View>
			<View style={styles.inputContainer}>
				<Text>Add full link to picture:</Text>
				<TextInput value={post?.img} />
			</View>
		</View>
	)
}

const CreatePostScreenOptions: DrawerNavigationOptions = {}

export default CreatePostScreen

const styles = StyleSheet.create({
	container: {},
	inputContainer: {},
	btnContainer: { flexDirection: 'row', justifyContent: 'space-around' },
})
