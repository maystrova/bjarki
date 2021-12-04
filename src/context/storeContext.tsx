import { ADVENTURES } from 'adventures/adventures'
import { DESTINATIONS } from 'destinations/destinations'
import { HOTELS } from 'hotels/hotels'
import React, { createContext, Dispatch, ReactChild, useReducer } from 'react'
import { LANGUAGE } from 'services/language'
import { AdventuresType, DestinationType } from 'services/type'
import { DEFAULT_USER, UserType } from 'services/user'
import { ACTION } from './actions'
import { reducer } from './reducer'

export interface StoreType {
    destinations: DestinationType[]
    user: UserType
    hotels: AdventuresType[]
    adventures: AdventuresType[]
    currentLanguage: LANGUAGE
}

const INITIAL_STORE: StoreType = {
    destinations: DESTINATIONS,
    hotels: HOTELS,
    user: DEFAULT_USER,
    adventures: ADVENTURES,
    currentLanguage: LANGUAGE.EN,
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

export const BjarkiProvider = ({ children }: BjarkiProviderProps) => {
    const [store, dispatch] = useReducer(reducer, INITIAL_STORE)

    return (
        <BjarkiContext.Provider value={{ store, dispatch }}>
            {children}
        </BjarkiContext.Provider>
    )
}
