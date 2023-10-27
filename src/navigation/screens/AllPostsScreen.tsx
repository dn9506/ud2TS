import { DrawerNavigationOptions } from '@react-navigation/drawer'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class AllPostsScreen extends Component {
	static screenOptions: DrawerNavigationOptions = {
		headerTitle: 'Some Text',
		headerTintColor: '#fff',
		headerStyle: { backgroundColor: '#1612' },
	}
	render() {
		return (
			<View>
				<Text>AllPostsScreen</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({})
