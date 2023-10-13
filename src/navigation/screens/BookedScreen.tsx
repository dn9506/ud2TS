import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Post from '../../components/Post'
import { DATA } from '../../data'
import { IPost } from '../../models/IPost'
import { BookedScreenProps } from './types/types'

const BookedScreen: React.FC<BookedScreenProps> = ({ route, navigation }) => {
	const posts: IPost[] = DATA.filter(post => post.booked)
	return (
		<View>
			<Text>BookedScreen</Text>
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

BookedScreen.navigationOptions:React.Fc<Options> = () => ({})

export default BookedScreen

const styles = StyleSheet.create({})
