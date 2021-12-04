export enum LANGUAGE {
    RU = 'ru',
    EN = 'en',
    ES = 'es',
}

type Translate = {
    translate: string
    key: string
}

const TRANSLATE_RU: Translate[] = [
    { key: 'flight', translate: 'Авиабилеты' },
    { key: 'deal', translate: 'Условия' },
    { key: 'discovers', translate: 'Направления' },
    { key: 'news', translate: 'Новости' },
    { key: 'sign-up', translate: 'Регистрация' },
    { key: 'log-in', translate: 'Войти' },
    { key: 'discover', translate: 'Смотреть' },
    { key: 'destination', translate: 'Направление' },
    { key: 'check-in-check-out', translate: 'Дата заезда - Дата отъезда' },
    { key: 'travellers', translate: 'Кол-во путешественников' },
    { key: 'search', translate: 'Поиск' },
    { key: 'homes', translate: 'Домов' },
    { key: 'villas', translate: 'Вилл' },
    { key: 'explore', translate: 'Открыть' },
    { key: 'view-all', translate: 'Показать все' },
    { key: 'per-night', translate: 'за сутки' },
    { key: 'about', translate: 'О нас' },
    { key: 'blog', translate: 'Блог' },
    { key: 'help', translate: 'Помощь' },
    { key: 'contact', translate: 'Контакты' },
    { key: 'tour', translate: 'Туры' },
    { key: 'hotel', translate: 'Отели' },
    { key: 'terms-and-conditions', translate: 'Пользовательское соглашение' },
    { key: 'faqs', translate: 'Вопросы и ответы' },
    { key: 'sitemap', translate: 'Карта сайта' },
    {
        key: 'Search hundreds of flight tickets at once.',
        translate: 'Сотни авиабилетов в один клик.',
    },
]

const TRANSLATE_EN: Translate[] = [
    { key: 'flight', translate: 'Flight' },
    { key: 'deal', translate: 'Deal' },
    { key: 'discovers', translate: 'Discovers' },
    { key: 'news', translate: 'News' },
    { key: 'sign-up', translate: 'Sign Up' },
    { key: 'log-in', translate: 'Log In' },
    { key: 'discover', translate: 'Discover' },
    { key: 'destination', translate: 'Destination' },
    { key: 'check-in-check-out', translate: 'Check in - Check out' },
    { key: 'travellers', translate: 'Travellers' },
    { key: 'search', translate: 'Search' },
    { key: 'homes', translate: 'Homes' },
    { key: 'villas', translate: 'Villas' },
    { key: 'explore', translate: 'Explore' },
    { key: 'view-all', translate: 'View All' },
    { key: 'per-night', translate: 'per night' },
    { key: 'about', translate: 'About' },
    { key: 'blog', translate: 'Blog' },
    { key: 'help', translate: 'Help' },
    { key: 'contact', translate: 'Contact' },
    { key: 'tour', translate: 'Tour' },
    { key: 'hotel', translate: 'Hotel' },
    { key: 'terms-and-conditions', translate: 'Terms & Conditions' },
    { key: 'faqs', translate: 'FAQs' },
    { key: 'sitemap', translate: 'Sitemap' },
    {
        key: 'Search hundreds of flight tickets at once.',
        translate: 'Search hundreds of flight tickets at once.',
    },
]

const TRANSLATE_ES: Translate[] = [
    { key: 'flight', translate: 'Vuelo' },
    { key: 'deal', translate: 'Trato' },
    { key: 'discovers', translate: 'Descubre' },
    { key: 'news', translate: 'Noticias' },
    { key: 'sign-up', translate: 'Inscribirse' },
    { key: 'log-in', translate: 'Iniciar' },
    { key: 'discover', translate: 'Descubrir' },
    { key: 'destination', translate: 'Destino' },
    { key: 'check-in-check-out', translate: 'Llegada Salida' },
    { key: 'travellers', translate: 'Viajeros' },
    { key: 'search', translate: 'Buscar' },
    { key: 'homes', translate: 'Casas' },
    { key: 'villas', translate: 'Villas' },
    { key: 'explore', translate: 'Explorar' },
    { key: 'view-all', translate: 'Ver todo' },
    { key: 'per-night', translate: 'por noche' },
    { key: 'about', translate: 'Sobre' },
    { key: 'blog', translate: 'Blog' },
    { key: 'help', translate: 'Ayudar' },
    { key: 'contact', translate: 'Contact' },
    { key: 'tour', translate: 'Tour' },
    { key: 'hotel', translate: 'Hotel' },
    { key: 'terms-and-conditions', translate: 'Términos y condiciones' },
    { key: 'faqs', translate: 'FAQs' },
    { key: 'sitemap', translate: 'Mapa del sitio' },
    {
        key: 'Search hundreds of flight tickets at once.',
        translate: 'Busque cientos de billetes de avión a la vez.',
    },
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
