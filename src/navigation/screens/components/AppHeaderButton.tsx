import { MaterialIcons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'

const AppHeaderButton: FC = () => {
	return <HeaderButton IconComponent={MaterialIcons} iconSize={23} />
}

export default AppHeaderButton

const styles = StyleSheet.create({})
