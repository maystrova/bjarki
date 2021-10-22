import React from 'react'

import { Logo } from 'Components/Logo'

import { StyledFooter } from './style'

interface FooterProps {}

const Footer = ({}: FooterProps) => {
    return (
        <StyledFooter>
            <div>
                <Logo title={'© 2020, Bjarki'} type={'FooterLogo'} />
            </div>
        </StyledFooter>
    )
}

export { Footer }
