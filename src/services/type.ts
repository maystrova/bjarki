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
}

export type MenuType = {
    title: string
    icon?: string
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

export type HotelType = {
    title: string
    location: string
    price: number
    image: string
}
