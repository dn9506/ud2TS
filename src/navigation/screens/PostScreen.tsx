import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IPost } from '../../model/IPost'
import { DATA } from '../../store/data'
import { btnColors } from '../../theme'
import { TStackNavigation } from '../AppNavigation.props'
import AppButton from './components/AppButton'

type props = StackScreenProps<TStackNavigation, 'PostScreen'>

const PostScreen: FC<props> = ({ route, navigation }) => {
	const [post, setPost] = useState<IPost>(
		DATA.find(elem => elem.id === route.params.postId)!
	)

	const cancelBtn = () => {
		navigation.goBack()
	}

	const removeBtn = () => {
		navigation.navigate('ModalScreen', { postId: post.id })
	}

	return (
		<View>
			<Image source={{ uri: post.img }} resizeMode='cover' style={styles.img} />
			<Text style={styles.text}>{post.text}</Text>
			<View style={styles.buttonsView}>
				<AppButton
					title='cancel'
					color={btnColors.defaultColor}
					onPress={() => cancelBtn()}
				/>
				<AppButton
					title='delete'
					color={btnColors.dangerColor}
					onPress={() => removeBtn()}
				/>
			</View>
		</View>
	)
}

export default PostScreen

const styles = StyleSheet.create({
	img: { height: 200, marginVertical: 2 },
	text: {},
	buttonsView: { flexDirection: 'row', justifyContent: 'space-around' },
	btn: {},
})
