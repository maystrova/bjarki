export enum LANGUAGE {
    RU = 'ru',
    EN = 'en',
    ES = 'es',
}

type Translate = {
    translate: string
    key: string
}

const TRANSLATE_RU: Translate[] = [{ key: 'flight', translate: 'Улететь' }]

const TRANSLATE_EN: Translate[] = [{ key: 'flight', translate: 'Flight' }]

const TRANSLATE_ES: Translate[] = [{ key: 'flight', translate: 'Vuelo' }]

const tr = (key: string, currentLanguage: LANGUAGE): string => {
    const hash = {
        [LANGUAGE.EN]: TRANSLATE_EN,
        [LANGUAGE.ES]: TRANSLATE_ES,
        [LANGUAGE.RU]: TRANSLATE_RU,
    }

    const currentTranslate = hash[currentLanguage]

    const translate: Translate | undefined = currentTranslate.find(
        translate => {
            return translate.translate
        },
    )

    if (translate !== undefined) {
        return translate.translate
    } else {
        return key
    }
}

export { tr }
