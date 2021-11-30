import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledLikeIcon,
    StyledLikes,
    StyledUser,
    StyledUserAvatar,
    StyledUserAvatarWrapper,
    StyledUserEmail,
    StyledUserInfo,
    StyledUserName,
} from './style'

import heart from './pics/heart.svg'

interface UserProps {
    avatar: string
    name: string
    email: string
}

const User = ({ avatar, email, name }: UserProps) => {
    return (
        <div>
            <StyledUser>
                <StyledUserAvatarWrapper>
                    <StyledUserAvatar src={avatar} alt='avatar' />
                </StyledUserAvatarWrapper>
                <StyledUserInfo>
                    <StyledUserName>{name}</StyledUserName>
                    <StyledUserEmail>{email}</StyledUserEmail>
                </StyledUserInfo>
            </StyledUser>
            <StyledLikes>
                <StyledLikeIcon>
                    <Icon size={ICON_SIZE.SMALL} src={heart} />
                </StyledLikeIcon>
                <StyledUserName>23 Likes</StyledUserName>
            </StyledLikes>
        </div>
    )
}

export { User }
