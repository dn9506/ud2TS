import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class BookedPostsScreen extends Component {
	static screenOptions: BottomTabNavigationOptions = {}
	render() {
		return (
			<View>
				<Text>BookedPostsScreen</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({})
