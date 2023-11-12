import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { TDrawerNavigation } from './types/navigationTypes'

type props = DrawerScreenProps<TDrawerNavigation, 'StackContainer'>

const mainScreenHeader: FC<props> = ({ navigation }) => {
	const btnLeft = () => (
		<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
			<Text>LLL</Text>
		</TouchableOpacity>
	)

	const btnRight = () => (
		<TouchableOpacity onPress={() => navigation.jumpTo('CreatePost')}>
			<Text>RRR</Text>
		</TouchableOpacity>
	)

	return {
		headerLeft: btnLeft,
		headerRight: btnRight,
	}
}

export default mainScreenHeader

const styles = StyleSheet.create({})
