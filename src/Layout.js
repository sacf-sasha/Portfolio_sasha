import {Outlet, Link, } from "react-router-dom"
import Button from '@mui/material/Button';
import Muilink from '@mui/material/Link';

export default function Layout(props) {
    return (
    <>
        <nav style={{color: props.barva}}>

            <Muilink style={{color: props.barva}} variant="h5" underline="none" href="/Portfolio_sasha/#">Home</Muilink> <li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" underline="none" href="/Portfolio_sasha/#/*">Blogs</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" underline="none" href="/Portfolio_sasha/#/contact">Contact</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#/kalkulacka">Kalkulačka</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#/pocitadlo">Počitadlo</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#/pocitadlo_a_barva">Počitadlo a barva</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#/ukolnicek">Ukolniček</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#/pridavadlo">Přidávadlo</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#/prumer">Průmer</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#/aplikace_hodnoceni">Aplikace hodnocení</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#eshop">Eshop</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#/eshop2">Eshop_2</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#/coffee">Coffee</Muilink><li style={{listStyleType: "none"}} />
            <Muilink style={{color: props.barva}} variant="h5" href="/Portfolio_sasha/#/oblibena_barva">Oblibená barva</Muilink><li style={{listStyleType: "none"}} />

        </nav>
        <Outlet/>       
    </>
    )
}