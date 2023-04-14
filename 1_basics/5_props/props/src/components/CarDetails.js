const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h1>Car Details</h1>

        <ul>
            <li>Brand: {brand}</li>
            <li>Km: {km}</li>
            <li>Color: {color}</li>
        </ul>
        {newCar && <p>This car is brand new</p>}
    </div>
  )
}

export default CarDetails