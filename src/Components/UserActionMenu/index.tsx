import React from 'react'

import { MenuType } from 'services/type'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledMenu, StyledMenuItem } from 'Components/HeaderMenu/style'

import arrow from 'Components/HeaderMenu/pics/arrow.svg'

interface UserActionMenuProps {
    switchLang: () => void
    signUp: () => void
    logIn: () => void
}

const UserActionMenu = ({ switchLang, signUp, logIn }: UserActionMenuProps) => {
    const USER_ACTION_MENU: MenuType[] = [
        { title: 'Eng', icon: arrow, onClick: switchLang },
        { title: 'Sign Up', onClick: signUp },
        { title: 'Log In', onClick: logIn },
    ]
    return (
        <StyledMenu>
            {USER_ACTION_MENU.map(item => {
                return (
                    <StyledMenuItem key={item.title}>
                        <button onClick={item.onClick}>
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
