export const addCar = (newCar) => {
    return {
        type: 'Add_Car',
        value: newCar
    }
}

export const removeCar = (index) => {
return {
    type: 'REMOVE_CAR',
    value: index
}
}