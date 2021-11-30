import anonAvatar from './anon-avatar.png'
import avatar from 'Components/Share/hello.png'

export type UserType = {
    name: string
    avatar: string
    email: string
    id: string
}

export let DEFAULT_USER: UserType = {
    name: 'Kate Maystrova',
    avatar: avatar,
    email: 'maystrovakate@gmail.com',
    id: '1',
}
