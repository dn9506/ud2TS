import { MaterialIcons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import {
	HeaderButton,
	HeaderButtonProps,
} from 'react-navigation-header-buttons'

const AppHeaderIcon: FC<HeaderButtonProps> = props => (
	<HeaderButton
		IconComponent={MaterialIcons}
		iconSize={24}
		color={'#fff'}
		{...props}
	/>
)

export default AppHeaderIcon

const styles = StyleSheet.create({})
