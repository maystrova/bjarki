import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'

import {
    StyledSignIn,
    StyledSignInActions,
    StyledSignInField,
    StyledSignInHeader,
} from './style'

import google from 'Components/SignIn/pics/google-icon.svg'
import facebook from 'Components/SignIn/pics/fb-icon.svg'
import close from 'Components/SignIn/pics/close-icon.svg'
import hidePassword from 'Components/SignIn/pics/hide-password.svg'

interface SignInProps {
    isOpen: boolean
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

const SignIn = ({ isOpen }: SignInProps) => {
    const SIGN_IN: SignInType[] = [
        { title: 'Username' },
        { title: 'Password', icon: hidePassword },
    ]

    const SIGN_IN_BUTTONS: SignInButtonType[] = [
        { title: `${buttonTitleSample} Google`, icon: google },
        { title: `${buttonTitleSample} Facebook`, icon: facebook },
    ]

    return (
        <StyledSignIn>
            <StyledSignInHeader>
                <button>
                    <Icon size={ICON_SIZE.X_SMALL} src={close} />
                </button>
            </StyledSignInHeader>
            <h1>Sign In</h1>

            <StyledSignInActions>
                {SIGN_IN.map(field => {
                    return (
                        <div>
                            <StyledSignInField key={field.title}>
                                <input type='text' placeholder={field.title} />
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
                <div>
                    <div>Remember me</div>
                    <Button
                        title={'Forgot Password?'}
                        onClick={() => {}}
                        type={BUTTON_TYPE.ONLY_TEXT}
                    />
                </div>
                <Button
                    title={'Sign In'}
                    onClick={() => {}}
                    type={BUTTON_TYPE.PRIMARY}
                />
            </StyledSignInActions>
            <div>
                <span>or</span>
            </div>
            {SIGN_IN_BUTTONS.map(button => {
                return (
                    <div>
                        <Icon size={ICON_SIZE.MEDIUM} src={button.icon} />
                        <Button
                            title={button.title}
                            onClick={() => {}}
                            type={BUTTON_TYPE.ONLY_TEXT}
                        />
                    </div>
                )
            })}
            <footer>
                <div>
                    Don't have an account? <button>Sign Up</button>
                </div>
            </footer>
        </StyledSignIn>
    )
}

export { SignIn }
