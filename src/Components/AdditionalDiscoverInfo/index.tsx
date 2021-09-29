import React from 'react'

import { StyledAdditionalDiscoverInfo, StyledOrangeLine } from './style'

interface AdditionalDiscoverInfoProps {
    title: string
    description?: string
}

const AdditionalDiscoverInfo = ({
    title,
    description,
}: AdditionalDiscoverInfoProps) => {
    return (
        <StyledAdditionalDiscoverInfo>
            <StyledOrangeLine>––</StyledOrangeLine>
            <h2>{title}</h2>
            <span>{description}</span>
        </StyledAdditionalDiscoverInfo>
    )
}

export { AdditionalDiscoverInfo }
