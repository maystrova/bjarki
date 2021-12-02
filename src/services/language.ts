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
    { key: 'sign-up', translate: 'Зарегистрироваться' },
    { key: 'log-in', translate: 'Войти' },
    { key: 'discover', translate: 'Смотреть' },
    { key: 'destination', translate: 'Направление' },
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
