import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Post } from '../components/Post'
import { TPost } from '../components/types'
import { DATA } from '../data'
import { navigationProps } from '../navigation/types'

export const MainScreen = ({ navigation }: navigationProps) => {
	const goToPost = (post: TPost) => {
		navigation.navigate('Post')
	}

	return (
		<View style={styles.wrapper}>
			<FlatList
				data={DATA}
				keyExtractor={post => post.id.toString()}
				renderItem={({ item }) => {
					return <Post post={item} onOpen={goToPost} />
				}}
			/>
		</View>
	)
}

MainScreen.navigationOptions = {
	title: 'First',
}

const styles = StyleSheet.create({
	wrapper: { padding: 10 },
})
