const Sum = () => {
    const n1 = 3, n2 = 5;
    
    const handleSum = () => {
        console.log(n1 + " plus " + n2 + " is " + (n1 + n2));
    };

    return (
        <div>
            <button onClick={handleSum}>Let's sum {n1} and {n2}</button>
        </div>
    );
};

export default Sum;