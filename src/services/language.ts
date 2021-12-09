export enum LANGUAGE {
    RU = 'ru',
    EN = 'en',
    ES = 'es',
}

export enum TRANSLATE_KEYS {
    FLIGHT = 'flight',
    DEAL = 'deal',
    DISCOVERS = 'discovers',
    NEWS = 'news',
    SIGN_UP = 'sign-up',
    LOG_IN = 'log-in',
    DISCOVER = 'discover',
    DESTINATION = 'destination',
    CHECK_IN_CHECK_OUT = 'check-in-check-out',
    TRAVELLERS = 'travellers',
    SEARCH = 'search',
    HOMES = 'homes',
    VILLAS = 'villas',
    EXPLORE = 'explore',
    VIEW_ALL = 'view-all',
    PER_NIGHT = 'per-night',
    ABOUT = 'about',
    BLOG = 'blog',
    HELP = 'help',
    CONTACT = 'contact',
    TOUR = 'tour',
    HOTEL = 'hotel',
    TERMS_AND_CONDITIONS = 'terms-and-conditions',
    FAQS = 'faqs',
    SITEMAP = 'sitemap',
    SEARCH_TICKETS = 'search-tickets',
    SIGN_IN_WITH = 'sign-in-with',
    USERNAME = 'username',
    REMEMBER_ME = 'remember-me',
    FORGOT_PASSWORD = 'forgot-password',
    DO_NOT_HAVE_AN_ACCOUNT = 'do-not-have-an-account',
    PASSWORD = 'password',
    SIGN_IN = 'sign-in',
    OR = 'or',
    SHARE = 'share',
    PER_15_DAYS_TOUR = 'per-15-days-tour',
    ADVENTURES = 'adventures',
    HOTELS = 'hotels',
    AVAILABLE = 'available',
    TYPE = 'type',
    PLACES_TO_STAY = 'places-to-stay',
    ADVENTURES_SEARCH = 'adventures-search',
}

type Translate = {
    translate: string
    key: TRANSLATE_KEYS
}

const TRANSLATE_RU: Translate[] = [
    { key: TRANSLATE_KEYS.FLIGHT, translate: 'Авиабилеты' },
    { key: TRANSLATE_KEYS.SHARE, translate: 'Поделиться' },
    { key: TRANSLATE_KEYS.DEAL, translate: 'Условия' },
    { key: TRANSLATE_KEYS.DISCOVERS, translate: 'Направления' },
    { key: TRANSLATE_KEYS.NEWS, translate: 'Новости' },
    { key: TRANSLATE_KEYS.SIGN_UP, translate: 'Регистрация' },
    { key: TRANSLATE_KEYS.LOG_IN, translate: 'Войти' },
    { key: TRANSLATE_KEYS.DISCOVER, translate: 'Смотреть' },
    { key: TRANSLATE_KEYS.DESTINATION, translate: 'Направление' },
    {
        key: TRANSLATE_KEYS.CHECK_IN_CHECK_OUT,
        translate: 'Дата заезда - Дата отъезда',
    },
    { key: TRANSLATE_KEYS.TRAVELLERS, translate: 'Кол-во туристов' },
    { key: TRANSLATE_KEYS.SEARCH, translate: 'Поиск' },
    { key: TRANSLATE_KEYS.HOMES, translate: 'Домов' },
    { key: TRANSLATE_KEYS.VILLAS, translate: 'Вилл' },
    { key: TRANSLATE_KEYS.EXPLORE, translate: 'Открыть' },
    { key: TRANSLATE_KEYS.VIEW_ALL, translate: 'Показать все' },
    { key: TRANSLATE_KEYS.PER_NIGHT, translate: 'за сутки' },
    { key: TRANSLATE_KEYS.ABOUT, translate: 'О нас' },
    { key: TRANSLATE_KEYS.BLOG, translate: 'Блог' },
    { key: TRANSLATE_KEYS.HELP, translate: 'Помощь' },
    { key: TRANSLATE_KEYS.CONTACT, translate: 'Контакты' },
    { key: TRANSLATE_KEYS.TOUR, translate: 'Туры' },
    { key: TRANSLATE_KEYS.HOTEL, translate: 'Отели' },
    {
        key: TRANSLATE_KEYS.TERMS_AND_CONDITIONS,
        translate: 'Пользовательское соглашение',
    },
    { key: TRANSLATE_KEYS.FAQS, translate: 'Вопросы и ответы' },
    { key: TRANSLATE_KEYS.SITEMAP, translate: 'Карта сайта' },
    {
        key: TRANSLATE_KEYS.SEARCH_TICKETS,
        translate: 'Сотни авиабилетов в один клик.',
    },
    { key: TRANSLATE_KEYS.SIGN_IN_WITH, translate: 'Войти через' },
    { key: TRANSLATE_KEYS.USERNAME, translate: 'Имя пользователя' },
    { key: TRANSLATE_KEYS.REMEMBER_ME, translate: 'Запомнить меня' },
    { key: TRANSLATE_KEYS.FORGOT_PASSWORD, translate: 'Забыли пароль?' },
    { key: TRANSLATE_KEYS.DO_NOT_HAVE_AN_ACCOUNT, translate: `Нет аккаунта?` },
    { key: TRANSLATE_KEYS.PASSWORD, translate: 'Пароль' },
    { key: TRANSLATE_KEYS.SIGN_IN, translate: 'Войти' },
    { key: TRANSLATE_KEYS.OR, translate: 'или' },
    { key: TRANSLATE_KEYS.PER_15_DAYS_TOUR, translate: 'за 15-дневный тур' },
    { key: TRANSLATE_KEYS.ADVENTURES, translate: 'Путешествий' },
    { key: TRANSLATE_KEYS.HOTELS, translate: 'Отелей' },
    { key: TRANSLATE_KEYS.AVAILABLE, translate: 'доступно' },
    { key: TRANSLATE_KEYS.TYPE, translate: 'Тип' },
    { key: TRANSLATE_KEYS.PLACES_TO_STAY, translate: 'Отели' },
    { key: TRANSLATE_KEYS.ADVENTURES_SEARCH, translate: 'Готовые туры' },
]

const TRANSLATE_EN: Translate[] = [
    { key: TRANSLATE_KEYS.FLIGHT, translate: 'Flight' },
    { key: TRANSLATE_KEYS.DEAL, translate: 'Deal' },
    { key: TRANSLATE_KEYS.DISCOVERS, translate: 'Discovers' },
    { key: TRANSLATE_KEYS.NEWS, translate: 'News' },
    { key: TRANSLATE_KEYS.SIGN_UP, translate: 'Sign Up' },
    { key: TRANSLATE_KEYS.LOG_IN, translate: 'Log In' },
    { key: TRANSLATE_KEYS.DISCOVER, translate: 'Discover' },
    { key: TRANSLATE_KEYS.DESTINATION, translate: 'Destination' },
    {
        key: TRANSLATE_KEYS.CHECK_IN_CHECK_OUT,
        translate: 'Check in - Check out',
    },
    { key: TRANSLATE_KEYS.TRAVELLERS, translate: 'Travellers' },
    { key: TRANSLATE_KEYS.SEARCH, translate: 'Search' },
    { key: TRANSLATE_KEYS.HOMES, translate: 'Homes' },
    { key: TRANSLATE_KEYS.VILLAS, translate: 'Villas' },
    { key: TRANSLATE_KEYS.EXPLORE, translate: 'Explore' },
    { key: TRANSLATE_KEYS.VIEW_ALL, translate: 'View All' },
    { key: TRANSLATE_KEYS.PER_NIGHT, translate: 'per night' },
    { key: TRANSLATE_KEYS.ABOUT, translate: 'About' },
    { key: TRANSLATE_KEYS.BLOG, translate: 'Blog' },
    { key: TRANSLATE_KEYS.HELP, translate: 'Help' },
    { key: TRANSLATE_KEYS.CONTACT, translate: 'Contact' },
    { key: TRANSLATE_KEYS.TOUR, translate: 'Tour' },
    { key: TRANSLATE_KEYS.HOTEL, translate: 'Hotel' },
    {
        key: TRANSLATE_KEYS.TERMS_AND_CONDITIONS,
        translate: 'Terms & Conditions',
    },
    { key: TRANSLATE_KEYS.FAQS, translate: 'FAQs' },
    { key: TRANSLATE_KEYS.SITEMAP, translate: 'Sitemap' },
    {
        key: TRANSLATE_KEYS.SEARCH_TICKETS,
        translate: 'Search hundreds of flight tickets at once.',
    },
    { key: TRANSLATE_KEYS.SIGN_IN_WITH, translate: 'Sign in with' },
    { key: TRANSLATE_KEYS.USERNAME, translate: 'Username' },
    { key: TRANSLATE_KEYS.REMEMBER_ME, translate: 'Remember me' },
    { key: TRANSLATE_KEYS.FORGOT_PASSWORD, translate: 'Forgot Password?' },
    {
        key: TRANSLATE_KEYS.DO_NOT_HAVE_AN_ACCOUNT,
        translate: `Don't have an account?`,
    },
    { key: TRANSLATE_KEYS.PASSWORD, translate: 'Password' },
    { key: TRANSLATE_KEYS.SIGN_IN, translate: 'Sign In' },
    { key: TRANSLATE_KEYS.OR, translate: 'or' },
    { key: TRANSLATE_KEYS.SHARE, translate: 'Share' },
    { key: TRANSLATE_KEYS.PER_15_DAYS_TOUR, translate: 'per 15 days tour' },
    { key: TRANSLATE_KEYS.ADVENTURES, translate: 'Adventures' },
    { key: TRANSLATE_KEYS.AVAILABLE, translate: 'available' },
    { key: TRANSLATE_KEYS.HOTELS, translate: 'Hotels' },
    { key: TRANSLATE_KEYS.TYPE, translate: 'Type' },
    { key: TRANSLATE_KEYS.PLACES_TO_STAY, translate: 'Places to stay' },
    { key: TRANSLATE_KEYS.ADVENTURES_SEARCH, translate: 'Adventures' },
]

const TRANSLATE_ES: Translate[] = [
    { key: TRANSLATE_KEYS.FLIGHT, translate: 'Vuelo' },
    { key: TRANSLATE_KEYS.DEAL, translate: 'Trato' },
    { key: TRANSLATE_KEYS.DISCOVER, translate: 'Descubre' },
    { key: TRANSLATE_KEYS.NEWS, translate: 'Noticias' },
    { key: TRANSLATE_KEYS.SIGN_UP, translate: 'Inscribirse' },
    { key: TRANSLATE_KEYS.LOG_IN, translate: 'Iniciar' },
    { key: TRANSLATE_KEYS.DISCOVER, translate: 'Descubrir' },
    { key: TRANSLATE_KEYS.DESTINATION, translate: 'Destino' },
    { key: TRANSLATE_KEYS.CHECK_IN_CHECK_OUT, translate: 'Llegada Salida' },
    { key: TRANSLATE_KEYS.TRAVELLERS, translate: 'Viajeros' },
    { key: TRANSLATE_KEYS.SEARCH, translate: 'Buscar' },
    { key: TRANSLATE_KEYS.HOMES, translate: 'Casas' },
    { key: TRANSLATE_KEYS.VILLAS, translate: 'Villas' },
    { key: TRANSLATE_KEYS.EXPLORE, translate: 'Explorar' },
    { key: TRANSLATE_KEYS.VIEW_ALL, translate: 'Ver todo' },
    { key: TRANSLATE_KEYS.PER_NIGHT, translate: 'por noche' },
    { key: TRANSLATE_KEYS.ABOUT, translate: 'Sobre' },
    { key: TRANSLATE_KEYS.BLOG, translate: 'Blog' },
    { key: TRANSLATE_KEYS.HELP, translate: 'Ayudar' },
    { key: TRANSLATE_KEYS.CONTACT, translate: 'Contact' },
    { key: TRANSLATE_KEYS.TOUR, translate: 'Tour' },
    { key: TRANSLATE_KEYS.HOTEL, translate: 'Hotel' },
    {
        key: TRANSLATE_KEYS.TERMS_AND_CONDITIONS,
        translate: 'Términos y condiciones',
    },
    { key: TRANSLATE_KEYS.FAQS, translate: 'FAQs' },
    { key: TRANSLATE_KEYS.SITEMAP, translate: 'Mapa del sitio' },
    {
        key: TRANSLATE_KEYS.SEARCH_TICKETS,
        translate: 'Busque cientos de billetes de avión a la vez.',
    },
    { key: TRANSLATE_KEYS.SIGN_IN_WITH, translate: 'Iniciar sesión con' },
    { key: TRANSLATE_KEYS.USERNAME, translate: 'Nombre de usuario' },
    { key: TRANSLATE_KEYS.REMEMBER_ME, translate: 'Recuérdame' },
    {
        key: TRANSLATE_KEYS.FORGOT_PASSWORD,
        translate: 'Has olvidado tu contraseña?',
    },
    {
        key: TRANSLATE_KEYS.DO_NOT_HAVE_AN_ACCOUNT,
        translate: `No tienes una cuenta?`,
    },
    { key: TRANSLATE_KEYS.PASSWORD, translate: 'Contraseña' },
    { key: TRANSLATE_KEYS.SIGN_IN, translate: 'Registrarse' },
    { key: TRANSLATE_KEYS.OR, translate: 'o' },
    { key: TRANSLATE_KEYS.SHARE, translate: 'Cuota' },
    { key: TRANSLATE_KEYS.PER_15_DAYS_TOUR, translate: 'por tour de 15 días' },
    { key: TRANSLATE_KEYS.ADVENTURES, translate: 'Aventuras' },
    { key: TRANSLATE_KEYS.AVAILABLE, translate: 'disponible' },
    { key: TRANSLATE_KEYS.HOTELS, translate: 'Hoteles' },
    { key: TRANSLATE_KEYS.TYPE, translate: 'Escribe' },
    { key: TRANSLATE_KEYS.PLACES_TO_STAY, translate: 'Lugares para quedarse' },
    { key: TRANSLATE_KEYS.ADVENTURES_SEARCH, translate: 'Aventuras' },
]

const tr = (key: string, currentLanguage: LANGUAGE): string => {
    const hash = {
        [LANGUAGE.EN]: TRANSLATE_EN,
        [LANGUAGE.ES]: TRANSLATE_ES,
        [LANGUAGE.RU]: TRANSLATE_RU,
    }

    const currentTranslate = hash[currentLanguage]

    const translate: Translate | undefined = currentTranslate.find(
        translate => {
            return translate.key === key
        },
    )

    if (translate !== undefined) {
        return translate.translate
    } else {
        return key
    }
}

export { tr }
