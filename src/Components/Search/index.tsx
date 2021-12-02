import React, { useContext } from 'react'

import { BjarkiContext } from 'context/storeContext'

import { tr } from 'services/language'

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
    const { store } = useContext(BjarkiContext)

    const searchDestinationTitle = tr('destination', store.currentLanguage)
    const searchDateTitle = tr('check-in-check-out', store.currentLanguage)
    const searchTravellersTitle = tr('travellers', store.currentLanguage)
    const searchTitle = tr('search', store.currentLanguage)

    return (
        <StyledSearch>
            <StyledSearchAction>
                <StyledSearchItem>
                    <StyledSearchItemTitle>
                        {searchDestinationTitle}
                    </StyledSearchItemTitle>
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
                        {searchDateTitle}
                    </StyledSearchItemTitle>
                    <StyledSearchInput>
                        <StyledSearchDate type='date' />
                        <StyledSearchDate type='date' />
                    </StyledSearchInput>
                </StyledSearchItem>
            </StyledSearchAction>
            <StyledSearchAction>
                <StyledSearchItem>
                    <StyledSearchItemTitle>
                        {searchTravellersTitle}
                    </StyledSearchItemTitle>
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
                title={searchTitle}
                onClick={onSearchButtonClicked}
                type={BUTTON_TYPE.PRIMARY}
            />
        </StyledSearch>
    )
}

export { Search }
