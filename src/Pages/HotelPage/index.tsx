import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BjarkiContext } from 'context/storeContext'
import { HOTEL_TITLE, HOTELS_ALIAS } from 'hotels/hotels'
import { AdventuresType } from 'services/type'

import { StyledHotelPage } from './style'

interface HotelPageProps {}

const HotelPage = ({}: HotelPageProps) => {
    const { store } = useContext(BjarkiContext)

    const [hotel, setHotel] = useState<AdventuresType>({
        title: HOTEL_TITLE.THE_PEARL_PACIFIC,
        alias: HOTELS_ALIAS.THE_PEARL_PACIFIC,
    })

    let params = useParams<{ alias: string }>()

    const getHotelFromStore = () => {
        let currentHotel = store.hotels.find(
            hotel => hotel.alias === params.alias,
        )
        if (currentHotel) {
            setHotel(currentHotel)
        }
    }

    useEffect(() => {
        getHotelFromStore()
    }, [])

    return (
        <StyledHotelPage>
            <h1>{hotel.title}</h1>
        </StyledHotelPage>
    )
}

export { HotelPage }
