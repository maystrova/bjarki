import styled, { css } from 'styled-components'
import { BUTTON_TYPE } from './index'

export interface StyledButtonProps {
    selfType: BUTTON_TYPE
}

const StyledButton = styled.button`
    &:hover {
        opacity: 80%;
    }

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.PRIMARY &&
        css`
            color: #ffffff;
            border: none;
            background-color: rgba(252, 69, 0, 1);
            text-transform: uppercase;
        `}
`

export { StyledButton }
