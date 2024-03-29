import styled, { css } from 'styled-components'
import { BUTTON_TYPE } from './index'

export interface StyledButtonProps {
    selfType: BUTTON_TYPE
}

const StyledButton = styled.button`
    padding: 0;
    border: none;

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.PRIMARY &&
        css`
            color: #ffffff;
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
            background: transparent;
            font-size: 14px;
            border-bottom: 1px solid rgba(252, 69, 0, 1);
            padding: 3px;
        `}


    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.ROUND &&
        css`
            width: 42px;
            height: 42px;
            padding: 10px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
        `}

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.MENU_ITEM &&
        css`
            color: #fff;
            background: transparent;
            font-size: 14px;
        `}

    ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.ICON &&
        css`
            background: transparent;
        `}
  
  ${(props: StyledButtonProps) =>
        props.selfType === BUTTON_TYPE.DISCOVER &&
        css`
            display: flex;
            background: transparent;
            align-items: center;
            font-size: 16px;
            color: #fff;
            padding: 5px;
            border-bottom: 1.5px solid #fff;
        `}
`

export { StyledButton }
