import { Icon, ICON_SIZE } from 'Components/Icon'

import { Logo, LOGO_TYPE } from 'Components/Logo'
import { LOGO_COLOR } from 'Components/Logo/style'
import { ACTION } from 'context/actions'
import { BjarkiContext } from 'context/storeContext'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LANGUAGE, tr } from 'services/language'
import { ROUTES } from 'services/route'

import { MenuType } from 'services/type'

import whiteArrow from './pics/arrow.svg'
import blackArrow from './pics/black-arrow.svg'

import {
    StyledHeader,
    StyledMenu,
    StyledMenuItem,
    StyledMenuSubMenu,
} from './style'

export enum HEADER_TYPE {
    WHITE = 'WHITE',
    BLACK = 'BLACK',
}

interface HeaderProps {
    onLogInClicked: () => void
    headerType: HEADER_TYPE
}

const Header = ({ onLogInClicked, headerType }: HeaderProps) => {
    const logoTitle: string = 'Bjarki'
    const history = useHistory()
    const [isShowSubMenu, setIsShowSubMenu] = useState<boolean>(false)
    const { store, dispatch } = useContext(BjarkiContext)

    const HEADER_MENU: MenuType[] = [
        { title: tr('deal', store.currentLanguage), onClick: () => {} },
        {
            title: tr('flight', store.currentLanguage),
            onClick: () => history.push(ROUTES.FLIGHT_PAGE),
        },
        {
            title: tr('discovers', store.currentLanguage),
            onClick: () => history.push(ROUTES.DISCOVER_PAGE),
        },
        {
            title: tr('news', store.currentLanguage),
            onClick: () => history.push(ROUTES.NEWS_PAGE),
        },
    ]

    const USER_ACTION_MENU: MenuType[] = [
        {
            title: store.currentLanguage.toLocaleUpperCase(),
            icon: headerType === HEADER_TYPE.WHITE ? whiteArrow : blackArrow,
            onClick: () => {
                setIsShowSubMenu(!isShowSubMenu)
            },
            subMenu: [
                {
                    title: 'Ru',
                    onClick: () => {
                        dispatch({
                            action: ACTION.SET_LANGUAGE,
                            data: LANGUAGE.RU,
                        })
                        setIsShowSubMenu(false)
                    },
                },
                {
                    title: 'Es',
                    onClick: () => {
                        dispatch({
                            action: ACTION.SET_LANGUAGE,
                            data: LANGUAGE.ES,
                        })
                        setIsShowSubMenu(false)
                    },
                },
                {
                    title: 'En',
                    onClick: () => {
                        dispatch({
                            action: ACTION.SET_LANGUAGE,
                            data: LANGUAGE.EN,
                        })
                        setIsShowSubMenu(false)
                    },
                },
            ],
        },
        { title: tr('sign-up', store.currentLanguage), onClick: () => {} },
        {
            title: tr('log-in', store.currentLanguage),
            onClick: onLogInClicked,
        },
    ]

    return (
        <StyledHeader>
            <Logo
                type={LOGO_TYPE.HEADER}
                title={logoTitle}
                color={
                    headerType === HEADER_TYPE.WHITE
                        ? LOGO_COLOR.WHITE
                        : LOGO_COLOR.BLACK
                }
            />
            <StyledMenu>
                {HEADER_MENU.map(item => {
                    return (
                        <StyledMenuItem
                            headerType={headerType}
                            key={item.title}
                        >
                            <button onClick={item.onClick}>{item.title}</button>
                        </StyledMenuItem>
                    )
                })}
            </StyledMenu>
            <StyledMenu>
                {USER_ACTION_MENU.map(item => {
                    return (
                        <StyledMenuItem
                            headerType={headerType}
                            key={item.title}
                        >
                            <button onClick={item.onClick}>
                                {item.title}
                                {item.icon && (
                                    <Icon
                                        size={ICON_SIZE.XXXX_SMALL}
                                        src={item.icon}
                                    />
                                )}
                            </button>
                            {item?.subMenu && isShowSubMenu && (
                                <StyledMenuSubMenu>
                                    {item?.subMenu.map(subItem => (
                                        <div key={subItem.title}>
                                            <button onClick={subItem.onClick}>
                                                {subItem.title}
                                            </button>
                                        </div>
                                    ))}
                                </StyledMenuSubMenu>
                            )}
                        </StyledMenuItem>
                    )
                })}
            </StyledMenu>
        </StyledHeader>
    )
}

export { Header }
