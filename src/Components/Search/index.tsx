import React from 'react'
import { StyledSearch } from './style'

import calendarIcon from './pics/calendar-icon.svg'
import locationIcon from './pics/location-icon.svg'
import chooseNumberIcon from './pics/search-choose-number.svg'
import { Icon, ICON_SIZE } from '../Icon'

interface SearchProps {}

interface SearchType {
    title: string
    placeholder: string
    inputType: INPUT_TYPE
    icon: string
}

export enum INPUT_TYPE {
    TEXT = 'text',
}

const SEARCH: SearchType[] = [
    {
        title: 'Destination',
        placeholder: 'Where are you going?',
        inputType: INPUT_TYPE.TEXT,
        icon: locationIcon,
    },
    {
        title: 'Check in - Check out',
        placeholder: '',
        icon: calendarIcon,
        inputType: INPUT_TYPE.TEXT,
    },
    {
        title: 'Travellers',
        placeholder: 'Number of people',
        inputType: INPUT_TYPE.TEXT,
        icon: chooseNumberIcon,
    },
]

const Search = ({}: SearchProps) => {
    return (
        <StyledSearch>
            {SEARCH.map(searchItem => {
                return (
                    <div>
                        <div>{searchItem.title}</div>
                        <div>
                            <Icon
                                size={ICON_SIZE.X_SMALL}
                                src={searchItem.icon}
                            />
                            <input
                                type={searchItem.inputType}
                                placeholder={searchItem.placeholder}
                            />
                        </div>
                    </div>
                )
            })}
        </StyledSearch>
    )
}

export { Search }
