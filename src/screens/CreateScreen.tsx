import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const CreateScreen = () => {
	return (
		<View style={styles.container}>
			<Text>CreateScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green',
	},
})