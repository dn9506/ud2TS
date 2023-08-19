import { StyleSheet, Text, View } from 'react-native'

export const PostScreen = () => {
	return (
		<View style={styles.container}>
			<Text>PostScreen</Text>
		</View>
	)
}

PostScreen.navigationOptions = {
	title: 'Second',
	headerStyle: {
		backgroundColor: 'red',
	},
	headerTintColor: 'black',
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'pink',
	},
})
