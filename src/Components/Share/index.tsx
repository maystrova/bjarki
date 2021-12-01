import React from 'react'

import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    StyledShare,
    StyledShareButton,
    StyledShareTitle,
    StyledShareTitleWrapper,
} from './style'

import fb from 'Pages/NewsPage/pics/fb.svg'
import tw from 'Pages/NewsPage/pics/tw.svg'
import google from 'Pages/NewsPage/pics/google.svg'

interface ShareProps {}

interface ShareType {
    icon: string
    onClick: () => void
}

interface ShareData {
    url: string
    title: string
    image: string
    text: string
}

const title = 'bjarki'
const text = 'Hello! This is my project!'
const url = 'https://bjarki.vercel.app/'
const image = './hello.png'

const shareFB = (shareData: ShareData): void => {
    let url = 'http://www.fb.com/sharer.php?s=100'
    if (shareData.title) {
        url += '&p[title]=' + encodeURIComponent(shareData.title)
    }
    if (shareData.text) {
        url += '&p[summary]=' + encodeURIComponent(shareData.text)
    }
    if (shareData.url) {
        url += '&p[url]=' + encodeURIComponent(shareData.url)
    }
    if (shareData.image) {
        url += '&p[images][0]=' + encodeURIComponent(shareData.image)
    }
    popup(url)
}

const shareTW = (shareData: ShareData): void => {
    let url = 'https://twitter.com/intent/tweet?',
        MAX_LEN_TW = 140,
        content = shareData.title,
        site_url = shareData.url,
        index = MAX_LEN_TW
    while ((content + site_url).length > MAX_LEN_TW) {
        index = content.lastIndexOf(' ', index - 1)
        if (index !== -1 && index - 4 - site_url.length <= MAX_LEN_TW) {
            content = content.slice(0, index)
            content += '... '
        } else if (index === -1) {
            content = ''
        }
    }
    if (shareData.url) {
        url += 'original_referer=' + encodeURIComponent(shareData.url)
    }
    if (shareData.title) {
        url += '&text=' + encodeURIComponent(content)
    }
    url += '&tw_p=tweetbutton'
    if (shareData.url) {
        url += '&url=' + encodeURIComponent(site_url)
    }
    popup(url)
}

const googleShare = (shareData: ShareData): void => {
    let url = 'https://plus.google.com/share?url='

    if (shareData.url) {
        url += 'original_referer=' + encodeURIComponent(shareData.url)
    }
    if (shareData.title) {
        url += '&text=' + encodeURIComponent(shareData.text)
    }
    url += '&tw_p=tweetbutton'
    if (shareData.url) {
        url += '&url=' + encodeURIComponent(shareData.url)
    }
    popup(url)
}

const popup = (url: string): void => {
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436')
}

const Share = ({}: ShareProps) => {
    const SHARE_BUTTONS: ShareType[] = [
        {
            icon: fb,
            onClick: () =>
                shareFB({ url: url, image: image, text: text, title: title }),
        },
        {
            icon: tw,
            onClick: () =>
                shareTW({ url: url, title: title, text: text, image: image }),
        },
        {
            icon: google,
            onClick: () =>
                googleShare({
                    url: url,
                    title: title,
                    text: text,
                    image: image,
                }),
        },
    ]
    return (
        <div>
            {SHARE_BUTTONS.map(button => {
                return (
                    <StyledShare>
                        <StyledShareButton onClick={button.onClick}>
                            <Icon size={ICON_SIZE.X_SMALL} src={button.icon} />
                        </StyledShareButton>
                    </StyledShare>
                )
            })}
            <StyledShareTitleWrapper>
                <StyledShareTitle>Share</StyledShareTitle>
            </StyledShareTitleWrapper>
        </div>
    )
}

export { Share }
