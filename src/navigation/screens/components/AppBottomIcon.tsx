import { MaterialIcons } from '@expo/vector-icons'
import React, { FC } from 'react'

export enum bottomIconNames {
	allPosts = 'drag-indicator',
	bookedPosts = 'bookmark',
}
type props = {
	icon: bottomIconNames
	color?: string
}

const AppBottomIcon: FC<props> = ({ icon, color = 'white' }) => (
	<MaterialIcons name={icon} size={24} color={color} />
)

export default AppBottomIcon
