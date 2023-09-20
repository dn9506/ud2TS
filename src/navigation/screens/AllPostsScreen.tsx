import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Post from '../../components/Post'

const AllPostsScreen = () => {
	return (
		<View>
			<Text>AllPostsScreen</Text>
			<Post />
		</View>
	)
}

AllPostsScreen.navigationOptions = {}

export default AllPostsScreen

const styles = StyleSheet.create({})
