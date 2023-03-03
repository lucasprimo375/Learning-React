const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h1>Car Details</h1>

        <ul>
            <li>Brand: {brand}</li>
            <li>Km: {km}</li>
            <li>Color: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails