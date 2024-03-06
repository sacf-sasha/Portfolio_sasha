import { useState } from "react";
import CiselneTlacitko from "./CiselneTlacitko";
import "./Kalkulacka.css"
import Button from '@mui/material/Button';

function Kalkulacka() {

    const [cislo, nastavCislo] = useState(0);
    const [operace, nastavOperaci] = useState("");
    const [prvniCislo, nastavPrvniCislo] = useState(0);

    function vybranaOperace(symbol) {
        nastavOperaci(symbol)
        nastavPrvniCislo(cislo)
        nastavCislo("0")
    }

    function spocitejVysledek(){
        let vysledek;
        let prvniCisloNum = parseInt(prvniCislo)
        if (operace == "+") {
            vysledek = prvniCisloNum+cislo
        } else if (operace == "-") {
            vysledek = prvniCisloNum-cislo
        } else if (operace == "*") {
            vysledek = prvniCisloNum*cislo
        } else if (operace =="/") {
            vysledek = prvniCisloNum/cislo
        } 
        nastavCislo(vysledek)
    }

    function vymazDisplay() {
        nastavPrvniCislo("0")
        nastavCislo("0")
        nastavOperaci("")
    }

    return (
        <>
            <div id="kalkulacka">
                <div id="displaj">{cislo}</div>
                <div id="tlacitka">
                    <CiselneTlacitko cislo={7} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
                    <CiselneTlacitko cislo={8} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
                    <CiselneTlacitko cislo={9} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
                    <button id="tlacitka" onClick={() => vybranaOperace("+")}>+</button>
                    <br></br>
                    <CiselneTlacitko cislo={4} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
                    <CiselneTlacitko cislo={5} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
                    <CiselneTlacitko cislo={6} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
                    <button id="tlacitka" onClick={() => vybranaOperace("-")}>-</button>
                    <br></br>
                    <CiselneTlacitko cislo={1} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
                    <CiselneTlacitko cislo={2} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
                    <CiselneTlacitko cislo={3} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
                    <button id="tlacitka" onClick={() => vybranaOperace("*")}>*</button>
                    <br></br>
                    <button id="tlacitka" onClick={() => vymazDisplay("C")}>C</button>
                    <CiselneTlacitko cislo={0} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
                    <button id="tlacitka" onClick={() => spocitejVysledek("=")}>=</button>
                    <button id="tlacitka" onClick={() => vybranaOperace("/")}>/</button>
                </div>
            </div>
        </>
    )
}

export default Kalkulacka;







