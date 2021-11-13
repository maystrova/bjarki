import {
    CITIES,
    COUNTRIES,
    DestinationType,
    DESTINATION_ALIAS,
} from 'services/type'

const DESTINATIONS: DestinationType[] = [
    {
        country: COUNTRIES.SWITZERLAND,
        city: [
            { name: CITIES.MONTE_ROSA, alias: DESTINATION_ALIAS.MONTE_ROSA },
        ],
    },
    {
        country: COUNTRIES.CHINA,
        city: [{ name: CITIES.CHONGQING, alias: DESTINATION_ALIAS.CHONGQING }],
    },
    {
        country: COUNTRIES.ITALY,
        city: [{ name: CITIES.VENICE, alias: DESTINATION_ALIAS.VENICE }],
    },
    {
        country: COUNTRIES.ICELAND,
        city: [
            { name: CITIES.REYNISFJARA, alias: DESTINATION_ALIAS.REYNISFJARA },
        ],
    },
    {
        country: COUNTRIES.JAPAN,
        city: [{ name: CITIES.TOKYO, alias: DESTINATION_ALIAS.TOKYO }],
    },
    {
        country: COUNTRIES.LAOS,
        city: [
            {
                name: CITIES.LUANG_PRABANG,
                alias: DESTINATION_ALIAS.LUANG_PRABANG,
            },
        ],
    },
    {
        country: COUNTRIES.UNITED_STATES,
        city: [
            { name: CITIES.NEW_YORK, alias: DESTINATION_ALIAS.NEW_YORK },
            {
                name: CITIES.SAN_FRANCISCO,
                alias: DESTINATION_ALIAS.SAN_FRANCISCO,
            },
            { name: CITIES.YOSEMITE, alias: DESTINATION_ALIAS.YOSEMITE },
        ],
    },
    {
        country: COUNTRIES.BARBADOS,
        city: [
            { name: CITIES.BRIDGETOWN, alias: DESTINATION_ALIAS.BRIDGETOWN },
        ],
    },
    {
        country: COUNTRIES.ICELAND,
        city: [{ name: CITIES.GODAFOSS, alias: DESTINATION_ALIAS.GODAFOSS }],
    },
    {
        country: COUNTRIES.VIETNAM,
        city: [{ name: CITIES.HOI_AN, alias: DESTINATION_ALIAS.HOI_AN }],
    },
    {
        country: COUNTRIES.EGYPT,
        city: [{ name: CITIES.GIZA, alias: DESTINATION_ALIAS.GIZA }],
    },
]

export { DESTINATIONS }
