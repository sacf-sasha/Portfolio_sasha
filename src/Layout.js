import {Outlet, Link, } from "react-router-dom"
import Button from '@mui/material/Button';
import Muilink from '@mui/material/Link';

export default function Layout() {
    return (
    <>
        <nav>

            <Muilink variant="h5" href="/Portfolio_sasha/#">Home</Muilink> <li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/*">Blogs</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/contact">Contact</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/kalkulacka">Kalkulacka</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/pocitadlo">Pocitadlo</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/pocitadlo_a_barva">pocitadlo a barva</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/ukolnicek">Ukolnicek</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/pridavadlo">Pridavadlo</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/prumer">prumer</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/aplikace_hodnoceni">Aplikace hodnocení</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#eshop">Eshop</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/eshop2">Eshop_2</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/coffee">Coffee</Muilink><li style={{listStyleType: "none"}} />
            <Muilink variant="h5" href="/Portfolio_sasha/#/oblibena_barva">Oblibena barva</Muilink><li style={{listStyleType: "none"}} />

        </nav>
        <Outlet/>       
    </>
    )
}