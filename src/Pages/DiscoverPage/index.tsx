import React from 'react'

import { COUNTRIES } from 'services/type'
import { StyledDiscoverPage, StyledDiscoverPageCountryList } from './style'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { Icon, ICON_SIZE } from 'Components/Icon'
import further from 'Pages/DiscoverPage/pics/arrow-right.svg'
import { StyledContainer } from 'Components/Layout/style'
import { Header, HEADER_TYPE } from 'Components/Header'

import arrow from 'Components/Header/pics/arrow.svg'

interface DiscoverPageProps {
    onLogInClicked: () => void
}

const DiscoverPage = ({ onLogInClicked }: DiscoverPageProps) => {
    const countries = Object.entries(COUNTRIES).map(([key, value]) => ({
        title: key,
        name: value,
    }))

    return (
        <StyledDiscoverPage>
            <Header
                onLogInClicked={onLogInClicked}
                headerType={HEADER_TYPE.WHITE}
            />
            <StyledContainer>
                <StyledDiscoverPageCountryList>
                    {/*<CardSlider title={'Destination'}>*/}
                    {/*    <div>*/}
                    {/*        {' '}*/}
                    {/*        {countries.map(country => {*/}
                    {/*            return (*/}
                    {/*                <div>*/}
                    {/*                    {' '}*/}
                    {/*                    <CountryCard*/}
                    {/*                        cardNumber={`${*/}
                    {/*                            countries*/}
                    {/*                                .indexOf(country)*/}
                    {/*                                .toString().length < 2 && 0*/}
                    {/*                        }${countries*/}
                    {/*                            .indexOf(country)*/}
                    {/*                            .toString()}`}*/}
                    {/*                        title={country.name}*/}
                    {/*                        country={country.name}*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*            )*/}
                    {/*        })}*/}
                    {/*    </div>*/}
                    {/*</CardSlider>*/}

                    {/*<Button onClick={() => {}} type={BUTTON_TYPE.ROUND}>*/}
                    {/*    <Icon size={ICON_SIZE.SMALL} src={further} />*/}
                    {/*</Button>*/}
                </StyledDiscoverPageCountryList>
            </StyledContainer>
        </StyledDiscoverPage>
    )
}

export { DiscoverPage }
