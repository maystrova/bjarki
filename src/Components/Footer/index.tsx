import React from 'react'
import { useHistory } from 'react-router-dom'

import { ROUTES } from 'services/route'

import { Logo } from 'Components/Logo'
import { FooterMenu } from 'Components/FooterMenu'
import { Button, BUTTON_TYPE } from 'Components/Button'
import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledFooter, StyledSocialMedia } from './style'

import instaIcon from 'Components/Footer/pics/insta.svg'
import fbIcon from 'Components/Footer/pics/fb.svg'
import twitterIcon from 'Components/Footer/pics/twitter.svg'
import googleIcon from 'Components/Footer/pics/google-icon.svg'

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
    const history = useHistory()

    const FOOTER_MENU: FooterMenuType[] = [
        { title: 'About', onClick: () => {} },
        { title: 'Blog', onClick: () => {} },
        { title: 'Help', onClick: () => {} },
        { title: 'Contact', onClick: () => {} },
        { title: 'Deal', onClick: () => {} },
        { title: 'Flight', onClick: () => history.push(ROUTES.FLIGHT_PAGE) },
        { title: 'Tour', onClick: () => {} },
        { title: 'Hotel', onClick: () => {} },
        { title: 'Terms & Conditions', onClick: () => {} },
        { title: 'FAQs', onClick: () => {} },
        { title: 'Sitemap', onClick: () => {} },
    ]

    const SOCIAL_MEDIA: SocialMediaType[] = [
        { icon: fbIcon, href: 'https://www.facebook.com/maystrovakate/' },
        { icon: twitterIcon, href: 'https://twitter.com' },
        { icon: googleIcon, href: 'https://www.google.com' },
        { icon: instaIcon, href: 'https://www.instagram.com/maystrova_kate/' },
    ]
    return (
        <StyledFooter>
            <Logo title={'© 2020, Bjarki'} type={'FooterLogo'} />
            <FooterMenu
                children={
                    <ul>
                        {FOOTER_MENU.map(item => {
                            return (
                                <li>
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
                        <a href={item.href} target='_blank'>
                            <Icon size={ICON_SIZE.SMALL} src={item.icon} />
                        </a>
                    )
                })}
            </StyledSocialMedia>
        </StyledFooter>
    )
}

export { Footer }
