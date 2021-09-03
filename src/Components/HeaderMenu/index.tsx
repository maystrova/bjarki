import React from 'react'

import { MenuType } from 'services/type'

import { StyledMenu, StyledMenuItem } from './style'

interface HeaderMenuProps {
    onDealClick: () => void
    onFlightClick: () => void
    onDiscoversClick: () => void
    onNewsClick: () => void
}

const HeaderMenu = ({
    onDealClick,
    onNewsClick,
    onFlightClick,
    onDiscoversClick,
}: HeaderMenuProps) => {
    const HEADER_MENU: MenuType[] = [
        { title: 'Deal', onClick: onDealClick },
        { title: 'Flight', onClick: onFlightClick },
        { title: 'Discovers', onClick: onDiscoversClick },
        { title: 'News', onClick: onNewsClick },
    ]

    return (
        <StyledMenu>
            {HEADER_MENU.map(item => {
                return (
                    <StyledMenuItem key={item.title}>
                        <button>{item.title}</button>
                    </StyledMenuItem>
                )
            })}
        </StyledMenu>
    )
}

export { HeaderMenu }
