import { StyleSheet, Text, View } from 'react-native'

export const AboutScreen = () => {
	return (
		<View style={styles.container}>
			<Text>AboutScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
})
