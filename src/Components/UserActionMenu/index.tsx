import React from 'react'
import { MenuType } from '../../services/type'

const USER_ACTION_MENU: MenuType[] = [
    { title: 'Eng', icon: '' },
    { title: 'Sign Up' },
    { title: 'Log In' },
]

const UserActionMenu = () => {
    return (
        <div>
            {USER_ACTION_MENU.map(item => {
                return (
                    <a href=''>
                        {item.title}
                        {item.icon}
                    </a>
                )
            })}
        </div>
    )
}

export { UserActionMenu }
