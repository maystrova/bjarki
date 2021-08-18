import React from 'react'
import { StyledMenu } from './style'
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
                return <a href=''>{item.title}</a>
            })}
        </StyledMenu>
    )
}

export { HeaderMenu }
