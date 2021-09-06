export enum COUNTRIES {
    SWITZERLAND = 'Switzerland',
    CHINA = 'China',
    LAOS = 'Laos',
    ICELAND = 'Iceland',
    UNITED_STATES = 'United States',
    ITALY = 'Italy',
    JAPAN = 'Japan',
    CURACAO = 'Curacao',
    VIETNAM = 'Vietnam',
    GREECE = 'Greece',
    TANZANIA = 'Tanzania',
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
}
