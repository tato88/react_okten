import React from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services";

const CarForm = ({setNewCar}) => {
    const {register, reset, handleSubmit} = useForm()
    const mySubmit = async (car) => {
        let {data} = await carsService.addCar(car);
        setNewCar(data)
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(mySubmit)}>
                <div><label>model:<input type="text" {...register('model')}/></label></div>
                <div><label>price:<input type="text" {...register('price')}/></label></div>
                <div><label>year:<input type="text" {...register('year')}/></label></div>
                <button>save</button>
            </form>

        </div>
    );
};

export default CarForm;