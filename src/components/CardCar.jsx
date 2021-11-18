import React from 'react'
import { rentalPrice } from './Functions';
import { Card, DivImageCar, InfoCard } from '../style'

export default function CardCar({ car, day, km }) {

  return (
    <Card>
      <DivImageCar img={ car.picturePath }>
        <div></div>
      </DivImageCar>
      <InfoCard>
        <h1>{ `${ car.brand } - ${ car.model }`}</h1>
        <span>{ `Price per day: $${ car.pricePerDay }`}</span>
        <span>{ `Price per km: $${ car.pricePerKm }`}</span>
        <span>
          { day && km ? `Price: $${rentalPrice(day, car.pricePerDay, km, car.pricePerKm)}` 
            : 'Price: '}
        </span>
      </InfoCard>
    </Card>
  )
}
