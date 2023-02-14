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
        </div>
    );
};

export default Events;