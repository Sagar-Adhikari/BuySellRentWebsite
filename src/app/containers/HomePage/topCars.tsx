import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { createSelector } from "reselect";
import { Car } from "../../components/car";
import { ICar } from "../../../typings/car";
//seeems like unused but it is used and declared in typings
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';



const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

export function TopCars() {

  const [current, setCurrent] = useState(0);



  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

  const testCar: ICar = {
    name: "Audi S3 Car",
    dailyPrice: 1000,
    gas: "Petrol",
    gearType: "Auto",
    mileage: "10k",
    monthlyPrice: 20000,
    thumbnailSrc: "https://www.ccarprice.com/products/Audi_S3_2.0T_Premium_Plus_2022.jpg"

  }
  const testCar2: ICar = {
    name: "Honda City 5 Seater Car",
    dailyPrice: 1000,
    gas: "Petrol",
    gearType: "Auto",
    mileage: "10k",
    monthlyPrice: 20000,
    thumbnailSrc: "https://nepaldrives.com/wp-content/uploads/2020/11/Honda-City-Hatchback-Unveiled-Thailand-Featured-Image.jpg"

  }

  const cars = [
    (<Car {...testCar2} />),
    (<Car {...testCar} />),
    (<Car {...testCar2} />),
    (<Car {...testCar} />),
    (<Car {...testCar2} />)
  ]

  return (
    <TopCarsContainer>
      <Title>
        Explore Our Top Deals
      </Title>
      <CarsContainer>
        <Carousel value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3
              }
            }
          ]}

          breakpoints={{
            640: {
              plugins: [
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numbersOfSlides: 3
                  }
                },

              ]
            },
            900: {
              plugins: [
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numbersOfSlides: 2
                  }
                },

              ]
            }
          }}

        />
        <Dots value={current} onChange={setCurrent} number={isMobile ? cars.length : Number(cars.length / 3)} />

      </CarsContainer>
    </TopCarsContainer>

  )

}