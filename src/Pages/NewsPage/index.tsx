import React from 'react'

import { Header, HEADER_TYPE } from 'Components/Header'
import { Footer } from 'Components/Footer'
import { Icon, ICON_SIZE } from 'Components/Icon'

import {
    NEWS_TYPE,
    StyledInvertedCommas,
    StyledMainNews,
    StyledNews,
    StyledNewsCaption,
    StyledNewsPage,
    StyledNewsPageContainer,
    StyledNewsPageImage,
    StyledNewsPageTitle,
    StyledNewsPageWrapper,
    StyledNewsSection,
    StyledShareButton,
    StyledShareTitle,
    StyledShareTitleWrapper,
} from './style'
import marocco from './pics/morocco.png'
import palms from './pics/palms.png'
import fb from './pics/fb.svg'
import tw from './pics/tw.svg'
import google from './pics/google.svg'

interface NewsPageProps {
    onLogInClicked: () => void
}

interface ShareType {
    icon: string
    onClick: () => void
}

const NewsPage = ({ onLogInClicked }: NewsPageProps) => {
    const SHARE_BUTTONS: ShareType[] = [
        { icon: fb, onClick: () => {} },
        { icon: tw, onClick: () => {} },
        { icon: google, onClick: () => {} },
    ]

    return (
        <StyledNewsPage>
            <div>
                <Header
                    onLogInClicked={onLogInClicked}
                    headerType={HEADER_TYPE.BLACK}
                />
            </div>
            <StyledNewsPageWrapper>
                <div>User</div>
                <StyledNewsPageContainer>
                    <StyledNewsSection>
                        <StyledNews>
                            <div>
                                <StyledNewsCaption>
                                    <span>News</span>
                                    <span> • </span>
                                    <span>July 9, 2019</span>
                                </StyledNewsCaption>
                                <StyledNewsPageTitle>
                                    My Travel Experiences in
                                    <br /> Southern Morocco
                                </StyledNewsPageTitle>
                            </div>
                            <StyledMainNews type={NEWS_TYPE.MAIN}>
                                In case you're searching for the world's best
                                excursion goal, Morocco is a top contender.
                                Rough gullies, and medieval medinas are just
                                piece of what makes this 10-day Morocco agenda a
                                memorable outing.
                            </StyledMainNews>
                            <StyledMainNews type={NEWS_TYPE.DESCRIPTION}>
                                Go through the initial two days becoming mixed
                                up in the labyrinth of rear entryways of the
                                Marrakech medina. Slender lanes are fixed with
                                unlimited columns of stallholders selling shoes,
                                lights and material. Markets are stacked high
                                with natural product, nuts and flavors.
                                Furthermore, mystery laneways lead to laborers
                                beating cowhide, smiths producing metal and
                                dyers recoloring fabric, follow days 1 and 2 of
                                our 3-day Marrakech agenda.
                            </StyledMainNews>
                        </StyledNews>
                    </StyledNewsSection>
                    <div>
                        <StyledNewsPageImage src={marocco} alt='img' />
                        <StyledNewsCaption>
                            <span>Toubkal Mountain,</span>
                            <span> High Atlas, Morocco</span>
                        </StyledNewsCaption>
                    </div>
                    <StyledNewsSection>
                        <StyledNews>
                            <StyledMainNews type={NEWS_TYPE.DESCRIPTION}>
                                Mosques, tombs and royal residences show
                                Moroccan building flare with mosaic tiles,
                                plaster plasterwork and decorated cedar roofs.
                                In two days you can investigate the best of the
                                souks and fondouks, the magnificent Moorish
                                design and the sheer vitality of life in the
                                city.
                            </StyledMainNews>
                            <h2>The Start</h2>
                            <StyledMainNews type={NEWS_TYPE.DESCRIPTION}>
                                Eleven years ago our founders, Brian and Joe,
                                dropping down the opposite side you could take
                                the quick course to Aït Ben Haddou. Be that as
                                it may, that would be frenzy. The Moroccans have
                                as of late cleared the undeniably progressively
                                beautiful and intriguing P1506. So transform
                                left and head into the valley that was before
                                the principle train course from Marrakech to
                                Timbuktu. Just outside the Kasbah, Lion D'Or
                                does a shockingly decent lunch.
                            </StyledMainNews>
                            <div>
                                <StyledInvertedCommas>“</StyledInvertedCommas>
                                <StyledMainNews type={NEWS_TYPE.QUOTE}>
                                    Passing through the Atlas Mountains is a
                                    delight in itself and the view today on the
                                    drive to Aït Ben Haddou is momentous. Leave
                                    Ouirgane and head back to Tazhnaout, take a
                                    right hand turn onto the P2010 and – when
                                    you get to Aït Ourir – turn right again onto
                                    the N9. Passing through the Atlas Mountains
                                    is a delight in itself and the view today on
                                    the drive to Aït Ben Haddou is momentous.
                                    Leave Ouirgane and head back to Tazhnaout,
                                    take a right hand turn onto the P2010.
                                </StyledMainNews>
                            </div>
                            <StyledNewsCaption>
                                - Anderson Stuart, Chief Director of Community
                            </StyledNewsCaption>
                        </StyledNews>
                    </StyledNewsSection>
                    <StyledNewsPageImage src={palms} alt='img' />
                    <StyledNewsSection>
                        <StyledNews>
                            <StyledMainNews type={NEWS_TYPE.DESCRIPTION}>
                                Proceed towards Aït Ben Haddou. On this piece of
                                the drive, the Ounila stream meets the street
                                and cuts glorious ravines in the red stone. The
                                base of which are punctuated with delightful
                                green desert spring. There are a lot of
                                incredible spots to stop by the roadside,
                                investigate and take photographs.
                            </StyledMainNews>
                            <StyledMainNews type={NEWS_TYPE.DESCRIPTION}>
                                At last, expect to get to Aït Ben Haddou for
                                nightfall. Based on a slope, this braced town
                                (ksar) sits grandly over the banks of the Ounila
                                River. It's castellated red mud dividers and
                                emotional area summon pictures of scriptural
                                towns, tragically deceased towns, and doing
                                combating armed forces. Hollywood has likewise
                                paid heed. For a considerable length of time the
                                film studios have made the journey here to film
                                such works of art as Lawrence of Arabia,
                                Gladiator and Jesus of Nazareth. Next, take the
                                N10 past Skoura and through level desolate
                                badlands to the Dades Valley. The R704 exciting
                                bends in the road up the valley offering great
                                perspectives on red stone gully and green desert
                                garden. Be that as it may, the feature is the
                                amazing component of Monkey Fingers. Here little
                                surges of water have cut rivulets and opening
                                gullies in the stone. Stop at Isabel bistro,
                                snatch a mint tea and respect the unusual
                                bulbous stone developments.
                            </StyledMainNews>
                        </StyledNews>
                    </StyledNewsSection>
                </StyledNewsPageContainer>
                <div>
                    {SHARE_BUTTONS.map(button => {
                        return (
                            <StyledShareButton onClick={button.onClick}>
                                <Icon
                                    size={ICON_SIZE.X_SMALL}
                                    src={button.icon}
                                />
                            </StyledShareButton>
                        )
                    })}
                    <StyledShareTitleWrapper>
                        <StyledShareTitle>Share</StyledShareTitle>
                    </StyledShareTitleWrapper>
                </div>
            </StyledNewsPageWrapper>
            <Footer />
        </StyledNewsPage>
    )
}

export { NewsPage }
