import React from 'react'
import { StyledIcon } from './style'

export enum ICON_SIZE {
    X_SMALL = 'x_small',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface IconProps {
    size: ICON_SIZE
    alt?: string
    src: string
}

const Icon = ({ size, alt = 'icon', src }: IconProps) => {
    return <StyledIcon size={size} alt={alt} src={src} />
}

export { Icon }
