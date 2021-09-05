import React from 'react'
import { StyledButton } from './style'

export enum BUTTON_WIDTH {
    BIG = '100%',
}

export enum BUTTON_HEIGHT {
    MEDIUM = '48px',
}

export enum BUTTON_TYPE {
    PRIMARY = 'Primary',
    ONLY_TEXT = 'Only_text',
    UNDERLINED = 'Underlined',
}

interface ButtonProps {
    width?: BUTTON_WIDTH
    height?: BUTTON_HEIGHT
    borderRadius?: string
    title: string
    onClick: () => void
    type: BUTTON_TYPE
}

const Button = ({
    width,
    title,
    onClick,
    type,
    height,
    borderRadius,
}: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            selfType={type}
            style={{ width, height, borderRadius }}
        >
            {title}
        </StyledButton>
    )
}

export { Button }
