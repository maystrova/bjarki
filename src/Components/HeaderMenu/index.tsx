import React from 'react'
import { StyledMenu, StyledMenuItem } from './style'
import { MenuType } from '../../services/type'

const HEADER_MENU: MenuType[] = [
    { title: 'Deal' },
    { title: 'Flight' },
    { title: 'Discovers' },
    { title: 'News' },
]

const HeaderMenu = () => {
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
