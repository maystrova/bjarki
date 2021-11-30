import styled from 'styled-components'

const StyledShareTitle = styled.div`
    transform: rotate(90deg);
    font-size: 14px;
    color: rgba(100, 100, 100, 1);
`

const StyledShareTitleWrapper = styled.div`
    margin-top: 20px;
`

const StyledShareButton = styled.button`
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    outline: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`

export { StyledShareTitleWrapper, StyledShareButton, StyledShareTitle }
