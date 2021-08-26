import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GlobalStyle, StyledLayout } from './style'
import { HomePage } from 'Pages/HomePage'
import { ROUTES } from 'services/route'

const Layout = () => {
    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <Switch>
                    <Route path={[ROUTES.HOME_PAGE, '/']}>
                        <HomePage />
                    </Route>
                </Switch>
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
