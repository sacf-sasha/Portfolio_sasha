import { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper'
import { Grid, Typography } from '@mui/material';

export default function Cafe() {
    const [kavy, nastavKavy] = useState([])
    const [vybranaKava, vyberKavu] = useState("")
    useEffect(() => { axios.get('https://api.sampleapis.com/coffee/hot').then(odpoved => { nastavKavy(odpoved.data) }) }, [])

    return (

        <>
            <Typography variant='h2'>Coffeeshop menu</Typography><br></br>


            <Typography variant='body1'>{vybranaKava != "" && <span>Vybraná kava je: {vybranaKava}</span>}</Typography><br></br>

            <Grid container spacing={4}>
                {kavy.map(kava => (

                    <Grid item xs={6} key={kava.id}>
                        <Paper onClick={() => vyberKavu(kava.title)} style={{ textAlign: "center" }}>
                            <Typography variant='caption'>
                                <img src={kava.image} style={{ width: "250px" }}></img><br></br>
                                {kava.title}
                            </Typography>
                        </Paper>
                    </Grid>

                ))

                }
            </Grid>
        </>
    );

}
