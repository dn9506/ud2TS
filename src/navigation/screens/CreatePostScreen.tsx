import { StackNavigationOptions } from '@react-navigation/stack'
import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CreateScreenProps } from './types/types'

export const CreatePostScreen: FC<CreateScreenProps> = () => {
	return (
		<View>
			<Text>CreatePostScreen</Text>
		</View>
	)
}

export const createPostScreenNavigationOptions =
	(): StackNavigationOptions => ({})

const styles = StyleSheet.create({})
