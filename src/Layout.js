import {Outlet, Link} from "react-router-dom"
import Button from '@mui/material/Button';


export default function Layout() {
    return (
    <>
        <nav>
            <ul>
                <li>
                    <Button href="/">Home</Button>
                </li>
                <li>
                    <Button href="/blogs">Blogs</Button>
                </li>
                <li>
                    <Button href="/contact">Contact</Button>
                </li>
                <li>
                    <Button href="/kalkulacka">Kalkulacka</Button>
                </li>
                <li>
                    <Button href="/pocitadlo">Pocitadlo</Button>
                </li>
                <li>
                    <Button href="/pocitadlo_a_barva">pocitadlo a barva</Button>
                </li>
                <li>
                    <Button href="/ukolnicek">Ukolnicek</Button>
                </li>
                <li>
                    <Button href="/pridavadlo">Pridavadlo</Button>
                </li>
                <li>
                    <Button href="/prumer">prumer</Button>
                </li>
                <li>
                    <Button href="/aplikace_hodnoceni">Aplikace hodnocení</Button>
                </li>



            </ul>
        </nav>
        <Outlet/>       
    </>
    )
}