import React from 'react'
import { useHistory } from 'react-router-dom'

import { MenuType } from 'services/type'
import { ROUTES } from 'services/route'

import { StyledMenu, StyledMenuItem } from './style'

export enum MENU_COLOR {
    WHITE = '#fff',
    BLACK = '#000',
}

interface HeaderMenuProps {
    color: MENU_COLOR
}

const HeaderMenu = ({ color }: HeaderMenuProps) => {
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

    return (
        <StyledMenu style={{ color: color }}>
            {HEADER_MENU.map(item => {
                return (
                    <StyledMenuItem key={item.title}>
                        <button onClick={item.onClick}>{item.title}</button>
                    </StyledMenuItem>
                )
            })}
        </StyledMenu>
    )
}

export { HeaderMenu }
