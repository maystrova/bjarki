import React from 'react'
import { StyledButton } from './style'

export enum BUTTON_WIDTH {}

export enum BUTTON_TYPE {
    PRIMARY = 'Primary',
}

interface ButtonProps {
    width?: BUTTON_WIDTH
    title: string
    onClick: () => void
    type: BUTTON_TYPE
}

const Button = ({ width, title, onClick, type }: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            selfType={type}
            style={{ width: width }}
        >
            {title}
        </StyledButton>
    )
}

export { Button }
