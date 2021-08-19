import React from 'react'
import { Icon, ICON_SIZE } from '../Icon'
import further from '../DestinationInfo/pics/arrow-right.svg'

interface DestinationInfoProps {
    weather: string
    country: string
    city: string
}

const DestinationInfo = ({ weather, city, country }: DestinationInfoProps) => {
    return (
        <div>
            <div>{weather}</div>
            <div>{country}</div>
            <div>{city}</div>
            <div>
                <a href=''>
                    <span>Discover</span>
                    <Icon size={ICON_SIZE.X_SMALL} src={further} />
                </a>
            </div>
        </div>
    )
}

export { DestinationInfo }
