import React from 'react'
import { StyledLogo } from './style'
import { Icon, ICON_SIZE } from '../Icon'
import logo from 'Components/Logo/wolf.svg'

const Logo = () => {
    return (
        <StyledLogo>
            <Icon size={ICON_SIZE.SMALL} src={logo} />
            <h1>Bjarki</h1>
        </StyledLogo>
    )
}

export { Logo }
