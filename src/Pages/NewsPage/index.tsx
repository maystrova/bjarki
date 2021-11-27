import React from 'react'

import { Header, HEADER_TYPE } from 'Components/Header'

import { StyledNewsPage, StyledNewsPageContainer } from './style'

import marocco from './pics/morocco.png'
import palms from './pics/palms.png'

interface NewsPageProps {
    onLogInClicked: () => void
}

const NewsPage = ({ onLogInClicked }: NewsPageProps) => {
    return (
        <StyledNewsPage>
            <Header
                onLogInClicked={onLogInClicked}
                headerType={HEADER_TYPE.BLACK}
            />
            <StyledNewsPageContainer>
                <div>
                    <span>News</span>
                    <span>•</span>
                    <span>July 9, 2019</span>
                </div>
                <h1>My Travel Experiences in Southern Morocco</h1>
                <p>
                    In case you're searching for the world's best excursion
                    goal, Morocco is a top contender. Rough gullies, and
                    medieval medinas are just piece of what makes this 10-day
                    Morocco agenda a memorable outing.
                </p>
                <p>
                    Go through the initial two days becoming mixed up in the
                    labyrinth of rear entryways of the Marrakech medina. Slender
                    lanes are fixed with unlimited columns of stallholders
                    selling shoes, lights and material. Markets are stacked high
                    with natural product, nuts and flavors. Furthermore, mystery
                    laneways lead to laborers beating cowhide, smiths producing
                    metal and dyers recoloring fabric, follow days 1 and 2 of
                    our 3-day Marrakech agenda.
                </p>
                <img src={marocco} alt='img' />
                <div>Toubkal Mountain, High Atlas, Morocco</div>
                <p>
                    Mosques, tombs and royal residences show Moroccan building
                    flare with mosaic tiles, plaster plasterwork and decorated
                    cedar roofs. In two days you can investigate the best of the
                    souks and fondouks, the magnificent Moorish design and the
                    sheer vitality of life in the city.
                </p>
                <h2>The Start</h2>
                <p>
                    Eleven years ago our founders, Brian and Joe, dropping down
                    the opposite side you could take the quick course to Aït Ben
                    Haddou. Be that as it may, that would be frenzy. The
                    Moroccans have as of late cleared the undeniably
                    progressively beautiful and intriguing P1506. So transform
                    left and head into the valley that was before the principle
                    train course from Marrakech to Timbuktu. Just outside the
                    Kasbah, Lion D'Or does a shockingly decent lunch.
                </p>
                <div>
                    <p>
                        Passing through the Atlas Mountains is a delight in
                        itself and the view today on the drive to Aït Ben Haddou
                        is momentous. Leave Ouirgane and head back to Tazhnaout,
                        take a right hand turn onto the P2010 and – when you get
                        to Aït Ourir – turn right again onto the N9. Passing
                        through the Atlas Mountains is a delight in itself and
                        the view today on the drive to Aït Ben Haddou is
                        momentous. Leave Ouirgane and head back to Tazhnaout,
                        take a right hand turn onto the P2010.
                    </p>
                </div>
                <div>- Anderson Stuart, Chief Director of Community</div>
                <img src={palms} alt='img' />
                <p>
                    Proceed towards Aït Ben Haddou. On this piece of the drive,
                    the Ounila stream meets the street and cuts glorious ravines
                    in the red stone. The base of which are punctuated with
                    delightful green desert spring. There are a lot of
                    incredible spots to stop by the roadside, investigate and
                    take photographs. At last, expect to get to Aït Ben Haddou
                    for nightfall. Based on a slope, this braced town (ksar)
                    sits grandly over the banks of the Ounila River. It's
                    castellated red mud dividers and emotional area summon
                    pictures of scriptural towns, tragically deceased towns, and
                    doing combating armed forces. Hollywood has likewise paid
                    heed. For a considerable length of time the film studios
                    have made the journey here to film such works of art as
                    Lawrence of Arabia, Gladiator and Jesus of Nazareth. Next,
                    take the N10 past Skoura and through level desolate badlands
                    to the Dades Valley. The R704 exciting bends in the road up
                    the valley offering great perspectives on red stone gully
                    and green desert garden. Be that as it may, the feature is
                    the amazing component of Monkey Fingers. Here little surges
                    of water have cut rivulets and opening gullies in the stone.
                    Stop at Isabel bistro, snatch a mint tea and respect the
                    unusual bulbous stone developments.
                </p>
            </StyledNewsPageContainer>
        </StyledNewsPage>
    )
}

export { NewsPage }
