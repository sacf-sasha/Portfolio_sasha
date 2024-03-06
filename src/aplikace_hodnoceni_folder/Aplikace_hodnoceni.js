import { useEffect, useState } from "react";
import './aplikace_hodnoceni.css'



function Aplikace_hodnoceni() {

    const [cislo, setCislo] = useState(localStorage.getItem("cislo") || 0);
    const [cas,nastavCas] = useState(new Date)
    
    useEffect(()=> {
         setCislo(parseInt(localStorage.getItem("cislo") || 0))
    },[])    
    useEffect(()=> {
        localStorage.setItem("cislo", cislo);
    },[cislo])

    useEffect(()=> {
        setInterval(() => {
           nastavCas(new Date())
        }, 1000);
    },[]) 
    



    
    return (
        <>
        <div>
            <h3>{cislo}</h3> 
            <button id="button1" onClick={() => setCislo(cislo+1)}> + </button>
            <button id="button2" onClick={() => setCislo(cislo-1)}> - </button>
        </div>
        <div id="cas">
            <span>{cas.toISOString()} </span>
        </div>
        </>
    );
}


export default Aplikace_hodnoceni;