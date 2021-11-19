import React from 'react'

export enum COUNTRIES {
    GREECE = 'Greece',
    TANZANIA = 'Tanzania',
    VIETNAM = 'Vietnam',
    JAPAN = 'Japan',
    SWITZERLAND = 'Switzerland',
    CHINA = 'China',
    LAOS = 'Laos',
    ICELAND = 'Iceland',
    UNITED_STATES = 'United States',
    ITALY = 'Italy',
    CURACAO = 'Curacao',
    BARBADOS = 'Barbados',
    EGYPT = 'Egypt',
}

export enum CITIES {
    MONTE_ROSA = 'Monte Rosa',
    CHONGQING = 'Chongqing',
    LUANG_PRABANG = 'Luang Prabang',
    YOSEMITE = 'Yosemite',
    VENICE = 'Venice',
    REYNISFJARA = 'Reynisfjara',
    TOKYO = 'Tokyo',
    NEW_YORK = 'New York',
    SAN_FRANCISCO = 'San Francisco',
    MALDIVES = 'Maldives',
    RIO_DE_JANEIRO = 'Rio de Janeiro',
    BRIDGETOWN = 'Bridgetown',
    GODAFOSS = 'Godafoss',
    HOI_AN = 'Hoi An',
    GIZA = 'Giza',
}

export enum DESTINATION_ALIAS {
    MONTE_ROSA = 'monte-rosa',
    CHONGQING = 'chongqing',
    LUANG_PRABANG = 'luang-prabang',
    YOSEMITE = 'yosemite',
    VENICE = 'venice',
    REYNISFJARA = 'reynisfjara',
    TOKYO = 'tokyo',
    NEW_YORK = 'new-york',
    SAN_FRANCISCO = 'san-francisco',
    MALDIVES = 'maldives',
    RIO_DE_JANEIRO = 'rio-de-janeiro',
    BRIDGETOWN = 'bridgetown',
    GODAFOSS = 'godafoss',
    HOI_AN = 'hoi-an',
    GIZA = 'giza',
}

export type MenuType = {
    title: string
    icon?: boolean
    onClick: () => void
}

export type CityType = {
    name: CITIES
    alias: string
}

export type DestinationType = {
    city: CityType[]
    country: COUNTRIES
}

export type CityWithCountry = { name: string; country: string }

export type AdventuresType = {
    title: string
    location?: string
    price?: number
    image?: string
    priceDescription?: string
    rating?: number
    reviewsCount?: number
    alias: string
}
