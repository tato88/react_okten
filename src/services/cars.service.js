import {axiosService} from "./axios.service";
import {links} from "../constants";

export const carsService = {
    getAll: () => axiosService.get(links.cars),
    getById: (id) => axiosService.get(links.cars + '/' + id),
    addCar: (car) => axiosService.post(links.cars,car),
    deleteCarById : (id) => axiosService.delete(links.cars + '/' + id)
}