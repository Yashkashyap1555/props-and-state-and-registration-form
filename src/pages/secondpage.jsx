import { useState } from "react"
import SecondComponent from "../component/secondcomponent"
import ChildsecondPage from "./childsecondpage"

const SecondPage = (props) =>{
    const [hide, setHide] = useState("hjsi")
    console.log(hide)
    console.log(props)
    const {show, setShow} = props

    const valueChange = () =>{
        setShow("Prajapati")
    }
    
    return(
        <div>
            <button onClick={valueChange}>Hit</button>
           <div>
            {hide}
            </div> 
            <ChildsecondPage hide = {hide} setHide = {setHide}/>
        </div>
    )
}
export default SecondPage