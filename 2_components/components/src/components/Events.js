const Events = () => {
    const handleClick = (e) => {
        console.log(e);
        
        console.log("Button was clicked!");
    };

    const renderStuff = (shouldRender) => {
        if (shouldRender) {
            return <h1>Should render this</h1>
        }

        return <h1>Should render that</h1>
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

            <div>
                {renderStuff(true)}

                {renderStuff(false)}
            </div>
        </div>
    );
};

export default Events;