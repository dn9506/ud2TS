import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
	return (
		<View style={styles.container}>
			<Text>3-й полностью переписанный вариант приложения.</Text>
		</View>
	)
}

export default AboutScreen

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		color: '#000',
	},
})
