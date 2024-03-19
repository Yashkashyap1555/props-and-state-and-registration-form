import { useState } from "react"
import SecondPage from "../pages/secondpage"

const SecondComponent = () =>{
    const [show, setShow] = useState("MR.Yash")
    console.log(show)
    return(
        <div>
            {show}
            <SecondPage show ={show} setShow ={setShow}/>
        </div>
    )
}
export default SecondComponent