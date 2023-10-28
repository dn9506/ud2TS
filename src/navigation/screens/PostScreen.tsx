import { StackNavigationOptions } from '@react-navigation/stack'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class PostScreen extends Component {
	static screenOptions: StackNavigationOptions = {}
	render() {
		return (
			<View>
				<Text>PostScreen</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({})
