import { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';

export default function Eshop() {

    const [produkty, nastavKavy] = useState([])
    const [vybranyProduk, vyberProdukt] = useState("")

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(odpoved => {
            nastavKavy(odpoved.data)
        })
    }, [])

    return (
        <>
            <Typography variant='h2'>Můj Eshop</Typography><br></br>
            <Typography variant='body1'>{vybranyProduk != "" && <span>V košíku je: {vybranyProduk}</span>}</Typography><br></br>
            <Grid container spacing={4}>
                {produkty.map(produkt => (
                    <Grid item xs={2} key={produkt.id}>
                        <Button color='success' variant='outlined' onClick={() => vyberProdukt(parseFloat(vybranyProduk + produkt.price))} style={{ textAlign: "center" }}>Přídat: {produkt.price}</Button>
                        {/* <Button color='error' variant='outlined' onClick={() => vyberProdukt(parseFloat(vybranyProduk - produkt.price))} style={{ textAlign: "center" }}>Odeber: {produkt.price}</Button> */}
                        <Typography variant='caption'>
                            <img src={produkt.image} style={{ width: "250px" }}></img><br></br>
                            {produkt.title}<br></br>
                        </Typography>
                    </Grid>
                ))
                } </Grid>
        </>
    );
}












/*

<>      <Typography variant='h2'>Můj Eshop</Typography><br></br>
    <Typography variant='body1'>{vybranyProduk != "" && <span>V košíku je: {vybranyProduk}</span>}</Typography><br></br>
    <Typography variant='body1'>{vybranyProduk != "" && <span>V košíku je: {vybranyProduk}</span>}</Typography><br></br>
    <Grid container spacing={4}>
        {produkty.map(produkt => (
            <Grid item xs={6} key={produkt.id}>
                <Button color='success' variant='outlined' onClick={() => vyberProdukt(parseFloat(vybranyProduk + produkt.price))} style={{ textAlign: "center" }}>Přídat: {produkt.price}</Button>
                <Typography variant='caption'>
                    <img src={produkt.image} style={{ width: "250px" }}></img><br></br>
                    {produkt.title}<br></br>
                </Typography>
            </Grid>
        ))
        } </Grid>
</>*/