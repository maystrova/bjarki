import React from 'react'

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

import google from 'Components/SignIn/pics/google-icon.svg'
import facebook from 'Components/SignIn/pics/fb-icon.svg'
import close from 'Components/SignIn/pics/close-icon.svg'
import hidePassword from 'Components/SignIn/pics/hide-password.svg'

interface SignInProps {
    isOpen: boolean
    onCancel: () => void
}

interface SignInType {
    title: string
    icon?: string
}

interface SignInButtonType {
    title: string
    icon: string
}

const buttonTitleSample = 'Sign in with'

const SignIn = ({ isOpen, onCancel }: SignInProps) => {
    const SIGN_IN: SignInType[] = [
        { title: 'Username' },
        { title: 'Password', icon: hidePassword },
    ]

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
                <h1>Sign In</h1>
                <StyledSignInActions>
                    {SIGN_IN.map(field => {
                        return (
                            <div>
                                <StyledSignInField key={field.title}>
                                    <input
                                        type='text'
                                        placeholder={field.title}
                                    />
                                    {field.icon && (
                                        <button>
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
                            <span>Remember me</span>
                        </StyledRememberMe>
                        <Button
                            title={'Forgot Password?'}
                            onClick={() => {}}
                            type={BUTTON_TYPE.ONLY_TEXT}
                        />
                    </StyledSignInSubtitles>
                </StyledSignInActions>
                <Button
                    title={'Sign In'}
                    onClick={() => {}}
                    type={BUTTON_TYPE.PRIMARY}
                    width={BUTTON_WIDTH.BIG}
                    height={BUTTON_HEIGHT.MEDIUM}
                    borderRadius={'4px'}
                />
                <StyledOr>
                    <span>or</span>
                </StyledOr>
                <StyledSignInWithSocialMediaButtons>
                    {SIGN_IN_BUTTONS.map(button => {
                        return (
                            <StyledSignInWithSocialMediaButton>
                                <Icon
                                    size={ICON_SIZE.MEDIUM}
                                    src={button.icon}
                                />
                                <Button
                                    title={button.title}
                                    onClick={() => {}}
                                    type={BUTTON_TYPE.ONLY_TEXT}
                                />
                            </StyledSignInWithSocialMediaButton>
                        )
                    })}
                </StyledSignInWithSocialMediaButtons>

                <StyledSignInFooter>
                    <div>Don't have an account? </div>

                    <Button
                        title={'Sign Up'}
                        onClick={() => {}}
                        type={BUTTON_TYPE.UNDERLINED}
                    />
                </StyledSignInFooter>
            </StyledSignIn>
        </StyledModal>
    )
}

export { SignIn }
