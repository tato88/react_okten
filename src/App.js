import React, {useState} from 'react';
import CarForm from "./components/CarForm/CarForm";
import Cars from "./components/Cars/Cars";

const App = () => {

    const [newCar,setNewCar] = useState()
    return (
        <div>
            <CarForm setNewCar={setNewCar}/>
            <hr/>
            <Cars newCar={newCar}/>
        </div>
    );
};

export default App;
