import React from 'react'

import { Logo } from 'Components/Logo'

import { FooterMenu } from '../FooterMenu'

import { StyledFooter } from './style'
import { Button, BUTTON_TYPE } from '../Button'

interface FooterProps {}

interface FooterMenuType {
    title: string
    onClick: () => void
}

const FOOTER_MENUS: FooterMenuType[] = [
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

const Footer = ({}: FooterProps) => {
    return (
        <StyledFooter>
            <Logo title={'© 2020, Bjarki'} type={'FooterLogo'} />
            <FooterMenu
                children={
                    <ul>
                        {FOOTER_MENUS.map(item => {
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
        </StyledFooter>
    )
}

export { Footer }
