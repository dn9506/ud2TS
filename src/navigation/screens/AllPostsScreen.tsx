import { DrawerNavigationOptions } from '@react-navigation/drawer'
import React, { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { DATA } from '../../store/data'
import Post from './components/Post'

export const AllPostsScreen: FC = () => {
	const posts = DATA

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={elem => <Post post={elem} />}
				keyExtractor={post => post.id}
			/>
		</View>
	)
}

export const AllPostsScreenOptions: DrawerNavigationOptions = {
	headerTitle: 'Some Text',
	headerTintColor: '#fff',
	headerStyle: { backgroundColor: '#1612' },
}

const styles = StyleSheet.create({
	container: {},
})
