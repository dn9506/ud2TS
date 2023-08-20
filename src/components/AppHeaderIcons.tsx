import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Platform } from 'react-native'
import {
	HeaderButton,
	HeaderButtonProps,
} from 'react-navigation-header-buttons'
import { THEME } from '../theme'

export const AppHeaderIcons = (props: HeaderButtonProps) => {
	return (
		<HeaderButton
			{...props}
			iconSize={24}
			IconComponent={Ionicons}
			color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
		/>
	)
}
