import { DrawerNavigationOptions } from '@react-navigation/drawer'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class AboutScreen extends Component {
	static screenOptions: DrawerNavigationOptions = {}
	render() {
		return (
			<View>
				<Text>AboutScreen</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {},
})
