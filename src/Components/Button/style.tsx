import styled, { css } from 'styled-components'
import { BUTTON_TYPE } from './index'

export interface StyledButtonProps {
    selfType: BUTTON_TYPE
}

const StyledButton = styled.button`
    padding-right: 0;

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.PRIMARY &&
        css`
            color: #ffffff;
            border: none;
            background-color: rgba(252, 69, 0, 1);
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 700;

            &:hover {
                opacity: 80%;
            }
        `}

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.ONLY_TEXT &&
        css`
            color: rgba(56, 56, 56, 1);
            border: none;
            background: transparent;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            & img {
                margin-right: 10px;
            }

            &:hover {
                color: rgba(252, 69, 0, 1);
            }
        `}

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.UNDERLINED &&
        css`
            color: rgba(252, 69, 0, 1);
            border: none;
            background: transparent;
            font-size: 14px;
            border-bottom: 1px solid rgba(252, 69, 0, 1);
            padding: 3px;
        `}

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.ROUND &&
        css`
            border: none;
            width: 42px;
            height: 42px;
            padding: 10px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
        `}
`

export { StyledButton }
