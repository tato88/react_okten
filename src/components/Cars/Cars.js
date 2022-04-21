import React, {useEffect, useState} from 'react';

import {carsService} from "../../services";
import Car from "../Car/Car";

const Cars = ({newCar}) => {

    const [cars, setCars] = useState()
    const [deteledCars, setDeletedCars] = useState()

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [deteledCars])

    useEffect(() => {
        if (newCar) {
            // setCars([...cars, newCar])  //or
            setCars(prevState => [...prevState, newCar])  //or

        }
    }, [newCar])

    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car} setDeletedCars={setDeletedCars()}/>)}
        </div>
    );
};

export default Cars;