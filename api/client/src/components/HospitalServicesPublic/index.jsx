import React, { useRef } from 'react'
import Card from 'components/DashboardShared/CardLayout'
import styled from "styled-components/dist/styled-components.js"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Button from 'components/GlobalComponents/Button'
import RightArrow from 'assets/images/right-arrow.svg'
import LeftArrow from 'assets/images/left-arrow.svg'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import ServicesSlider from 'components/ServicesSlider';

const CardHeader = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Line = styled.div`
    margin: 30px 0;
    height: 1px;
    width: 100%;
    background: ${"#396F78"};
  `

const H2 = styled.h2`
 font-size : 22px;
`

const RoundedButton = styled(Button)`
    border-radius: 999px;
    padding: 10px;
    background: ${"#4DADBD"};
`

const RightArrowImage = styled.img`
    width: 25px;
`

const LeftArrowImage = styled.img`
    width: 25px;
`

const CardBody = styled.div`
    padding: 0 50px;
`
const CardHeaderLeft = styled.div``

const CardHeaderRight = styled.div`
    display: flex;
    gap: 20px;
`




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
const HospitalServicesPublic = ({ hospitalData }) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    console.log(hospitalData)
    return (
        <Card>
            <CardHeader>
                <CardHeaderLeft>

                    <H2>Services</H2>
                </CardHeaderLeft>
                <CardHeaderRight>
                    <RoundedButton ref={navigationPrevRef}>
                        <LeftArrowImage src={LeftArrow} alt="Left Arrow" />
                    </RoundedButton>
                    <RoundedButton ref={navigationNextRef}>
                        <RightArrowImage src={RightArrow} alt="Right Arrow" />
                    </RoundedButton>
                </CardHeaderRight>
            </CardHeader>
            <Line />
            <CardBody>
                <ServicesSlider services={hospitalData?.services || []} ref={{navigationPrevRef,navigationNextRef}}  />
            </CardBody>
        </Card>
    )
}

export default HospitalServicesPublic
