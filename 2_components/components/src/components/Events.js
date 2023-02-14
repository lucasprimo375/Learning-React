const Events = () => {
    const handleClick = (e) => {
        console.log(e);
        
        console.log("Button was clicked!");
    };
    
    return (
        <div>
            <div>
                <button onClick={handleClick}>Click here!</button>
            </div>

            <div>
                <button onClick={() => console.log("another click!")}>Click here too!</button>
            </div>

            <div>
                <button onClick={() => {
                    console.log("You shouldn't do this")
                }}>Yet another button! Click it!</button>
            </div>
        </div>
    );
};

export default Events;