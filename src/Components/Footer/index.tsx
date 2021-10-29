import React from 'react'

import { Logo } from 'Components/Logo'
import { FooterMenu } from '../FooterMenu'
import { Button, BUTTON_TYPE } from 'Components/Button'

import { StyledFooter, StyledSocialMedia } from './style'

import instaIcon from 'Components/Footer/pics/insta.svg'
import fbIcon from 'Components/Footer/pics/fb.svg'
import twitterIcon from 'Components/Footer/pics/twitter.svg'
import googleIcon from 'Components/Footer/pics/google-icon.svg'
import { Icon, ICON_SIZE } from '../Icon'

interface FooterProps {}

interface FooterMenuType {
    title: string
    onClick: () => void
}

interface SocialMediaType {
    icon: string
    onClick: () => void
}

const FOOTER_MENU: FooterMenuType[] = [
    { title: 'About', onClick: () => {} },
    { title: 'Blog', onClick: () => {} },
    { title: 'Help', onClick: () => {} },
    { title: 'Contact', onClick: () => {} },
    { title: 'Deal', onClick: () => {} },
    { title: 'Flight', onClick: () => {} },
    { title: 'Tour', onClick: () => {} },
    { title: 'Hotel', onClick: () => {} },
    { title: 'Terms & Conditions', onClick: () => {} },
    { title: 'FAQs', onClick: () => {} },
    { title: 'Sitemap', onClick: () => {} },
]

const SOCIAL_MEDIA: SocialMediaType[] = [
    { icon: fbIcon, onClick: () => {} },
    { icon: twitterIcon, onClick: () => {} },
    { icon: googleIcon, onClick: () => {} },
    { icon: instaIcon, onClick: () => {} },
]

const Footer = ({}: FooterProps) => {
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
                        <Button
                            onClick={item.onClick}
                            type={BUTTON_TYPE.SOCIAL_MEDIA}
                            children={
                                <Icon size={ICON_SIZE.SMALL} src={item.icon} />
                            }
                        />
                    )
                })}
            </StyledSocialMedia>
        </StyledFooter>
    )
}

export { Footer }
