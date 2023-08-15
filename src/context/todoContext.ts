import { createContext } from 'react'

export enum themeCount {
	LIGHT = 'white',
	DARK = 'black',
	BLUE = 'blue',
}

export interface ThemeContextType {
	theme: themeCount
	size: number
	changeContextColor: () => void
	changeContextTextSize: () => void
	changeContextText: (title: string) => void
}

export const TodoContext = createContext<ThemeContextType | null>(null)
