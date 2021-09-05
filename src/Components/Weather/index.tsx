import React from 'react'

import { Icon, ICON_SIZE } from '../Icon'

import { StyledWeather } from './style'

export interface WeatherProps {
    icon: string
    temperature: string
    description: string
}

const Weather = ({ icon, temperature, description }: WeatherProps) => {
    return (
        <StyledWeather>
            <Icon size={ICON_SIZE.SMALL} src={icon} />
            <span>{temperature}</span>
            <span>{description}</span>
        </StyledWeather>
    )
}

export { Weather }
