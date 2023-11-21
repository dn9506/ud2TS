import { DrawerScreenProps } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import AppHeaderIcon from './AppHeaderIcon'
import { TDrawerNavigation } from './types/navigationTypes'

type props = DrawerScreenProps<TDrawerNavigation, 'StackContainer'>

const mainScreenHeader = ({ navigation }: props) => {
	const btnLeft = () => navigation.toggleDrawer()

	const btnRight = () => navigation.jumpTo('CreatePost')

	return {
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
				<Item title='Menu' iconName='menu' onPress={() => btnLeft()} />
			</HeaderButtons>
		),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
				<Item
					title='New post'
					iconName='photo-camera'
					onPress={() => btnRight()}
				/>
			</HeaderButtons>
		),
	}
}

export default mainScreenHeader

const styles = StyleSheet.create({})
