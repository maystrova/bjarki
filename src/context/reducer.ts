import { StoreType } from './storeContext'
import { ACTION } from './actions'

export const reducer = (
    currentState: StoreType,
    payload: { action: ACTION; data: any },
): StoreType => {
    console.log('payload', payload)
    switch (payload.action) {
        case ACTION.SET_LANGUAGE:
            return {
                ...currentState,
                currentLanguage: payload.data,
            }
        default:
            return currentState
    }
}
