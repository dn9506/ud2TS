import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { btnColors } from '../../theme'
import { TStackNavigation } from '../AppNavigation.props'
import AppButton from './components/AppButton'

type props = StackScreenProps<TStackNavigation, 'ModalScreen'>
const ModalScreen: FC<props> = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 30 }}>
				You want to delete post: {route.params.postId}
			</Text>
			<AppButton
				onPress={() => navigation.goBack()}
				title='Cancel'
				color={btnColors.defaultColor}
			/>
		</View>
	)
}

export default ModalScreen

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
