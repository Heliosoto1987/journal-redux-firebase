//vendor
import React from 'react'
import { Provider } from 'react-redux'
//Router
import { AppRouter } from './Routers/AppRouter'
//store
import { store } from './store/store'

export const JournalApp = () => {
    return (
        <div>
            <Provider store={ store}>
                <AppRouter />
            </Provider>
        </div>
    )
}
