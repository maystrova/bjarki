import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { ROUTES } from 'services/route'

import { Logo, LOGO_TYPE } from 'Components/Logo'
import { FooterMenu } from 'Components/FooterMenu'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledFooter, StyledSocialMedia } from './style'

import instaIcon from 'Components/Footer/pics/insta.svg'
import fbIcon from 'Components/Footer/pics/fb.svg'
import twitterIcon from 'Components/Footer/pics/twitter.svg'
import googleIcon from 'Components/Footer/pics/google-icon.svg'
import { LOGO_COLOR } from 'Components/Logo/style'
import { tr } from '../../services/language'
import { BjarkiContext } from '../../context/storeContext'

interface FooterProps {}

interface FooterMenuType {
    title: string
    onClick: () => void
}

interface SocialMediaType {
    icon: string
    href: string
}

const Footer = ({}: FooterProps) => {
    const { store } = useContext(BjarkiContext)

    const history = useHistory()

    const FOOTER_MENU: FooterMenuType[] = [
        { title: tr('about', store.currentLanguage), onClick: () => {} },
        { title: tr('blog', store.currentLanguage), onClick: () => {} },
        { title: tr('help', store.currentLanguage), onClick: () => {} },
        { title: tr('contact', store.currentLanguage), onClick: () => {} },
        { title: tr('deal', store.currentLanguage), onClick: () => {} },
        {
            title: tr('flight', store.currentLanguage),
            onClick: () => history.push(ROUTES.FLIGHT_PAGE),
        },
        { title: tr('tour', store.currentLanguage), onClick: () => {} },
        { title: tr('hotel', store.currentLanguage), onClick: () => {} },
        {
            title: tr('terms-and-conditions', store.currentLanguage),
            onClick: () => {},
        },
        { title: tr('faqs', store.currentLanguage), onClick: () => {} },
        { title: tr('sitemap', store.currentLanguage), onClick: () => {} },
    ]

    const SOCIAL_MEDIA: SocialMediaType[] = [
        { icon: fbIcon, href: 'https://www.facebook.com/maystrovakate/' },
        { icon: twitterIcon, href: 'https://twitter.com' },
        { icon: googleIcon, href: 'https://www.google.com' },
        { icon: instaIcon, href: 'https://www.instagram.com/maystrova_kate/' },
    ]

    const logoTitle: string = '© 2020, Bjarki'
    return (
        <StyledFooter>
            <Logo
                title={logoTitle}
                type={LOGO_TYPE.FOOTER}
                color={LOGO_COLOR.WHITE}
            />
            <FooterMenu
                children={
                    <ul>
                        {FOOTER_MENU.map(item => {
                            return (
                                <li key={item.title}>
                                    <Button
                                        onClick={item.onClick}
                                        type={BUTTON_TYPE.MENU_ITEM}
                                        title={item.title}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                }
            />
            <StyledSocialMedia>
                {SOCIAL_MEDIA.map(item => {
                    return (
                        <a href={item.href} target='_blank' key={item.href}>
                            <Icon size={ICON_SIZE.SMALL} src={item.icon} />
                        </a>
                    )
                })}
            </StyledSocialMedia>
        </StyledFooter>
    )
}

export { Footer }
