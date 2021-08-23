import React from 'react'
import { MenuType } from '../../services/type'
import { StyledMenu, StyledMenuItem } from '../HeaderMenu/style'
import arrow from '../HeaderMenu/pics/arrow.svg'
import { Icon, ICON_SIZE } from '../Icon'

const USER_ACTION_MENU: MenuType[] = [
    { title: 'Eng', icon: arrow },
    { title: 'Sign Up' },
    { title: 'Log In' },
]

const UserActionMenu = () => {
    return (
        <StyledMenu>
            {USER_ACTION_MENU.map(item => {
                return (
                    <StyledMenuItem>
                        <a href=''>
                            {item.title}
                            {item.icon && (
                                <Icon
                                    size={ICON_SIZE.XXX_SMALL}
                                    src={item.icon}
                                />
                            )}
                        </a>
                    </StyledMenuItem>
                )
            })}
        </StyledMenu>
    )
}

export { UserActionMenu }
