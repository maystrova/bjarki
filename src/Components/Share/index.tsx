import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledShareButton,
    StyledShareTitle,
    StyledShareTitleWrapper,
} from './style'

import fb from 'Pages/NewsPage/pics/fb.svg'
import tw from 'Pages/NewsPage/pics/tw.svg'
import google from 'Pages/NewsPage/pics/google.svg'

interface ShareProps {}

interface ShareType {
    icon: string
    onClick: () => void
}

const Share = ({}: ShareProps) => {
    const SHARE_BUTTONS: ShareType[] = [
        { icon: fb, onClick: () => {} },
        { icon: tw, onClick: () => {} },
        { icon: google, onClick: () => {} },
    ]
    return (
        <div>
            {SHARE_BUTTONS.map(button => {
                return (
                    <StyledShareButton onClick={button.onClick}>
                        <Icon size={ICON_SIZE.X_SMALL} src={button.icon} />
                    </StyledShareButton>
                )
            })}
            <StyledShareTitleWrapper>
                <StyledShareTitle>Share</StyledShareTitle>
            </StyledShareTitleWrapper>
        </div>
    )
}

export { Share }
