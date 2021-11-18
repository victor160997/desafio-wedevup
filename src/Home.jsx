import React, { useEffect, useState } from 'react'
import CardCar from './components/CardCar';
import FormFilter from './components/FormFilter';
import { AllCards, CarList, HomePage, MoveAllCards, MovieLeft, MovieRight } from './style';

export default function Home() {

  const [cars, setCars] = useState();
  const [km, setKm] = useState();
  const [day, setDay] = useState();
  const [ moveX, setMoveX] = useState(0);

  const url = 'http://localhost:3001/cars.json'

  useEffect(() => {
    async function getCars() {
      const result = await fetch(url).then((response) => response.json());
      if (day && !km) {
        const filter = result
          .filter((car) => day <= car.availability.maxDuration)
        return setCars(filter);
      }
      if (km && !day) {
        const filter = result
          .filter((car) => km <= car.availability.maxDistance)
        return setCars(filter);
      }
      if (day && km) {
        const filter = result
          .filter((car) => km <= car.availability.maxDistance
          && day <= car.availability.maxDuration)
        return setCars(filter);
      }
      return setCars(result);
    }

    getCars();

  }, [day, km]);

const handleLeft = () => {
  let x = moveX + Math.round(window.innerWidth / 2);
  let listWidth = cars.length * 550;
  if(x > 0) {
    x = (window.innerWidth * 0.9 - listWidth)  * 2;
  }
  setMoveX(x);
}

const handleRight = () => {
  let x = moveX - Math.round(window.innerWidth / 2);
  let listWidth = cars.length * 550;
  if ((window.innerWidth * 0.9 - listWidth)  * 2 > x) {
    x = 0
  }
  setMoveX(x);
}

  const infos = {
    km,
    setKm,
    day,
    setDay
  };

  return (
    <HomePage>
      <FormFilter infos={ infos } />
      <CarList>
        <MovieRight onClick={ () => handleRight() }>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="50px" viewBox="0 0 24 24" width="50px" fill="#fff"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
        </MovieRight>
        <MovieLeft onClick={ () => handleLeft() }>
          <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg>
        </MovieLeft>
        <AllCards>
          <MoveAllCards style={{ marginLeft: moveX }}>
            { cars &&  cars.map((car) => {
              return (
                <CardCar car={ car } km={ km } day={ day } />
              );
            })}
          </MoveAllCards>
        </AllCards>
      </CarList>
    </HomePage>
  )
}
