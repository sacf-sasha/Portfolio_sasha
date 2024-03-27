import { Card, CardContent, Typography } from "@mui/material"
import { useState } from "react"
import Ctverec from "./Ctverec"

export default function NastavOblibenuBarvu(props) {    
    
    return(
        <>
            <Typography>Jaká je tvoje oblibená barva?</Typography> <br/>
            <input type="color" value={props.barva} onChange={(e) => props.nastavBarvu(e.target.value)}></input>
        
            <Ctverec oblibenaBarva={props.barva}/>
        
        </>
    )
}