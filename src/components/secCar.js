import Image from "next/image"

import { SecCa } from "./secCarSty"
import { useState } from "react"

const SecCar=()=>{

    const slideCar = [
        (
            <div key={0} className="car pas">
                <p>uma coisa legal 0</p>
        
            </div>
        ),
        (
            <div key={1} className="car pas">
                <p>uma coisa legal 1</p>
                
            </div>
        ),
        (
            <div key={2} className="car pas">
                <p>uma coisa legal 2</p>
                
            </div>
        )
    ]
    const [car, setCar]=useState(slideCar[0])

    const [nu, setNu]=useState(0)

    const panel = document.querySelector('.panel')
    const passar1 = ()=>{
        panel.classList.remove('sli')
        panel.classList.add('sli1')
        setCar(slideCar[nu+1])
        setNu(nu+1)
        console.log(nu+1)
        console.log(car)
    }

    const passar2=()=>{
       
        setCar(slideCar[nu-1])
        setNu(nu-1)
        console.log(nu-1)
        console.log(car)
    }


    return(
        <SecCa>
            <button onClick={()=>{passar2()}}>aaa</button>
            <div className="panel">
                {car}
            </div>
            <button onClick={()=>{passar1()}}>bbb</button>
        </SecCa>

    )
}

export default SecCar;