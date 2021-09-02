import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GlobalStyle, StyledLayout } from './style'
import { HomePage } from 'Pages/HomePage'
import { ROUTES } from 'services/route'
import { SignIn } from 'Components/SignIn'

const Layout = () => {
    const [isShowAuthorizationWindow, setIsShowAuthorizationWindow] =
        useState<boolean>(false)

    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <Switch>
                    <Route path={[ROUTES.HOME_PAGE, '/']}>
                        <HomePage />
                    </Route>
                </Switch>
                {isShowAuthorizationWindow && <SignIn />}
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
