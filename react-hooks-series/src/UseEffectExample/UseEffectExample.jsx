// about useEffect hooks

// The useEffect Hook allows to perform side effects in the components.
// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)
//-----------------------------------------------------------------------------

// What does useEffect do? 

// By using this Hook, you tell React that your component needs to do something after render. 
// React will remember the function you passed,
// and call it later after performing the DOM updates. In this effect, we set the document title, 
// but we could also perform data fetching or call some other imperative API.
//------------------------------------------------------------------------------

// Does useEffect run after every render? 

// Yes! By default, it runs both after the first render and after every update. 
// you might find it easier to think that effects happen “after render”. 
// React guarantees the DOM has been updated by the time it runs the effects.
//------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';

const TitleUpdate = ()=> {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} 'times`;
        
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default TitleUpdate;

