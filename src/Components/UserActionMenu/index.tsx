import React from 'react'

import { MenuType } from 'services/type'

import { ReactComponent as Arrow } from 'Components/HeaderMenu/pics/arrow.svg'

import { StyledMenu, StyledMenuItem } from 'Components/HeaderMenu/style'

interface UserActionMenuProps {
    switchLang: () => void
    signUp: () => void
    logIn: () => void
}

const UserActionMenu = ({ switchLang, signUp, logIn }: UserActionMenuProps) => {
    const USER_ACTION_MENU: MenuType[] = [
        {
            title: 'Eng',
            icon: true,
            onClick: switchLang,
        },
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
                                <Arrow fill={'black'} path={'#000'} />
                            )}
                        </button>
                    </StyledMenuItem>
                )
            })}
        </StyledMenu>
    )
}

export { UserActionMenu }
