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
}

export type MenuType = {
    title: string
    icon?: string
    onClick: () => void
}

export type DestinationType = {
    city: CITIES
    country: COUNTRIES
    alias: string
    number?: number
}
