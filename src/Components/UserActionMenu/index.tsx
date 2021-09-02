import React from 'react'

import { MenuType } from 'services/type'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledMenu, StyledMenuItem } from 'Components/HeaderMenu/style'

import arrow from 'Components/HeaderMenu/pics/arrow.svg'

const USER_ACTION_MENU: MenuType[] = [
    { title: 'Eng', icon: arrow },
    { title: 'Sign Up' },
    { title: 'Log In' },
]

interface UserActionMenuProps {
    switchLang: (title: string) => void
    signUp: (title: string) => void
    logIn: (title: string) => void
}

const UserActionMenu = ({ switchLang, signUp, logIn }: UserActionMenuProps) => {
    const onMenuItemClick = (title: string) => {
        switch (title) {
            case 'Eng':
                return switchLang
            case 'Sign Up':
                return signUp
            case 'Log In':
                return logIn
            default:
                return undefined
        }
    }
    return (
        <StyledMenu>
            {USER_ACTION_MENU.map(item => {
                return (
                    <StyledMenuItem key={item.title}>
                        <button onClick={() => onMenuItemClick(item.title)}>
                            {item.title}
                            {item.icon && (
                                <Icon
                                    size={ICON_SIZE.XXX_SMALL}
                                    src={item.icon}
                                />
                            )}
                        </button>
                    </StyledMenuItem>
                )
            })}
        </StyledMenu>
    )
}

export { UserActionMenu }
