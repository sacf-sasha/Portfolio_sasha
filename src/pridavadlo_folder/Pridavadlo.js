import { useEffect, useState } from "react";


function Pridavadlo() {
    const [pocet, setPocet] = useState(10)

    useEffect(()=>{
        setInterval(() => {
            setPocet(pocet + 1)
        },1000);
    })
    return(
        <span>{pocet}</span>
    )
}

export default Pridavadlo;