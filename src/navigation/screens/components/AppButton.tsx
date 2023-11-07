import React, { FC } from 'react'
import { Button, StyleSheet } from 'react-native'

interface IAppButton {
	color: THEME.btnColors
	title: string
}

const AppButton: FC<IAppButton> = props => (
	<Button title={props.title} color={props.color} />
)

export default AppButton

const styles = StyleSheet.create({})
