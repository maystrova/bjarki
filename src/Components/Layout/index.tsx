import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'

import { ROUTES } from 'services/route'
import { User } from 'services/user'

import { HomePage } from 'Pages/HomePage'

import { SignIn } from 'Components/SignIn'
import { Header } from 'Components/Header'

import { GlobalStyle, StyledLayout } from './style'
import firebase from 'firebase/compat'

import anonAvatar from 'services/anon-avatar.png'
import { DiscoverPage } from 'Pages/DiscoverPage'
import { FlightPage } from '../../Pages/FlightPage'
import { NewsPage } from '../../Pages/NewsPage'
import { HotelListPage } from '../../Pages/HotelListPage'
import { AdventuresListPage } from '../../Pages/AdventuresListPage'

const Layout = () => {
    const [isShowAuthorizationWindow, setIsShowAuthorizationWindow] =
        useState<boolean>(false)

    const onGoogleAuthorization = async () => {
        const authProvider = new firebase.auth.GoogleAuthProvider()

        await firebase
            .auth()
            .signInWithPopup(authProvider)
            .then(result => {
                /** @type {firebase.auth.OAuthCredential} */
                let user = result.user
                const preparedUser: User = {
                    name: user?.displayName ? user.displayName : 'User',
                    avatar: user?.photoURL ? user.photoURL : anonAvatar,
                    id: user?.uid ? user?.uid : 'empty_id',
                    email: user?.email ? user.email : '',
                }

                window.localStorage.setItem(
                    'user',
                    JSON.stringify(preparedUser),
                )

                // ...
            })
            .catch(() => {})
    }

    const history = useHistory()

    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <Header
                    onLogInClicked={() => setIsShowAuthorizationWindow(true)}
                    onSignUpClicked={() => {}}
                    onSwitchLangClicked={() => {}}
                />
                <Switch>
                    <Route path={[ROUTES.HOME_PAGE, '/']} exact>
                        <HomePage />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.DISCOVER_PAGE} exact>
                        <DiscoverPage />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.FLIGHT_PAGE} exact>
                        <FlightPage />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.NEWS_PAGE} exact>
                        <NewsPage />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.HOTEL_LIST_PAGE} exact>
                        <HotelListPage />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.ADVENTURES_LIST_PAGE} exact>
                        <AdventuresListPage />
                    </Route>
                </Switch>

                <SignIn
                    onFacebookAuth={() => {}}
                    onGoogleAuth={() => onGoogleAuthorization()}
                    onCancel={() => setIsShowAuthorizationWindow(false)}
                    isOpen={isShowAuthorizationWindow}
                />
            </StyledLayout>
        </BrowserRouter>
    )
}

export { Layout }
