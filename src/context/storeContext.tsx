import React, { createContext, useReducer, ReactChild, Dispatch } from 'react'
import { DestinationType } from '../destinations/type'
import { DESTINATIONS } from '../destinations/destinations'
import { ACTION } from './actions'
import { reducer } from './reducer'
import { ThemeProvider } from 'styled-components'

export interface StoreType {
    destinations: DestinationType[]
}

const INITIAL_STORE: StoreType = {
    destinations: DESTINATIONS,
}

export const BjarkiContext = createContext<{
    store: StoreType
    dispatch: Dispatch<{ action: ACTION; data: any }>
}>({
    store: INITIAL_STORE,
    dispatch: () => null,
})

interface BjarkiProviderProps {
    children:
        | React.ReactChildren
        | React.ReactChildren[]
        | React.ReactChild
        | ReactChild[]
}

export const OrganicProvider = ({ children }: BjarkiProviderProps) => {
    const [store, dispatch] = useReducer(reducer, INITIAL_STORE)

    return (
        <ThemeProvider theme={''}>
            <BjarkiContext.Provider value={{ store, dispatch }}>
                {children}
            </BjarkiContext.Provider>
        </ThemeProvider>
    )
}
