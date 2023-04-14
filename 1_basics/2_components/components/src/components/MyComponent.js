// yet another comment

import AnotherComponent from "./AnotherComponent";

const MyComponent = () => {
    /**
     * some comment
     */

    return (
        <div>
            {/* 
                some comment
            */}

            <h1 className="myClass">My Component</h1>
            
            <AnotherComponent></AnotherComponent>
        </div>
    );
}

export default MyComponent;
