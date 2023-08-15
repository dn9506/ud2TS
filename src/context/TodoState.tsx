import React, { useReducer } from 'react'
import { TodoReducer, actionEnum } from '../reducer/todoReducer'
import { TodoContext, themeCount } from './todoContext'

export const TodoState = ({ children }: React.PropsWithChildren) => {
	const [state, dispatch] = useReducer(TodoReducer, {
		text: themeCount.DARK,
		size: 40,
	})

	return (
		<TodoContext.Provider
			value={{
				theme: state.text,
				size: state.size,
				changeContextColor: () => dispatch({ type: actionEnum.TEXT }),
				changeContextTextSize: () => dispatch({ type: actionEnum.SIZE }),
				changeContextText: (title: string) =>
					dispatch({ type: actionEnum.CHANGE, title }),
			}}
		>
			{children}
		</TodoContext.Provider>
	)
}
