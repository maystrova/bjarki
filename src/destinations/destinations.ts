import { CITIES, COUNTRIES, DestinationType } from 'services/type'

const DESTINATIONS: DestinationType[] = [
    {
        country: COUNTRIES.SWITZERLAND,
        city: [{ name: CITIES.MONTE_ROSA, alias: 'monte-rosa' }],
    },
    {
        country: COUNTRIES.CHINA,
        city: [{ name: CITIES.CHONGQING, alias: 'chongqing' }],
    },
    {
        country: COUNTRIES.ITALY,
        city: [{ name: CITIES.VENICE, alias: 'venice' }],
    },
    {
        country: COUNTRIES.ICELAND,
        city: [{ name: CITIES.REYNISFJARA, alias: 'reynisfjara' }],
    },
    {
        country: COUNTRIES.JAPAN,
        city: [{ name: CITIES.TOKYO, alias: 'tokyo' }],
    },
    {
        country: COUNTRIES.LAOS,
        city: [{ name: CITIES.LUANG_PRABANG, alias: 'luang-prabang' }],
    },
    {
        country: COUNTRIES.UNITED_STATES,
        city: [
            { name: CITIES.NEW_YORK, alias: 'new-york' },
            { name: CITIES.SAN_FRANCISCO, alias: 'san-francisco' },
            { name: CITIES.YOSEMITE, alias: 'yosemite' },
        ],
    },
]

export { DESTINATIONS }
