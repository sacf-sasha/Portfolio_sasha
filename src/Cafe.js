import { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper'
import { Grid, Typography } from '@mui/material';

export default function App() {

    const [kavy, nastavKavy] = useState([])
    const [vybranaKava, vyberKavu] = useState("")

    useEffect(() => {
        axios.get('https://api.sampleapis.com/coffee/hot')
            .then(odpoved => {
                nastavKavy(odpoved.data)
            })
    }, [])

    return (
        <>
            <Typography variant='h2'>Coffeeshop menu</Typography><br></br>
            <Typography variant='body1'>{vybranaKava != "" && <span>Vybraná kava je: {vybranaKava}</span>}</Typography><br></br>
            <Grid container spacing={2}>
                {kavy.map(kava => (
                    <>
                        <Grid item xs={3}>
                            <Paper onClick={() => vyberKavu(kava.title)} style={{ textAlign: "center" }}>
                                <img src={kava.image} style={{ width: "350px", }}></img>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper style={{height: "285px", paddingTop: "240px"}}>
                            <Typography variant='caption'>{kava.title}</Typography>
                            </Paper>
                        </Grid>
                    </>
                ))
                }
            </Grid>
        </>
    );
}
