import { useState } from "react";
import Button from '@mui/material/Button';


function PocitadloABarva() {

    const [pocet, nastavPocet] = useState(0)
    const [barva, nastavBarvu] = useState("black")
    const [zobrazeni, nastavZobrazeni] = useState(true)

    function zpracujForm(e) {
        e.preventDefault();
        console.log(e)
        let formData = new FormData(e.target)
        console.log(formData)
    }

    return(
        <>
            {zobrazeni && 
            <div id="pocitadlo_blok">
                <h2 style={{color: barva, fontSize: 50 }}>{pocet}</h2>
                <Button color="secondary" onClick={() => nastavPocet(pocet + 1)}>Klikni</Button>
                <form onSubmit={zpracujForm}>
                    <input type="color"/>
                    <button type="submit">Nastav barvu</button>
                </form>
            </div>
            }
            <br/>
            <button onClick={() => nastavZobrazeni(!zobrazeni)}>Zobrazit / skrýt</button>
        </>
    );
}

export default PocitadloABarva;