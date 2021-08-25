import React from 'react'
import { Logo } from '../../Components/Logo'
import {
    StyledHomePage,
    StyledHomePageFooter,
    StyledHomePageHeader,
    StyledHomePageHeaderLogo,
    StyledScroll,
    StyledScrollButton,
    StyledSearchActions,
} from './style'
import { HeaderMenu } from '../../Components/HeaderMenu'
import { UserActionMenu } from '../../Components/UserActionMenu'

import { Icon, ICON_SIZE } from '../../Components/Icon'

import down from './pics/arrow-down.svg'
import { Search } from '../../Components/Search'
import { Destination } from '../../Components/Destination'

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
    return (
        <StyledHomePage>
            <StyledHomePageHeader>
                <StyledHomePageHeaderLogo>
                    <Logo />
                    <HeaderMenu />
                </StyledHomePageHeaderLogo>
                <UserActionMenu />
            </StyledHomePageHeader>
            <Destination />
            <StyledHomePageFooter>
                <StyledSearchActions>
                    <div>
                        {' '}
                        <StyledScroll>Scroll</StyledScroll>
                        <StyledScrollButton>
                            <Icon size={ICON_SIZE.XX_SMALL} src={down} />
                        </StyledScrollButton>
                    </div>
                    <Search />
                </StyledSearchActions>
            </StyledHomePageFooter>
        </StyledHomePage>
    )
}

export { HomePage }
