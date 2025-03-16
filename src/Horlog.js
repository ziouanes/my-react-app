import {useState , useEffect }from "react";

function Horloge(){
    const [heure, setHeure] = useState(new Date());
    const interval = setInterval(() => { setHeure(new Date()); }, 1000);

    return <h1>Heure actuelle : {heure.toLocaleTimeString()}</h1>
}
export default Horloge;