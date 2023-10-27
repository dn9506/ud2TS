import { DrawerNavigationOptions } from '@react-navigation/drawer'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class AboutScreen extends Component {
	static screenOptions: DrawerNavigationOptions = {}
	render() {
		return (
			<View>
				<Text>AboutScreen</Text>
			</View>
		)
	}
}

export default AboutScreen
