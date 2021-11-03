import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'

import {
    StyledSearch,
    StyledSearchAction,
    StyledSearchDate,
    StyledSearchInput,
    StyledSearchItem,
    StyledSearchItemTitle,
} from './style'

import locationIcon from 'Components/Search/pics/location-icon.svg'

interface SearchProps {
    onDestinationSearchTape: (event: any) => void
    value: string
    list: string
    datalist: React.ReactChild
    onSearchButtonClicked: () => void
}

const Search = ({
    onDestinationSearchTape,
    value,
    list,
    datalist,
    onSearchButtonClicked,
}: SearchProps) => {
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
                            autoComplete={'on'}
                            list={list}
                        />
                        <datalist id={'destinations'}>{datalist}</datalist>
                    </StyledSearchInput>
                </StyledSearchItem>
            </StyledSearchAction>
            <StyledSearchAction>
                <StyledSearchItem>
                    <StyledSearchItemTitle>
                        Check in - Check out
                    </StyledSearchItemTitle>
                    <StyledSearchInput>
                        <StyledSearchDate type='date' />
                        <StyledSearchDate type='date' />
                    </StyledSearchInput>
                </StyledSearchItem>
            </StyledSearchAction>
            <StyledSearchAction>
                <StyledSearchItem>
                    <StyledSearchItemTitle>Travellers</StyledSearchItemTitle>
                    <StyledSearchInput>
                        <input
                            type='number'
                            min='1'
                            placeholder={'Number of people'}
                        />
                    </StyledSearchInput>
                </StyledSearchItem>
            </StyledSearchAction>
            <Button
                title={'Search'}
                onClick={onSearchButtonClicked}
                type={BUTTON_TYPE.PRIMARY}
            />
        </StyledSearch>
    )
}

export { Search }
