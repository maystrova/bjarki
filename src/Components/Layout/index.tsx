import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ROUTES } from 'services/route'

import { HomePage } from 'Pages/HomePage'

import { SignIn } from 'Components/SignIn'
import { Header } from 'Components/Header'

import { GlobalStyle, StyledLayout } from './style'

const Layout = () => {
    const [isShowAuthorizationWindow, setIsShowAuthorizationWindow] =
        useState<boolean>(false)

    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <Header
                    onFlightClicked={() => {}}
                    onDiscoversClicked={() => {}}
                    onNewsClicked={() => {}}
                    onDealClicked={() => {}}
                    onLogInClicked={() => setIsShowAuthorizationWindow(true)}
                    onSignUpClicked={() => setIsShowAuthorizationWindow(true)}
                    onSwitchLangClicked={() => {}}
                />
                <Switch>
                    <Route path={[ROUTES.HOME_PAGE, '/']}>
                        <HomePage />
                    </Route>
                </Switch>

                <SignIn
                    onCancel={() => setIsShowAuthorizationWindow(false)}
                    isOpen={isShowAuthorizationWindow}
                />
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
