import React from 'react'

import { StyledFooterMenu } from './style'

interface FooterMenuProps {
    children: React.ReactChild
}

const FooterMenu = ({ children }: FooterMenuProps) => {
    return <StyledFooterMenu>{children}</StyledFooterMenu>
}

export { FooterMenu }
