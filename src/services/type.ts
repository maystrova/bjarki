export enum COUNTRIES {
    SWITZERLAND = 'Switzerland',
    CHINA = 'China',
    LAOS = 'Laos',
    ICELAND = 'Iceland',
    UNITED_STATES = 'United States',
    ITALY = 'Italy',
    JAPAN = 'Japan',
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
}

export type MenuType = {
    title: string
    icon?: string
}

export type DestinationType = {
    city: CITIES
    country: COUNTRIES
    weather: string
    alias: string
}
