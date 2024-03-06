import { useEffect, useState } from "react";
import './test.css'

function Test() {
    const [pocet, setPocet] = useState(localStorage.getItem("pocet") || 0)
    const [prumer, setPrumer] = useState(localStorage.getItem("prumer") || 0)
    const [seznam, setSeznam] = useState("")

    function setCislo(cislo) {
        setSeznam(seznam + "" + cislo+",")
        setPocet(pocet + 1);
        setPrumer(prumer + cislo);
    }
    useEffect(()=> {
        setPrumer(parseInt(localStorage.getItem("prumer") || 0))
        setPocet(parseInt(localStorage.getItem("pocet") || 0))
   },[])

    useEffect(()=> {
        localStorage.setItem("prumer", prumer);
    },[prumer])

    useEffect(()=> {
        localStorage.setItem("pocet", pocet);
    },[pocet])

    return (
        <>
            <div id="prumer">Průměr: {!pocet == 0 && prumer / pocet}</div> <br></br>
            {(prumer<1.5) && <span style={{color: "green"}}>Průměr</span>}
            {(prumer<5) && <span style={{color: "green"}}>Průměr</span>}






            <button id="button" onClick={() => setCislo(1)}> 1 </button>
            <button id="button" onClick={() => setCislo(2)}> 2 </button>
            <button id="button" onClick={() => setCislo(3)}> 3 </button>
            <button id="button" onClick={() => setCislo(4)}> 4 </button>
            <button id="button" onClick={() => setCislo(5)}> 5 </button>
            <br></br>
            <div id="cisla_pro_prumer">{seznam}</div>
        </>
    )
}

export default Test