import React, { createContext, useReducer, ReactChild, Dispatch } from 'react'
import { DestinationType } from 'services/type'
import { DESTINATIONS } from 'destinations/destinations'
import { ACTION } from './actions'
import { reducer } from './reducer'
import { ThemeProvider } from 'styled-components'
import { DEFAULT_USER, User } from 'services/user'

export interface StoreType {
    destinations: DestinationType[]
    user: User
}

const INITIAL_STORE: StoreType = {
    destinations: DESTINATIONS,
    user: DEFAULT_USER,
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
