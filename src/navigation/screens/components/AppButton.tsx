import React, { FC } from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { btnColors } from '../../../theme'

interface IAppButton {
	color: btnColors
	title: string
	onPress: () => void
}

const AppButton: FC<IAppButton> = props => (
	<TouchableOpacity onPress={props.onPress}>
		<Text style={{ ...styles.btn, backgroundColor: props.color }}>
			{props.title}
		</Text>
	</TouchableOpacity>
)

export default AppButton

const styles = StyleSheet.create({
	btn: { paddingHorizontal: 15, paddingVertical: 5 },
})
