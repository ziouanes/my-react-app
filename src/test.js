import React from 'react';
import {useState  }from "react";

const Testcode = () => {

    const [value, setValue] = React.useState(0);
    return(
<dev>
<button onClick={() => setValue(value+1)}>Incriment </button>
{value>5 && setValue(0)}
<p>value : {value}</p>
</dev>

    );

    
}
export default Testcode;




