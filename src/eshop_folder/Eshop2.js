import { Typography, Grid, Paper, Button} from "@mui/material";
import { useEffect, useState } from "react";
import Kosik from "./Kosik";
import Polozka from "./Polozka";
import axios from "axios";

export default function Eshop() {

    const [polozky, nastavPolozky] = useState([]);
    const [kosik, nastavKosik] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(odpoved => {
            nastavPolozky(odpoved.data)
        })
            .catch((err) => console.log(err.message))
    }, []);


    function odebratPolozku(odebraneZbozi) {
        let kosik2 = [...kosik];
        let odebratPolozku = false;
        for (let zbozi of kosik2) {
            if (zbozi.polozka == odebraneZbozi.polozka) {
                if (zbozi.mnozstvi > 1) {
                    zbozi.mnozstvi--;
                } else {
                    odebratPolozku = true;
                }
            }
        }
        if (odebratPolozku) {
            kosik2 = kosik2.filter(zbozi => zbozi.polozka !== odebraneZbozi.polozka);
        }
        nastavKosik(kosik2);
    }


    function pridatPolozku(pridanaPolozka) {
        let novyKosik = [...kosik];  // duplikace kosiku
        let obsahujePolozku = false; // uchovani informace, zda mam v kosiku polozku, kterou pridavam
        for (let zbozi of novyKosik) {
            if (zbozi.polozka == pridanaPolozka) {
                obsahujePolozku = true;
                zbozi.mnozstvi++; // polozka tam je, jenom zvysim mnozstvi
            }
        }
        if (!obsahujePolozku) { // polozka tam neni, musim vlozit novou s mnozstvim 1
            novyKosik.push({ polozka: pridanaPolozka, mnozstvi: 1 });
        }
        nastavKosik(novyKosik);
    }


    return (
        <>
            <Typography variant="h4" gutterBottom>Můj eshop</Typography>
            <Kosik obsahKosiku={kosik} odebratPolozku={odebratPolozku}></Kosik>
            {
                polozky.map(polozka => (
                    <>
                        <Typography variant="h5" gutterBottom>{polozka.title}</Typography>
                        <Button variant="contained" onClick={() => pridatPolozku(polozka)}>Pridat</Button>
                        <Polozka data={polozka} key={polozka.id} />
                    </>
                ))
            }

        </>
    )
}