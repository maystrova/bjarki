import styled from 'styled-components'

const StyledUser = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const StyledUserAvatarWrapper = styled.div``

const StyledUserAvatar = styled.img`
    width: 32px;
    border-radius: 50%;
    margin-right: 8px;
`

const StyledUserInfo = styled.div`
    line-height: 1.5;
`

const StyledUserName = styled.div`
    font-size: 14px;
    color: rgba(56, 56, 56, 1);
`

const StyledUserEmail = styled.div`
    font-size: 14px;
    color: rgba(100, 100, 100, 1);
`

const StyledLikeIcon = styled.div`
    margin-right: 6px;
`

const StyledLikes = styled.div`
    display: flex;
    align-items: center;
`

export {
    StyledUser,
    StyledUserAvatar,
    StyledUserAvatarWrapper,
    StyledUserName,
    StyledUserEmail,
    StyledUserInfo,
    StyledLikes,
    StyledLikeIcon,
}
