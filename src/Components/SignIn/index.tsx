import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'
import { Button, BUTTON_TYPE } from 'Components/Button'

import { StyledSignIn } from './style'

import google from 'Components/SignIn/pics/google-icon.svg'
import facebook from 'Components/SignIn/pics/fb-icon.svg'

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
    const SIGN_IN: SignInType[] = [{ title: 'Username' }, { title: 'Password' }]

    const SIGN_IN_BUTTONS: SignInButtonType[] = [
        { title: `${buttonTitleSample} Google`, icon: google },
        { title: `${buttonTitleSample} Facebook`, icon: facebook },
    ]

    return (
        <StyledSignIn>
            <header>
                <button></button>
                <h1>Sign In</h1>
            </header>
            <div>
                {SIGN_IN.map(field => {
                    return (
                        <div key={field.title}>
                            <input type='text' placeholder={field.title} />
                            {field.icon && (
                                <Icon
                                    size={ICON_SIZE.X_SMALL}
                                    src={field.icon}
                                />
                            )}
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
            </div>
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
