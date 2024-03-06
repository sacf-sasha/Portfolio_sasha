import { useState } from "react";
import Button from '@mui/material/Button';




function Pocitadlo() {

    const [pocet, setPocet] = useState(0);
    const [barva, setBarva] = useState(0);
    const [viditelnost, setViditelnost] = useState(true);
    const [viditelnostObrazku, setViditelnostObrazku] = useState(false);

    return (
        <>

            {viditelnost &&
                <div>
                    <h2 style={{ color: barva, fontSize: pocet + 10 }}>{pocet}</h2>
                    
                    <Button color="success" variant="contained"  onClick={() => setPocet(pocet + 1)}>Plus</Button>
                    <Button color="error" variant="contained"  onClick={() => setPocet(pocet - 1)}>Minus</Button>
                    {/* <button onClick={() => setPocet(pocet*pocet)}>Mocnina</button>
                    <button onClick={() => setPocet(pocet == 0)}>reset</button>
                    <button onClick={() => setPocet(pocet/2)}>delit 2</button> */}
                    {barva == "black" && <button onClick={() => setBarva("red")}>barva</button>}
                    {barva == "red" && <button onClick={() => setBarva("black")}>barva</button>}

                    <Button variant="contained" onClick={() => setViditelnostObrazku(!viditelnostObrazku)}>Zobrazit / Skrýt vtip</Button>
                    
                </div>
                }
                {viditelnostObrazku &&
                <img src="images/obrazek_IT.jpg" style={{width: "500px"}}/>
            }     
            {!viditelnost && <Button variant="outlined" onClick={() => setViditelnost(true)}>Zobrazit</Button>}
            {viditelnost && <Button variant="outlined" onClick={() => setViditelnost(false)}>Skrýt</Button>}

        </>);
}



export default Pocitadlo

