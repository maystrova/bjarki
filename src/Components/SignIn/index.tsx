import React, { useContext, useState } from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'
import {
    Button,
    BUTTON_HEIGHT,
    BUTTON_TYPE,
    BUTTON_WIDTH,
} from 'Components/Button'

import {
    StyledModal,
    StyledModalOverlay,
    StyledOr,
    StyledRememberMe,
    StyledSignIn,
    StyledSignInActions,
    StyledSignInField,
    StyledSignInFooter,
    StyledSignInHeader,
    StyledSignInSubtitles,
    StyledSignInWithSocialMediaButton,
    StyledSignInWithSocialMediaButtons,
} from './style'

import google from './pics/google-icon.svg'
import facebook from 'Components/SignIn/pics/fb-icon.svg'
import close from 'Components/SignIn/pics/close-icon.svg'
import hidePassword from 'Components/SignIn/pics/hide-password.svg'
import showPassword from 'Components/SignIn/pics/password-icon.svg'
import { BjarkiContext } from '../../context/storeContext'
import { tr, TRANSLATE_KEYS } from '../../services/language'

interface SignInProps {
    isOpen: boolean
    onCancel: () => void
    onGoogleAuth: () => void
    onFacebookAuth: () => void
}

interface SignInType {
    title: string
    icon?: string
    inputType: string
}

interface SignInButtonType {
    title: string
    icon: string
}

const SignIn = ({
    isOpen,
    onCancel,
    onGoogleAuth,
    onFacebookAuth,
}: SignInProps) => {
    const { store } = useContext(BjarkiContext)

    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    const SIGN_IN: SignInType[] = [
        {
            title: tr(TRANSLATE_KEYS.USERNAME, store.currentLanguage),
            inputType: 'text',
        },
        {
            title: tr(TRANSLATE_KEYS.PASSWORD, store.currentLanguage),
            icon: isShowPassword ? hidePassword : showPassword,
            inputType: isShowPassword ? 'text' : 'password',
        },
    ]

    const buttonTitleSample: string = tr(
        TRANSLATE_KEYS.SIGN_IN_WITH,
        store.currentLanguage,
    )

    const rememberMeTitle = tr(
        TRANSLATE_KEYS.REMEMBER_ME,
        store.currentLanguage,
    )
    const forgotPasswordTitle = tr(
        TRANSLATE_KEYS.FORGOT_PASSWORD,
        store.currentLanguage,
    )

    const dontHaveAnAccountTitle = tr(
        TRANSLATE_KEYS.DO_NOT_HAVE_AN_ACCOUNT,
        store.currentLanguage,
    )

    const signInTitle = tr(TRANSLATE_KEYS.SIGN_IN, store.currentLanguage)

    const signUpTitle = tr(TRANSLATE_KEYS.SIGN_UP, store.currentLanguage)

    const orTitle = tr(TRANSLATE_KEYS.OR, store.currentLanguage)

    const SIGN_IN_BUTTONS: SignInButtonType[] = [
        { title: `${buttonTitleSample} Google`, icon: google },
        { title: `${buttonTitleSample} Facebook`, icon: facebook },
    ]

    if (!isOpen) return null

    return (
        <StyledModal>
            <StyledModalOverlay onClick={onCancel}></StyledModalOverlay>
            <StyledSignIn>
                <StyledSignInHeader>
                    <button onClick={onCancel}>
                        <Icon size={ICON_SIZE.X_SMALL} src={close} />
                    </button>
                </StyledSignInHeader>
                <h1>{signInTitle}</h1>
                <StyledSignInActions>
                    {SIGN_IN.map(field => {
                        return (
                            <div key={field.title}>
                                <StyledSignInField key={field.title}>
                                    <input
                                        type={field.inputType}
                                        placeholder={field.title}
                                    />
                                    {field.icon && (
                                        <button
                                            onClick={() =>
                                                setIsShowPassword(
                                                    !isShowPassword,
                                                )
                                            }
                                        >
                                            {' '}
                                            <Icon
                                                size={ICON_SIZE.SMALL}
                                                src={field.icon}
                                            />
                                        </button>
                                    )}
                                </StyledSignInField>
                            </div>
                        )
                    })}
                    <StyledSignInSubtitles>
                        <StyledRememberMe>
                            <input type='checkbox' />
                            <span>{rememberMeTitle}</span>
                        </StyledRememberMe>
                        <Button
                            title={forgotPasswordTitle}
                            onClick={() => {}}
                            type={BUTTON_TYPE.ONLY_TEXT}
                        />
                    </StyledSignInSubtitles>
                </StyledSignInActions>
                <Button
                    title={signInTitle}
                    onClick={() => {}}
                    type={BUTTON_TYPE.PRIMARY}
                    width={BUTTON_WIDTH.BIG}
                    height={BUTTON_HEIGHT.MEDIUM}
                    borderRadius={'4px'}
                />
                <StyledOr>
                    <span>{orTitle}</span>
                </StyledOr>
                <StyledSignInWithSocialMediaButtons>
                    {SIGN_IN_BUTTONS.map(button => {
                        return (
                            <StyledSignInWithSocialMediaButton
                                key={button.title}
                            >
                                <Button
                                    children={
                                        <Icon
                                            size={ICON_SIZE.MEDIUM}
                                            src={button.icon}
                                        />
                                    }
                                    title={button.title}
                                    onClick={() => {
                                        if (button.title.includes('Google')) {
                                            onGoogleAuth()
                                        } else if (
                                            button.title.includes('Facebook')
                                        ) {
                                            onFacebookAuth()
                                        }
                                    }}
                                    type={BUTTON_TYPE.ONLY_TEXT}
                                />
                            </StyledSignInWithSocialMediaButton>
                        )
                    })}
                </StyledSignInWithSocialMediaButtons>

                <StyledSignInFooter>
                    <div>{dontHaveAnAccountTitle} </div>

                    <Button
                        title={signUpTitle}
                        onClick={() => {}}
                        type={BUTTON_TYPE.UNDERLINED}
                    />
                </StyledSignInFooter>
            </StyledSignIn>
        </StyledModal>
    )
}

export { SignIn }
