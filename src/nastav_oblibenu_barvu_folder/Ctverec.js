import { Card, CardContent, Typography } from "@mui/material"

export default function NastavOblibenuBarvu(props) {    
    const oblibenaBarva = props.oblibenaBarva
    return(
        <>
            <Card variant="outlined" style={{width:"300px",  backgroundColor:oblibenaBarva}}>
                <CardContent>
                    <Typography sx={{fontSize: 14}} gutterBottom>
                        Moje oblibena barva
                    </Typography>
                </CardContent>
            </Card>
        
        </>
    )
}