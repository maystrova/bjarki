import React from 'react'
import { useHistory } from 'react-router-dom'

import { MenuType } from 'services/type'
import { ROUTES } from 'services/route'

import { Logo, LOGO_TYPE } from 'Components/Logo'
import { LOGO_COLOR } from 'Components/Logo/style'

import { StyledHeader, StyledLogo, StyledMenu, StyledMenuItem } from './style'
import { Icon, ICON_SIZE } from '../Icon'

export enum HEADER_TYPE {
    WHITE = 'WHITE',
    BLACK = 'BLACK',
}

interface HeaderProps {
    onLogInClicked: () => void
    headerType: HEADER_TYPE
    icon: string
}

const Header = ({ onLogInClicked, headerType, icon }: HeaderProps) => {
    const logoTitle: string = 'Bjarki'
    const history = useHistory()

    const HEADER_MENU: MenuType[] = [
        { title: 'Deal', onClick: () => {} },
        { title: 'Flight', onClick: () => history.push(ROUTES.FLIGHT_PAGE) },
        {
            title: 'Discovers',
            onClick: () => history.push(ROUTES.DISCOVER_PAGE),
        },
        { title: 'News', onClick: () => history.push(ROUTES.NEWS_PAGE) },
    ]

    const USER_ACTION_MENU: MenuType[] = [
        {
            title: 'Eng',
            icon: icon,
            onClick: () => {},
        },
        { title: 'Sign Up', onClick: () => {} },
        { title: 'Log In', onClick: onLogInClicked },
    ]

    return (
        <StyledHeader>
            <StyledLogo>
                <Logo
                    type={LOGO_TYPE.HEADER}
                    title={logoTitle}
                    color={LOGO_COLOR.WHITE}
                />
                <StyledMenu>
                    {HEADER_MENU.map(item => {
                        return (
                            <StyledMenuItem
                                headerType={headerType}
                                key={item.title}
                            >
                                <button onClick={item.onClick}>
                                    {item.title}
                                </button>
                            </StyledMenuItem>
                        )
                    })}
                </StyledMenu>
            </StyledLogo>
            <StyledMenu>
                {USER_ACTION_MENU.map(item => {
                    return (
                        <StyledMenuItem
                            headerType={headerType}
                            key={item.title}
                        >
                            <button onClick={item.onClick}>
                                {item.title}
                                {item.icon && (
                                    <Icon
                                        size={ICON_SIZE.XXXX_SMALL}
                                        src={icon}
                                    />
                                )}
                            </button>
                        </StyledMenuItem>
                    )
                })}
            </StyledMenu>
        </StyledHeader>
    )
}

export { Header }
