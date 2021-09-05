import React from 'react'
import { StyledLogo } from './style'
import { Icon, ICON_SIZE } from '../Icon'
import logo from '../../Components/Logo/wolf.svg'
import { useHistory } from 'react-router-dom'
import { ROUTES } from '../../services/route'

const Logo = () => {
    const history = useHistory()

    return (
        <StyledLogo onClick={() => history.push(ROUTES.HOME_PAGE)}>
            <Icon size={ICON_SIZE.MEDIUM} src={logo} />
            <h2>Bjarki</h2>
        </StyledLogo>
    )
}

export { Logo }
