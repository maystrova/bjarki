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
    {
        country: COUNTRIES.BARBADOS,
        city: [{ name: CITIES.BRIDGETOWN, alias: 'bridgetown' }],
    },
    {
        country: COUNTRIES.ICELAND,
        city: [{ name: CITIES.GODAFOSS, alias: 'godafoss' }],
    },
    {
        country: COUNTRIES.VIETNAM,
        city: [{ name: CITIES.HOI_AN, alias: 'hoi-an' }],
    },
    { country: COUNTRIES.EGYPT, city: [{ name: CITIES.GIZA, alias: 'giza' }] },
]

export { DESTINATIONS }
