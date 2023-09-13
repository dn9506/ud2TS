import { StackScreenProps } from '@react-navigation/stack'
import * as Font from 'expo-font'
import { useCallback } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { RootStackParamList } from '../navigation/types'

type LoadingScreenNavigationProps = StackScreenProps<
	RootStackParamList,
	'Loading'
>
export const LoadingScreen = ({ navigation }: LoadingScreenNavigationProps) => {
	const [fontsLoaded] = async () =>
		await Font.loadAsync({
			'open-bolt': require('../../assets/fonts/DancingScript-Bold.ttf'),
			'open-regular': require('../../assets/fonts/DancingScript-Regular.ttf'),
		})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			navigation.replace('MainScreenTab', { screen: 'AllPosts' })
		}
	}, [fontsLoaded])

	return (
		<View onLayout={onLayoutRootView} style={styles.container}>
			<Image
				source={require('../../assets/loading.gif')}
				style={styles.image}
			/>
		</View>
	)
}

LoadingScreen.navigationOptions = {
	headerShown: false,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		resizeMode: 'center',
	},
})
