import * as Font from 'expo-font'

export async function bootstrap() {
	await Font.loadAsync({
		'open-bolt': require('../assets/fonts/DancingScript-Bold.ttf'),
		'open-regular': require('../assets/fonts/DancingScript-Regular.ttf'),
	})
}
