export type RouteType = {
    title: string
    path: string
}

const ROUTES = {
    HOME_PAGE: '/city/:alias',
    DISCOVER_PAGE: '/discover',
    FLIGHT_PAGE: '/flight',
    NEWS_PAGE: '/news',
    HOTEL_LIST_PAGE: '/hotel-list',
    ADVENTURES_LIST_PAGE: '/adventures-list',
}

export { ROUTES }
