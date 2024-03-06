import * as React from 'react';
import Button from '@mui/material/Button';

 export default function PolozkaUkolu({ukol, poradi, SmazatUkol, fceSpln}) {
    return(
        <>
        <div className="ukol">
            <span>{poradi} </span> 
            {!ukol.splneno && <span className="textUkolu">{ukol.text}</span>}
            {ukol.splneno && <span className="splneno">{ukol.text}</span>}

            <Button variant="outlined" onClick={()=> SmazatUkol(poradi)}>smazat</Button> 
            <Button variant="outlined" onClick={()=> fceSpln(poradi)}>Hotovy</Button> 
        </div>
        <br/>
        </>
    )
}
