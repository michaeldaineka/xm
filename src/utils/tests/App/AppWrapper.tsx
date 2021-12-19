import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import authSlice from 'store/slices/authSlice'
import alertsSlice from 'store/slices/alertsSlice'
import companySlice from 'store/slices/companySlice'
import {BrowserRouter as Router} from 'react-router-dom'
import type { RootState } from '../../../store/index'

function render(
    ui: JSX.Element,
    {
        preloadedState,
        store = configureStore({
            reducer: {
                auth: authSlice,
                alerts: alertsSlice,
                company: companySlice,
            }, preloadedState
        }),
        ...renderOptions
    }: {
        preloadedState?: RootState,
        store?: any,
        [key: string]: any,
    } = {}
) {
    function Wrapper({children}: {children?: React.ReactNode}): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }

    return <Wrapper>{ui}</Wrapper>
}

export {render}
