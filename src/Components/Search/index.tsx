import React from 'react'
import {
    StyledSearch,
    StyledSearchAction,
    StyledSearchInput,
    StyledSearchItem,
    StyledSearchItemTitle,
} from './style'

import calendarIcon from 'Components/Search/pics/calendar-icon.svg'
import locationIcon from 'Components/Search/pics/location-icon.svg'
import chooseNumberIcon from 'Components/Search/pics/search-choose-number.svg'
import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'

interface SearchProps {
    onDestinationSearchTape: (event: any) => void
    value: string
}

const Search = ({ onDestinationSearchTape, value }: SearchProps) => {
    return (
        <StyledSearch>
            <StyledSearchAction>
                <StyledSearchItem>
                    <StyledSearchItemTitle>Destination</StyledSearchItemTitle>
                    <StyledSearchInput>
                        <Icon size={ICON_SIZE.X_SMALL} src={locationIcon} />
                        <input
                            type='text'
                            placeholder={'Where are you going?'}
                            onChange={onDestinationSearchTape}
                            value={value}
                        />
                    </StyledSearchInput>
                </StyledSearchItem>
            </StyledSearchAction>
            <StyledSearchAction>
                <StyledSearchItem>
                    <StyledSearchItemTitle>
                        Check in - Check out
                    </StyledSearchItemTitle>
                    <StyledSearchInput>
                        {/*<Icon size={ICON_SIZE.X_SMALL} src={calendarIcon} />*/}
                        <input type='date' />
                        <input type='date' />
                    </StyledSearchInput>
                </StyledSearchItem>
            </StyledSearchAction>
            <StyledSearchAction>
                <StyledSearchItem>
                    <StyledSearchItemTitle>Travellers</StyledSearchItemTitle>
                    <StyledSearchInput>
                        <input type='text' placeholder={'Number of people'} />
                        <Icon size={ICON_SIZE.X_SMALL} src={chooseNumberIcon} />
                    </StyledSearchInput>
                </StyledSearchItem>
            </StyledSearchAction>
            <Button
                title={'Search'}
                onClick={() => {}}
                type={BUTTON_TYPE.PRIMARY}
            />
        </StyledSearch>
    )
}

export { Search }
