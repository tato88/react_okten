import React, {useEffect, useState} from 'react';

import {carsService} from "../../services";
import Car from "../Car/Car";

const Cars = ({newCar}) => {

    const [cars, setCars] = useState([])
    const [deletedId, setDeletedId] = useState(null)

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if (newCar) {
            // setCars([...cars, newCar])  //or
            setCars(prevState => [...prevState, newCar])  //or

        }
        if (deletedId) {
            setCars(cars.filter(car => car.id !== deletedId))
        }
    }, [newCar, deletedId])

    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car} setDeletedId={setDeletedId}/>)}
        </div>
    );
};

export default Cars;