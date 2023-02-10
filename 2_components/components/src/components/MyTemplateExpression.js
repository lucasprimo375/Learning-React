const MyTemplateExpression = () => {
    const name = "Primo";
    
    const info = {
        age: 26,
        job: "Programmer",
    }

    return (
        <div>
            <h1>Hello there, {name}</h1>
            <p>You are a {info.job}</p>
        </div>
    );
};

export default MyTemplateExpression;