import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet } from 'react-native'
import {
	HeaderButton,
	HeaderButtonProps,
} from 'react-navigation-header-buttons'

const AppHeaderIcon = (props: HeaderButtonProps) => (
	<HeaderButton
		IconComponent={MaterialIcons}
		iconSize={24}
		color={'#fff'}
		{...props}
	/>
)

export default AppHeaderIcon

const styles = StyleSheet.create({})
