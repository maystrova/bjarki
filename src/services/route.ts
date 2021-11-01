export type RouteType = {
    title: string
    path: string
}

const ROUTES = {
    HOME_PAGE: '/city/:alias',
    DISCOVER_PAGE: '/discover',
    FLIGHT_PAGE: '/flight',
}

export { ROUTES }
