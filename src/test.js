import react from 'react';
import React from 'react';
import {useState  }from "react";

const Testcode = () => {

    const [value, setValue] = React.useState(0);
    const [value1, setValue1] = React.useState(1);  
    react.useEffect(() => {
        setValue1(value1 + 1);
    }, [value]);
    return(
<dev>
<button onClick={() => setValue(value+1)}>Incriment </button>
{value>5 && setValue(0)}
<p>value : {value}</p>
{value1>5 && setValue1(0)}
<p>value1 : {value1}</p>
</dev>

    );
   
    
}
export default Testcode;




