import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { ThemeContextType, TodoContext } from './context/todoContext'

export const MainScreen = () => {
	let {
		theme,
		size,
		changeContextColor,
		changeContextTextSize,
		changeContextText,
	} = useContext(TodoContext) as ThemeContextType

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={{ color: theme, fontSize: size }}>{theme}</Text>
			</View>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					justifyContent: 'space-around',
				}}
			>
				<Button
					title='SIZE'
					onPress={changeContextTextSize}
					color={'#3C2121'}
				/>
				<Button title='COLOR' onPress={changeContextColor} color={'#3C2121'} />
				<Button
					title='SIZE'
					onPress={() => changeContextText('aaa')}
					color={'aqua'}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E91010',
		alignItems: 'center',
		justifyContent: 'space-around',
		color: '3C2121',
		fontSize: 10,
	},
	top: {
		height: '50%',
	},
})
