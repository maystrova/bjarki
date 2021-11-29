import React from 'react'
import { useHistory } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { LOGO_COLOR, StyledLogo } from './style'
import { StyledOrangeLine } from 'Components/AdditionalDiscoverInfo/style'

import whiteLogo from './wolf.svg'
import blackLogo from './bjarki-icon.svg'
import { ROUTES } from '../../services/route'

export enum LOGO_TYPE {
    HEADER = 'HeaderLogo',
    FOOTER = 'FooterLogo',
}

interface LogoProps {
    title: string
    type: LOGO_TYPE
    color: LOGO_COLOR
}

const Logo = ({ title, type, color }: LogoProps) => {
    const history = useHistory()
    const icon = color === LOGO_COLOR.WHITE ? whiteLogo : blackLogo
    const fontSize = type === LOGO_TYPE.HEADER ? '23px' : '12px'

    const onLogoClicked = () => {
        type === LOGO_TYPE.HEADER
            ? history.push(ROUTES.HOME_PAGE)
            : scroll.scrollToTop()
    }

    return (
        <div>
            {type === LOGO_TYPE.FOOTER && (
                <StyledOrangeLine style={{ marginBottom: '25px' }}>
                    ––
                </StyledOrangeLine>
            )}
            <StyledLogo color={color} onClick={onLogoClicked}>
                <Icon size={ICON_SIZE.MEDIUM} src={icon} />
                <div
                    style={{
                        fontSize: fontSize,
                    }}
                >
                    {title}
                </div>
            </StyledLogo>
        </div>
    )
}

export { Logo }
