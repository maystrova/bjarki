import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import firebase from 'firebase'

import { ROUTES } from 'services/route'
import { UserType } from 'services/user'

import { SignIn } from 'Components/SignIn'

import { HomePage } from 'Pages/HomePage'
import { DiscoverPage } from 'Pages/DiscoverPage'
import { FlightPage } from 'Pages/FlightPage'
import { NewsPage } from 'Pages/NewsPage'
import { HotelListPage } from 'Pages/HotelListPage'
import { AdventuresListPage } from 'Pages/AdventuresListPage'
import { AdventurePage } from 'Pages/AdventurePage'
import { HotelPage } from 'Pages/HotelPage'
import { DestinationPage } from 'Pages/DestinationPage'

import { GlobalStyle, StyledLayout } from './style'

import anonAvatar from 'services/anon-avatar.png'

const Layout = () => {
    const [isShowAuthorizationWindow, setIsShowAuthorizationWindow] =
        useState<boolean>(false)

    const onGoogleAuthorization = async () => {
        const authProvider = new firebase.auth.GoogleAuthProvider()

        await firebase
            .auth()
            .signInWithPopup(authProvider)
            .then(result => {
                let user = result.user
                const preparedUser: UserType = {
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

    return (
        <BrowserRouter>
            <StyledLayout>
                <GlobalStyle />
                <Switch>
                    <Route path={[ROUTES.HOME_PAGE, '/']} exact>
                        <HomePage
                            onSignInClicked={() =>
                                setIsShowAuthorizationWindow(true)
                            }
                        />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.DISCOVER_PAGE} exact>
                        <DiscoverPage
                            onLogInClicked={() =>
                                setIsShowAuthorizationWindow(true)
                            }
                        />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.FLIGHT_PAGE} exact>
                        <FlightPage
                            onLogInClicked={() =>
                                setIsShowAuthorizationWindow(true)
                            }
                        />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.NEWS_PAGE} exact>
                        <NewsPage
                            onLogInClicked={() =>
                                setIsShowAuthorizationWindow(true)
                            }
                        />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.HOTEL_LIST_PAGE} exact>
                        <HotelListPage
                            onLogInClicked={() =>
                                setIsShowAuthorizationWindow(true)
                            }
                        />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.ADVENTURES_LIST_PAGE} exact>
                        <AdventuresListPage
                            onLogInClicked={() =>
                                setIsShowAuthorizationWindow(true)
                            }
                        />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.ADVENTURE_PAGE} exact>
                        <AdventurePage />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.HOTEL_PAGE} exact>
                        <HotelPage />
                    </Route>
                </Switch>
                <Switch>
                    <Route path={ROUTES.DESTINATION_PAGE}>
                        <DestinationPage
                            onLogInClicked={() =>
                                setIsShowAuthorizationWindow(true)
                            }
                        />
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
