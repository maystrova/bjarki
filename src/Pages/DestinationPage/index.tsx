import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BjarkiContext } from 'context/storeContext'

import { CITIES, CityType, COUNTRIES, DESTINATION_ALIAS } from 'services/type'
import { HomePageInterface } from 'Pages/HomePage/type'
import { Header, HEADER_TYPE } from 'Components/Header'

import {
    StyledDestinationPage,
    StyledDestinationPageContainer,
    StyledDestinationPageContainerWrapper,
    StyledDestinationPageTitle,
} from './style'

interface DestinationPageProps {
    onLogInClicked: () => void
}

const DestinationPage = ({ onLogInClicked }: DestinationPageProps) => {
    const { store } = useContext(BjarkiContext)

    const [destination, setDestination] = useState<HomePageInterface>({
        city: CITIES.MONTE_ROSA,
        country: COUNTRIES.SWITZERLAND,
        alias: DESTINATION_ALIAS.MONTE_ROSA,
    })

    let params = useParams<{ alias: string }>()

    const getDestinationFromStore = (): void => {
        store.destinations.forEach(destination => {
            const foundDestination: CityType | undefined =
                destination.city.find(city => city.alias === params.alias)
            if (foundDestination) {
                const newDestination: HomePageInterface = {
                    city: foundDestination.name,
                    alias: foundDestination.alias,
                    country: destination.country,
                }
                setDestination(newDestination)
            }
        })
        return undefined
    }

    useEffect(() => getDestinationFromStore(), [])

    return (
        <StyledDestinationPage destination={destination.city}>
            <Header
                onLogInClicked={onLogInClicked}
                headerType={HEADER_TYPE.WHITE}
            />
            <StyledDestinationPageContainerWrapper>
                <StyledDestinationPageContainer>
                    <StyledDestinationPageTitle>
                        <h1>{destination.city}</h1>
                    </StyledDestinationPageTitle>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus aliquam aliquid aperiam, dicta dolore
                        dolorem dolorum eius excepturi facere facilis illum
                        impedit maxime minus officia quibusdam ratione, rerum
                        voluptas! Ab aliquam aliquid aperiam asperiores
                        cupiditate debitis delectus deserunt doloremque earum
                        eius fugiat fugit harum hic, inventore ipsam itaque iure
                        magnam magni maiores minus non officiis omnis placeat
                        quaerat quidem quos recusandae reprehenderit sequi sunt,
                        velit vero vitae voluptates voluptatibus! Aliquid
                        aspernatur culpa cum cumque cupiditate delectus
                        dignissimos ducimus eaque esse excepturi facere fuga
                        harum hic ipsum iusto, laudantium magnam maiores neque
                        nihil numquam optio quae quaerat, quisquam quo quos
                        reiciendis rem saepe tempore veniam vitae? Deserunt
                        doloribus maxime quasi saepe? Adipisci amet debitis
                        deserunt est et eveniet facilis fuga fugiat fugit hic in
                        laboriosam molestiae quam quas, sequi sit, sunt.
                        Asperiores atque blanditiis commodi eum excepturi iste
                        laudantium non quasi? Accusamus accusantium asperiores
                        beatae commodi consequuntur doloribus, dolorum ex harum
                        in ipsa ipsum iste laborum maiores minima mollitia non
                        numquam obcaecati perspiciatis provident quam quia sequi
                        suscipit tempora temporibus veniam vero voluptas
                        voluptatum. Aperiam aspernatur corporis culpa error
                        facilis ipsa laborum modi nam necessitatibus nesciunt
                        sed tempora veniam, voluptates! Accusamus aspernatur
                        aut, beatae deleniti dolorem enim et eveniet
                        exercitationem explicabo fuga necessitatibus, nesciunt,
                        nostrum officiis optio qui quis ratione repudiandae
                        saepe vel voluptates! Accusantium aut blanditiis
                        delectus dignissimos dolorem dolores dolorum ducimus
                        eaque enim error est et eveniet explicabo facere, illum
                        impedit incidunt inventore ipsa itaque magnam molestias
                        nihil nulla optio, pariatur quas quisquam quo quod
                        repudiandae sequi ullam vero voluptate voluptatem
                        voluptatum! Illo, nemo tenetur. Ab adipisci consectetur,
                        ipsum iure laboriosam natus ut vero. Accusamus, ad
                        aliquam amet animi assumenda consequatur cupiditate
                        deserunt ducimus enim expedita id incidunt laborum magni
                        mollitia nihil nobis officia omnis, perferendis possimus
                        quae qui quod quos ratione repellat repellendus rerum
                        sunt velit voluptas voluptatem voluptatibus? Aliquam
                        aliquid assumenda blanditiis culpa cupiditate ducimus
                        eaque eum fugit laudantium libero molestiae mollitia
                        necessitatibus odit perferendis porro quisquam, rerum
                        similique sit soluta sunt tempora tempore totam vitae.
                        Aliquid assumenda at aut blanditiis consequuntur cumque
                        cupiditate dolore doloremque dolores dolorum ducimus,
                        eius esse facere fugit illo in inventore magnam minima,
                        minus nemo nostrum placeat quaerat, quasi quis quisquam
                        quod repellat sed sequi sunt suscipit. Aperiam
                        blanditiis corporis cum dolor dolorem eum molestias
                        ratione recusandae unde veniam. Architecto itaque magni
                        minima molestias. Aperiam, in ipsum iste minus provident
                        reprehenderit rerum similique sint. Architecto cumque
                        dolorem dolores eius excepturi iste iure modi nam nihil,
                        numquam quia quis saepe voluptas. Accusamus cum cumque
                        dolor facere fugit perspiciatis quis quo, ratione
                        voluptatum? At cupiditate dicta dolor dolore ea facilis
                        laudantium molestias, nemo pariatur perferendis quia
                        quisquam rem repellendus sunt tenetur. Ab commodi
                        deserunt dolores error et eveniet excepturi harum hic
                        illo impedit in incidunt labore nulla odio odit placeat,
                        quasi quidem repellendus sapiente velit, veritatis vitae
                        voluptate. Alias cum eveniet laudantium libero optio
                        possimus quibusdam quis sequi voluptate voluptatum.
                        Aliquid beatae consectetur deserunt iste molestiae quod
                        temporibus voluptatum. Accusamus asperiores atque
                        debitis, earum excepturi laboriosam nam nobis, non, odio
                        placeat quos temporibus vero!
                    </p>
                </StyledDestinationPageContainer>
            </StyledDestinationPageContainerWrapper>
        </StyledDestinationPage>
    )
}

export { DestinationPage }
