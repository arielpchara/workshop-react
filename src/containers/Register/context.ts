import { createContext } from 'react'
import { RegisterContext } from './interfaces'
import { defaultContext } from './constants'

export const Context = createContext<RegisterContext>(defaultContext)
