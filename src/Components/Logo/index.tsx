import React from 'react'
import { StyledLogo } from './style'
import { Icon, ICON_SIZE } from '../Icon'
import logo from '../../Components/Logo/wolf.svg'

const Logo = () => {
    return (
        <StyledLogo>
            <Icon size={ICON_SIZE.MEDIUM} src={logo} />
            <h2>Bjarki</h2>
        </StyledLogo>
    )
}

export { Logo }
