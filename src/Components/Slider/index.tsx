import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

interface CardSliderProps {
    title?: string
    children: React.ReactChild
}

interface SliderSettings {
    dots: boolean
    infinite: boolean
    speed: number
    slidesToShow: number
    slidesToScroll: number
}

const CardSlider = ({ title, children }: CardSliderProps) => {
    const settings: SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    }
    return (
        <div>
            <h2>{title}</h2>
            <Slider {...settings}>{children}</Slider>
        </div>
    )
}

export { CardSlider }
