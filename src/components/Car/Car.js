import React from 'react';
import {carsService} from "../../services";

const Car = ({car, setDeletedCars}) => {
    const {id, model, year, price} = car

    const deleteCar = async () => {
        await carsService.deleteCarById(id)
        await setDeletedCars(carsService.getById(id))
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>year:{year}</div>
            <div>price:{price}$</div>
            <button onClick={() => deleteCar()}>delete</button>
            <br/>
            <hr/>
        </div>
    );
};

export default Car;