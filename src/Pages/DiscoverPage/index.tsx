import React from 'react'

import { DiscoverCard } from 'Components/DiscoverCard'

import { COUNTRIES } from 'services/type'
import { StyledDiscoverPage, StyledDiscoverPageCountryList } from './style'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { Icon, ICON_SIZE } from 'Components/Icon'
import further from 'Pages/DiscoverPage/pics/arrow-right.svg'
import { CardSlider } from '../../Components/Slider'

interface DiscoverPageProps {}

const DiscoverPage = ({}: DiscoverPageProps) => {
    let countries = Object.entries(COUNTRIES).map(([key, value]) => ({
        title: key,
        name: value,
    }))

    return (
        <StyledDiscoverPage>
            <div>
                <StyledDiscoverPageCountryList>
                    {/*<CardSlider title={'Destination'}>*/}
                    {/*    <div>*/}
                    {/*        {' '}*/}
                    {/*        {countries.map(country => {*/}
                    {/*            return (*/}
                    {/*                <div>*/}
                    {/*                    {' '}*/}
                    {/*                    <DiscoverCard*/}
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

                    <Button onClick={() => {}} type={BUTTON_TYPE.ROUND}>
                        <Icon size={ICON_SIZE.SMALL} src={further} />
                    </Button>
                </StyledDiscoverPageCountryList>
            </div>
        </StyledDiscoverPage>
    )
}

export { DiscoverPage }
