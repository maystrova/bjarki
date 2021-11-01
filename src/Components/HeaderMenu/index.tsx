import React from 'react'

import { MenuType } from 'services/type'

import { StyledMenu, StyledMenuItem } from './style'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../services/route'

const HeaderMenu = () => {
    const history = useHistory()

    const HEADER_MENU: MenuType[] = [
        { title: 'Deal', onClick: () => {} },
        { title: 'Flight', onClick: () => {} },
        {
            title: 'Discovers',
            onClick: () => history.push(ROUTES.DISCOVER_PAGE),
        },
        { title: 'News', onClick: () => {} },
    ]

    return (
        <StyledMenu>
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
