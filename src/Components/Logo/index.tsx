import React from 'react'
import { useHistory } from 'react-router-dom'

import { ROUTES } from 'services/route'

import { Icon, ICON_SIZE } from 'Components/Icon'

import { StyledLogo } from './style'
import { StyledOrangeLine } from 'Components/AdditionalDiscoverInfo/style'

import logo from 'Components/Logo/wolf.svg'

interface LogoProps {
    title: string
    type: 'HeaderLogo' | 'FooterLogo'
}

const Logo = ({ title, type }: LogoProps) => {
    const history = useHistory()

    return (
        <div>
            {type === 'FooterLogo' && (
                <StyledOrangeLine style={{ marginBottom: '25px' }}>
                    ––
                </StyledOrangeLine>
            )}
            <StyledLogo onClick={() => history.push(ROUTES.HOME_PAGE)}>
                <Icon size={ICON_SIZE.MEDIUM} src={logo} />
                <div
                    style={{
                        fontSize: type === 'HeaderLogo' ? '23px' : '12px',
                    }}
                >
                    {title}
                </div>
            </StyledLogo>
        </div>
    )
}

export { Logo }
