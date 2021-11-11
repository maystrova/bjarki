import anonAvatar from './anon-avatar.png'

export type User = {
    name: string
    avatar: string
    email: string
    id: string
}

export let DEFAULT_USER: User = {
    name: 'Anon',
    avatar: anonAvatar,
    email: '',
    id: Math.random().toString(),
}
