import { themeCount } from '../context/todoContext'

export enum actionEnum {
	SIZE = 'changeSize',
	TEXT = 'changeColor',
	CHANGE = 'changeText',
}
type actionType =
	| { type: actionEnum.SIZE }
	| { type: actionEnum.TEXT }
	| { type: actionEnum.CHANGE; title: string }

export const TodoReducer = (state: stateType, action: actionType) => {
	switch (action.type) {
		case actionEnum.SIZE:
			return state.size === 40
				? { text: state.text, size: 50 }
				: { text: state.text, size: 40 }
		case actionEnum.TEXT:
			return state.text === themeCount.LIGHT
				? { text: themeCount.DARK, size: state.size }
				: { text: themeCount.LIGHT, size: state.size }
		case actionEnum.CHANGE:
			return { text: themeCount.BLUE, size: 100 }
		default:
			return state
	}
}

interface stateType {
	text: themeCount
	size: number
}
